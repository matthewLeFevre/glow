import React from "react";
import { Title1, Title2 } from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";
import Button from "../../ui/components/buttons/Button";

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
