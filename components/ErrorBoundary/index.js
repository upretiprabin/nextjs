import {Component} from "react";
import Router from "next/router";
import ErrorPage from "../../pages/_error";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    info: null,
  };

  componentDidCatch(error, info) {
    this.setState({hasError: true, error, info});
  }

  handleGoToHomepage = () => {
    this.setState({hasError: false});
    Router.push("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage statusCode={'500'} goToHomePage={this.handleGoToHomepage}/>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
