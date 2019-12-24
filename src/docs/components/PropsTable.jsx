import React from "react";
import { Title2 } from "../../ui/components/titles/Titles";

export default function PropsTable({ component = "", compProps }) {
  return (
    <>
      <Title2>{component} Properties</Title2>
      <table className="ln-props-table">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default Value</th>
        </tr>
        {compProps.map(prop => (
          <tr>
            <td>
              <span className="ln-props-table__name">{prop.name}</span>
            </td>
            <td>
              <span className="ln-props-table__type">{prop.type}</span>
            </td>
            <td>
              <span className="ln-props-table__default">
                {prop.default || ""}
              </span>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
