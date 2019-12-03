import React from "react";
import { Title1 } from "../../ui/components/titles/Titles";
import { Paragraph } from "../../ui/components/bodyText/BodyText";
import { DisplayCase, DisplaySection } from "../Docs";
import Form from "../../ui/components/form/Form";
import FloatingTextInput from "../../ui/components/form/FloatingTextInput";
import FormField from "../../ui/components/form/FormField";

export default function FormView() {
  return (
    <>
      <Title1>Form</Title1>
      <Paragraph>
        Welcome to the glow library documentation. Components are outlined with
        thier usage.
      </Paragraph>
      <DisplayCase>
        <DisplaySection>
          <Form type="grid">
            <FloatingTextInput
              className="col--6"
              required={true}
              label="name"
            />
            <FloatingTextInput
              className="col--6"
              required={true}
              label="email"
            />
            <FloatingTextInput
              className="col--6"
              required={true}
              label="password"
            />
            <FormField className="col--12">
              <button className="ln-btn--confirm" type="submit">
                Submit
              </button>
            </FormField>
          </Form>
        </DisplaySection>
      </DisplayCase>
    </>
  );
}
