import React from "react";
import "./App.scss";
import Header from "./ui/components/header/Header";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { DocNav, DocNavGroup, DocNavLink } from "./docs/Docs";
import ConsoleView from "./ui/components/containers/ConsoleView";
import Container from "./ui/components/containers/Container";
import Welcome from "./docs/pages/Welcome";
import Setup from "./docs/pages/Setup";
import FormView from "./docs/pages/FormView";
import GridView from "./docs/pages/GridView";
import TitlesView from "./docs/pages/TitlesView";
import CardView from "./docs/pages/CardView";
import ButtonView from "./docs/pages/ButtonView";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ConsoleView>
        <Container className="col--12 col--sml--3">
          <DocNav>
            {() => (
              <>
                <DocNavGroup title="Introduction">
                  <DocNavLink to="/" text="Welcome" />
                  <DocNavLink to="/setup" text="Setup" />
                </DocNavGroup>
                <DocNavGroup title="Elements">
                  <DocNavLink to="/button" text="Button" />
                  <DocNavLink to="/card" text="Card" />
                  <DocNavLink to="/form" text="Form" />
                  <DocNavLink to="/title" text="Title" />
                </DocNavGroup>
                <DocNavGroup title="Layout">
                  <DocNavLink to="/grid" text="Grid" />
                </DocNavGroup>
              </>
            )}
          </DocNav>
        </Container>
        <Container className="col--12 col--sml--9">
          <Container className="ln-doc-content">
            <Switch>
              <Route path="/" exact={true} component={Welcome} />
              <Route path="/setup" exact={true} component={Setup} />
              <Route path="/button" exact={true} component={ButtonView} />
              <Route path="/card" exact={true} component={CardView} />
              <Route path="/form" exact={true} component={FormView} />
              <Route path="/title" exact={true} component={TitlesView} />
              <Route path="/grid" exact={true} component={GridView} />
            </Switch>
          </Container>
        </Container>
      </ConsoleView>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
