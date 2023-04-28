import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import routes from "../../routes";
import GlobalStyle from "../../global-styles";

class DefaultLayout extends Component {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <GlobalStyle/>
        <Header investigatorId={params.investigatorId}/>
        <Switch>
          {routes.map((route, idx) => {
              return route.component ? (
                <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                  <route.component {...props} />
                )}/>) : null;
            }
          )}
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default DefaultLayout;
