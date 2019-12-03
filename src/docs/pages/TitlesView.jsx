import React from "react";
import {
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6
} from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";
import { DisplayCase, DisplaySection } from "../Docs";

export default function TitlesView() {
  return (
    <>
      <Title1>Title</Title1>
      <Paragraph>
        Welcome to the glow library documentation. Components are outlined with
        thier usage.
      </Paragraph>
      <DisplayCase>
        <DisplaySection>
          <Title1>First Heading</Title1>
          <Title2>Second Heading</Title2>
          <Title3>Third Heading</Title3>
          <Title4>Fourth Heading</Title4>
        </DisplaySection>
      </DisplayCase>
    </>
  );
}
