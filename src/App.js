import { Switch, Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Login";


function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">


          <section id="navigation">
            <a href="/">Home</a>
           
            <a href="/auth">Login</a>
          </section>
        </Col>
      </Row>

      {/* create routes here */}
      <Switch>
        <Route exact path="/" component={Account} />
        <Route path="/login" component={Login}/>
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/auth" component={AuthComponent} />
      </Switch>
    </Container>
  );
}

export default App;
