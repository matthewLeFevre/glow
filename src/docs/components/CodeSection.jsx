import React from "react";
import Highlight from "react-highlight.js";
import { Title2 } from "../../ui/components/titles/Titles";
import TabSection from "../../ui/components/tabSection/TabSection";

export default function CodeSection({ jsx, scss }) {
  return (
    <>
      <Title2>Code</Title2>
      <div className="ln-spacing-3" />
      <TabSection tabs={["JSX", "SCSS"]}>
        {activeTab => {
          if (activeTab === "JSX") {
            return (
              <Highlight className="ln-doc-code" language="html">
                {jsx}
              </Highlight>
            );
          } else if (activeTab === "SCSS") {
            return (
              <Highlight className="ln-doc-code" language="scss">
                {scss}
              </Highlight>
            );
          } else {
            return "";
          }
        }}
      </TabSection>
    </>
  );
}
