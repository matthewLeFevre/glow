import React, {useState} from 'react';
import { NotificationContainer } from '../../notification/Notification';
import FormField from '../../form/FormField';
import TextInput from '../../form/TextInput';
import Card from '../../card/Card';
 
function ColorView() {
  const [nots, setNots] = useState([
    {status: 'success', message: 'random text', close: () => {alert('you want to close this notification')}},
    {status: 'failure', message: 'random text', close: () => {alert('you want to close this notification')}},
    {status: 'warning', message: 'random text', close: () => {alert('you want to close this notification')}},
    {status: 'info', message: 'random text', close: () => {alert('you want to close this notification')}}
  ])
  return(
    <main className="ln-view--console">
      <section className="ln-container col--12">
        <NotificationContainer notifications={nots} />
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