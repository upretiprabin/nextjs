import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../components/ListItem";
import { connect } from "react-redux";
import Wrapper from "./Wrapper";

export class ErrorList extends React.Component {
  render() {
    const { item } = this.props;
    if (item.code !== "undefined") {
      const content = (
        <Wrapper>
          {item.code === "NotEmpty" ? item.field + " should not be left blank" : item.field + ": Please correct value " + item.code + ", rejected: " + item.rejectedValue}
        </Wrapper>
      );
      return <ListItem key={item.field} item={content}/>;
    }
    return <div/>;
  }
}

ErrorList.propTypes = {
  item: PropTypes.object
};

export default connect()(ErrorList);