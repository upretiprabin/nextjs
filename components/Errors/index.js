import React from "react";
import PropTypes from "prop-types";
import List from "../List";
import ErrorList from "../../containers/ErrorList";

function Errors({ errors }) {
  if (errors?.size > 0 || errors?.length > 0) {
    return (<List component={ErrorList} items={errors}/>);
  }

  if (errors?.fieldErrors) {
    return (
      <List component={ErrorList} items={errors?.fieldErrors}/>
    );
  } else if (errors?.globalErrors) {
    return (
      <List component={ErrorList} items={errors?.globalErrors}/>
    );
  }
  
  return <div/>;
}

Errors.propTypes = {
  errors: PropTypes.any
};

export default Errors;