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
  const cardJSX = `<Card>
  <CardHeader>
    <Title3>Card Header</Title3>
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
              <Title3>Card Header</Title3>
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
      <PropsTable compProps={cardProps} />
    </>
  );
}
