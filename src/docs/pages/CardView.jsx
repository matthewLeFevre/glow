import React from "react";
import { Title1, Title4, Title5 } from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";
import { DisplayCase, DisplaySection } from "../Docs";
import Card, {
  CardHeader,
  CardMenu,
  CardBody,
  CardImage
} from "../../ui/components/card/Card";
import CodeSection from "../components/CodeSection";
import PropsTable from "../components/PropsTable";

export default function CardView() {
  const cardProps = [{ name: "children", type: "JSX", default: "" }];
  const cardJSX = `<Card>
  <CardBody>
    <Title5>...text</Title5>
    <Paragraph>...text</Paragraph>
  </CardBody>
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
            <CardBody>
              <Title5>Card Body</Title5>
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas nesciunt vitae
              </Paragraph>
            </CardBody>
          </Card>
        </DisplaySection>
      </DisplayCase>
      <CodeSection jsx={cardJSX} scss={cardScss} />
      <PropsTable compProps={cardProps} />
    </>
  );
}
