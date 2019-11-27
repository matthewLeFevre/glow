import React from "react";
import ConsoleView from "../ui/containers/ConsoleView";
import Container from "../ui/containers/Container";
import { Title, Heading1 } from "../ui/heading/PrimaryHeading";
import { Paragraph } from "../ui/bodyText/BodyText";

export default function Docs() {
  return (
    <ConsoleView>
      <Container className="col--12 col--sml--3">
        <ul>
          <li>
            <a href="">Introduction</a>
          </li>
          <li>
            <a href="">Buttons</a>
          </li>
        </ul>
      </Container>
      <Container className="col--12 col--sml--9">
        <Title>Introduction</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est iste a
          voluptatibus voluptates sit laboriosam quae, suscipit, voluptatum
          harum sapiente, ex perferendis quam at veniam dolorem iusto eligendi
          architecto? Exercitationem.
        </Paragraph>
        <Heading1>Buttons</Heading1>
        <DisplayCase>
          <DisplaySection>
            <button className="ln-btn--primary">Primary</button>
            <button className="ln-btn--confirm">Confirm</button>
            <button className="ln-btn--success">Success</button>
            <button className="ln-btn--caution">Caution</button>
            <button className="ln-btn--warning">Warning</button>
          </DisplaySection>
          <DisplaySection>
            <button className="ln-btn--primary">Primary</button>
            <button className="ln-btn--confirm">Confirm</button>
            <button className="ln-btn--success">Success</button>
            <button className="ln-btn--caution">Caution</button>
            <button className="ln-btn--warning">Warning</button>
          </DisplaySection>
        </DisplayCase>
      </Container>
    </ConsoleView>
  );
}

function TextBlock({ children }) {
  return <p className="ln-text-block">{children}</p>;
}

function DisplayCase({ children, className = "" }) {
  return <div className="ln-display-case">{children}</div>;
}

function DisplaySection({ children }) {
  return <div className="ln-display-case__section">{children}</div>;
}
