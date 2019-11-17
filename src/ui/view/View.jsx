import React, {useState, useEffect} from 'react';
import CheckBoxInput from '../form/CheckBoxInput';
import TextInput from '../form/TextInput';
import SelectInput from '../form/SelectInput';
import FloatingTextInput from '../form/FloatingTextInput';
import Card from '../card/Card';
import FormField from '../form/FormField';
import BarChart, { Bar } from '../charts/BarChart';
import { NotificationContainer } from '../notification/Notification';
import Sidebar from '../sidebar/Sidebar';
import Form from '../form/Form';
import Modal, { ModalHeader, ModalFooter, ModalBody, ModalUpload } from '../modal/Modal';
import LandingView from '../containers/LandingView';
import BannerSection from '../containers/BannerSection';
import { H1 } from '../heading/PrimaryHeading';
import ContentView from '../containers/ContentView';
import ConsoleView from '../containers/ConsoleView';
 
function View() {
  const [nots, setNots] = useState([
    {status: 'confirm', message: 'It looks as though we have a new update. Look up how to activate updates from account settings.', close: () => {alert('you want to close this notification')}},
    {status: 'success', message: 'random text', close: () => {alert('you want to close this notification')}},
    {status: 'caution', message: 'random text', close: () => {alert('you want to close this notification')}},
    {status: 'warning', message: 'random text', close: () => {alert('you want to close this notification')}}
  ]);

  useEffect(() => {
    console.log(nots);
  });
  return(
    <ConsoleView>
      {/* <Modal>
        <ModalHeader title="New Modal" closeModal={() => {}} />
        <ModalBody>
          <FloatingTextInput required={true} label="Image Name" />
        </ModalBody>
        <ModalUpload />
        <ModalBody>
          <FormField>
            <button className="ln-btn--confirm">Create Image</button>
          </FormField>
        </ModalBody>
        <ModalFooter />
      </Modal> */}
      {/* <NotificationContainer notifications={nots} setNotifications={setNots}/> */}
      <BannerSection className="col--12">
        <H1>Blog Article Title</H1>
        <Form type="grid">
          <FloatingTextInput className="col--6" required={true} label="name"/>
          <FloatingTextInput className="col--6" required={true} label="email"/>
          <FloatingTextInput className="col--6" required={true} label="password"/>
          <FormField className="col--12">
            <button className="ln-btn--confirm" type="submit">Submit</button>
          </FormField>
        </Form>
        <Card title="Style Guide" />
        <Card title="Style Guide" />
      </BannerSection>
      </ConsoleView>
  );
}

export default View;