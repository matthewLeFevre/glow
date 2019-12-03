import React from "react";
import { Title1 } from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";
import { DisplayCase, DisplaySection } from "../Docs";

export default function GridView() {
  return (
    <>
      <Title1>Grid</Title1>
      <Paragraph>
        Welcome to the glow library documentation. Components are outlined with
        thier usage.
      </Paragraph>
      <DisplayCase>
        <DisplaySection>
          <div className="ln-grid--gap">
            <div className="col--12 col--sml--4 ln-bg--lava"></div>
            <div className="col--12 col--sml--4 ln-bg--lava"></div>
            <div className="col--12 col--sml--4 ln-bg--lava"></div>
            <div className="col--12 col--sml--6 ln-bg--indigo"></div>
            <div className="col--12 col--sml--6 ln-bg--indigo"></div>
          </div>
        </DisplaySection>
      </DisplayCase>
      <Paragraph>
        Grids can have custom configurations based on need. Simply use the grid
        builder mixin and away you go.
      </Paragraph>
    </>
  );
}
