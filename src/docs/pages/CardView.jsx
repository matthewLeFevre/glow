import React from "react";
import { Title1 } from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";
import { DisplayCase, DisplaySection } from "../Docs";
import Card from "../../ui/components/card/Card";

export default function CardView() {
  return (
    <>
      <Title1>Card</Title1>
      <Paragraph>
        Welcome to the glow library documentation. Components are outlined with
        thier usage.
      </Paragraph>
      <DisplayCase>
        <DisplaySection>
          <Card title="Card Title" />
        </DisplaySection>
      </DisplayCase>
    </>
  );
}
