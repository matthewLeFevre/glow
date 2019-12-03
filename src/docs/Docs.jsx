import React from "react";
import ConsoleView from "../ui/components/containers/ConsoleView";
import Container from "../ui/components/containers/Container";
import { Paragraph } from "../ui/components/bodyText/BodyText";
import Card from "../ui/components/card/Card";
import Form from "../ui/components/form/Form";
import FloatingTextInput from "../ui/components/form/FloatingTextInput";
import FormField from "../ui/components/form/FormField";
import { NavLink } from "react-router-dom";

export default function Docs() {
  return (
    <ConsoleView>
      <Container className="col--12 col--sml--3"></Container>
      <Container className="col--12 col--sml--9">
        <Container className="ln-doc-content"></Container>
      </Container>
    </ConsoleView>
  );
}

export function DocNav({ children }) {
  return <section className="ln-doc-nav">{children()}</section>;
}

export function DocNavGroup({ children, title }) {
  return (
    <ul className="ln-doc-nav__group">
      <li className="ln-doc-nav__group-title">{title}</li>
      {children}
    </ul>
  );
}

export function DocNavLink({ text, icon, to }) {
  return (
    <li className="ln-doc-nav__group-item">
      <NavLink to={to} className="ln-doc-nav__group-link">
        {icon ? icon : ""}
        {text}
      </NavLink>
    </li>
  );
}

export function DocNavLocalLink({ text, icon, id }) {}

export function DisplayCase({ children, className = "" }) {
  return <div className="ln-display-case">{children}</div>;
}

export function DisplaySection({ children }) {
  return <div className="ln-display-case__section">{children}</div>;
}

export function WireframeParagraph({ lines }) {}
