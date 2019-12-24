import React from "react";
import {
  Title1,
  Title4,
  Title5,
  Title3
} from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";
import { DisplayCase, DisplaySection } from "../Docs";
import Card, {
  CardHeader,
  CardMenu,
  CardBody,
  CardImage,
  CardMenuItem,
  CardFooter,
  ActionBar
} from "../../ui/components/card/Card";
import CodeSection from "../components/CodeSection";
import PropsTable from "../components/PropsTable";

export default function CardView() {
  const cardProps = [{ name: "children", type: "JSX", default: "" }];
  const cardMenuItemProps = [
    { name: "type", type: "string", default: '"externalLink"' },
    { name: "href", type: "string", default: "" },
    { name: "text", type: "string", default: "" },
    { name: "to", type: "string", default: "" },
    { name: "onClick", type: "function", default: "" }
  ];
  const cardJSX = `<Card>
  <CardHeader>
    <Title3 className="ln-txt--white">Card Header</Title3>
    <CardMenu>
      <CardMenuItem
        type="externalLink"
        href="#"
        text="card menu item"
      />
    </CardMenu>
  </CardHeader>
  <CardImage
    src={
      "http://bluerimdesign.com/server_assets/_Building%20and%20brainstorming%20Problem-solving%20web%20applications%20that%20help%20you%20and%20others.png"
    }
    alt={"Building and brainstorming"}
  />
  <CardBody>
    <Title5>Card Body</Title5>
    <Paragraph>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Voluptas nesciunt vitae
    </Paragraph>
  </CardBody>
  <CardFooter>
    <ActionBar>
      <button className="action-bar__icon" type="button">
        <i className="fas fa-heart"></i>
      </button>
      <button className="action-bar__icon" type="button">
        <i className="fas fa-share"></i>
      </button>
      <button className="action-bar__icon" type="button">
        <i className="fas fa-comment"></i>
      </button>
      <button className="action-bar__icon" type="button">
        <i className="fas fa-cloud-download"></i>
      </button>
    </ActionBar>
  </CardFooter>
</Card>`;
  const cardScss = `.ln-card {
    box-shadow: $ln-bs-1;
    width: 100%;
    min-width: 275px;
    max-width: 275px;
    margin: $ln-spacing-1;
  }
  
  .ln-card__head {
    @include flex(row, nowrap, space-between, center);
    padding: $ln-spacing-1;
    background-color: $ln-color-pri;
    color: $ln-white;
  }
  .ln-card__title {
    font-size: $ln-font-lrg;
  }
  .ln-card__body {
    padding: $ln-spacing-1;
    h3, h4, h5, h6 {
      font-size: $ln-font-lrg;
      color: $ln-darkgrey;
      a {
        color: $ln-darkgrey;
        text-decoration: none;
      }
    }
    span {
      font-size: $ln-font-tny;
      color: $ln-grey;
    }
    p {
      margin: $ln-spacing-1 0;
      font-size: $ln-font-sml;
      &:last-child {
        margin-bottom: 0;
      }
    }
    a {
      @include transition;
      color: $ln-grey;
      &:hover {
        color: $ln-lightgrey;
      }
    }
  }
  .ln-card__img {
    display: block;
    max-width: 100%;
  }
  .ln-card__footer{}
  
  .ln-card-menu {
    @include flex(row, nowrap, center, center);
    position: relative;
  }
  .ln-card-menu__toggle {
    @include transition;
    height: 30px;
    width: 30px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: block;
    color: $ln-white;
    position:relative;
    z-index: $ln-z-float;
    border-radius: 0;
    &:focus {
      outline: none;
    }
    &.open {
      box-shadow: $ln-bs-1;
      background-color: $ln-white;
      color: $ln-darkgrey;
      border-radius: $ln-br-2;
    }
    &:hover {
      background-color: $ln-darkgrey; 
    }
  }
  .ln-card-menu__icon {
    font-size: 20px;
    &.hidden {
      display: none;
    }
  }
  .ln-card-menu--down {
    @include transition();
    overflow: hidden;
    max-height: 0;
    min-height: 0;
    right: 0;
    overflow: hidden;
    position: absolute;
    background-color: $ln-white;
    top: 0;
    width: 120px;
    color: $ln-darkgrey;
    box-shadow: $ln-bs-1;
    border-radius: $ln-br-1;
    z-index: $ln-z-float;
    &.open {
      // height: 100%;
      max-height: 210px;
      min-height: 100px;
    }
  }
  .ln-card-menu--down__toggle {
    @include transition;
    height: 30px;
    width: 30px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: block;
    color: $ln-darkgrey;
    position:relative;
    margin-left: auto;
    z-index: $ln-z-float;
    border-radius: 0;
    &:focus {
      outline: none;
    }
  }
  .ln-card-menu__item {
  }
  .ln-card-menu__link {
    @include transition;
    padding: .25rem;;
    display: block;
    color: $ln-darkgrey;
    text-decoration: none;
    font-size: $ln-font-sml;
    font-weight: $ln-font-weight-3;
    border-left: 3px solid transparent;
    &:hover {
      border-color: $ln-darkgrey;
      background-color: $ln-lightestgrey;
    }
  }
  .ln-card-menu {}
  
  .action-bar {
    @include flex(row, nowrap, flex-end, center);
    padding: $ln-spacing-1;
  }
  
  .action-bar__icon {
    @include flex(row, nowrap, center, center);
    @include transition;
    border: none;
    background-color: transparent;
    font-size: $ln-font-lrg;
    padding: $ln-spacing-1;
    color: $ln-grey;
    cursor: pointer;
    &:hover {
      color: $ln-color-pri;
    }
  }`;
  return (
    <>
      <Title1>Card</Title1>
      <Paragraph>
        Cards are very customizable components that have lots of optional
        internal elements.
      </Paragraph>
      <DisplayCase>
        <DisplaySection>
          <Card>
            <CardHeader>
              <Title3 className="ln-txt--white">Card Header</Title3>
              <CardMenu>
                <CardMenuItem
                  type="externalLink"
                  href="#"
                  text="card menu item"
                />
              </CardMenu>
            </CardHeader>
            <CardImage
              src={
                "http://bluerimdesign.com/server_assets/_Building%20and%20brainstorming%20Problem-solving%20web%20applications%20that%20help%20you%20and%20others.png"
              }
              alt={"Building and brainstorming"}
            />
            <CardBody>
              <Title5>Card Body</Title5>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas nesciunt vitae
              </Paragraph>
            </CardBody>
            <CardFooter>
              <ActionBar>
                <button className="action-bar__icon" type="button">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="action-bar__icon" type="button">
                  <i className="fas fa-share"></i>
                </button>
                <button className="action-bar__icon" type="button">
                  <i className="fas fa-comment"></i>
                </button>
                <button className="action-bar__icon" type="button">
                  <i className="fas fa-cloud-download"></i>
                </button>
              </ActionBar>
            </CardFooter>
          </Card>
        </DisplaySection>
      </DisplayCase>
      <CodeSection jsx={cardJSX} scss={cardScss} />
      <PropsTable component="Card Header" compProps={cardProps} />
      <PropsTable component="Card Menu" compProps={cardProps} />
      <PropsTable component="Card Menu Item" compProps={cardMenuItemProps} />
      <PropsTable component="Card Body" compProps={cardProps} />
    </>
  );
}
