import React from "react";
import { Title1 } from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";

export default function Welcome() {
  return (
    <>
      <Title1>Introduction</Title1>
      <Paragraph>
        Welcome to the glow library documentation. Components are outlined with
        thier usage.
      </Paragraph>
    </>
  );
}
