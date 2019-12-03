import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";

export default function TabSection({ tabs, children }) {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(tabs[0]);
  }, [tabs]);

  return (
    <section className="ln-tab-section">
      <div className="ln-tab-section__tabs">
        {tabs.map(tab => (
          <button
            className={`ln-tab-section__tab ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab(tab);
            }}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="ln-tab-section__body">{children(activeTab)}</div>
    </section>
  );
}
