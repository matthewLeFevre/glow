import React, { useState } from "react";
import { NotificationContainer } from "../../components/notification/Notification";
import FormField from "../../components/form/FormField";
import TextInput from "../../components/form/TextInput";
import Card from "../../components/card/Card";

function ColorView() {
  return (
    <main className="ln-view--console">
      <section className="ln-container col--12">
        <h1>Form</h1>
        <form action="" className="ln-form">
          <FormField>
            <TextInput label="name" />
          </FormField>
        </form>
        <Card title="butt checks" />
      </section>
    </main>
  );
}

export default ColorView;
