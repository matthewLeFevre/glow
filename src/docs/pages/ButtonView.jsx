import React from "react";
import { Title1, Title2 } from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";
import { DisplayCase, DisplaySection } from "../Docs";
import PropsTable from "../components/PropsTable";
import Highlight from "react-highlight.js";
import Button from "../../ui/components/buttons/Button";
import CodeSection from "../components/CodeSection";

export default function ButtonView() {
  let compProps = [
    { name: "text", type: "string", default: '"click"' },
    { name: "type", type: "string", default: '"button"' },
    { name: "purpose", type: "string", default: '"primary"' },
    { name: "onClick", type: "function", default: "() => {}" },
    { name: "className", type: "string", default: "" }
  ];
  let jsxCode = `
  <Button purpose="primary" text="Primary" />
  <Button purpose="confirm" text="Confirm" />
  <Button purpose="success" text="Success" />
  <Button purpose="caution" text="Caution" />
  <Button purpose="warning" text="Warning" />
  `;
  let scssCode = `
  $btn-padding: 10px 20px;

  @mixin btn-builder() {
    display: inline;
    padding: $btn-padding;
    margin:  0 0 $ln-spacing-1 0;
    border: none;
    border-radius: none;
    text-align: center;
    text-decoration: none;
    font-weight: $ln-font-weight-3;
    box-shadow: $ln-bs-1;
    cursor: pointer;

    &:hover {
      box-shadow: $ln-bs-2;
    }

    &:not(:last-of-type) {
      margin-right: $ln-spacing-1;
    }
  }

  .ln-btn {
    @each $action, $value in $ln-btn-colors {
      &--#{$action} {
        @include btn-builder;
        @include transition;
        background-color: nth($value, 1);
        color: set-text-color(nth($value, 1));
        &:hover {
          background-color: nth($value, 2);
          color: set-text-color(nth($value, 2));
        }
        &.active {
          background-color: nth($value, 2);
          color: set-text-color(nth($value, 2));
        }
      }
    }
  }`;
  return (
    <>
      <Title1>Button</Title1>
      <Paragraph>
        Buttons are the simplest and most popular component to implement. There
        are a few specific props that can be supplied to customize the purpose
        of the component.
      </Paragraph>
      <DisplayCase>
        <DisplaySection>
          <Button onClick={() => {}} purpose="primary" text="Primary" />
          <Button onClick={() => {}} purpose="confirm" text="Confirm" />
          <Button onClick={() => {}} purpose="success" text="Success" />
          <Button onClick={() => {}} purpose="caution" text="Caution" />
          <Button onClick={() => {}} purpose="warning" text="Warning" />
        </DisplaySection>
      </DisplayCase>
      <CodeSection jsx={jsxCode} scss={scssCode} />
      <PropsTable compProps={compProps} />
    </>
  );
}
