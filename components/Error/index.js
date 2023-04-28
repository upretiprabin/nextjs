import React from "react";
import PropTypes from "prop-types";
import ErrorList from "../../containers/ErrorList";

function Error(prop) {
  console.log(prop);

  let errors = prop.errors;
  if (errors.size > 0 || errors.length > 0) {
    let errComp = "";
    errors.map((err) => {
      if (err.field === prop.fieldName) {
        errComp = <p className="error-message-text">
            <span className="closeError"> </span>
              {err.code === "NotEmpty" ? err.field + " should not be left blank" : "Please correct value " + err.code + ", rejected: " + err.rejectedValue}
        </p>;
      }
    });
    return errComp;
  } else {
    return (
      <div/>
    );
  }
}

Error.propTypes = {
  errors: PropTypes.any,
  fieldName: PropTypes.string
};

export default Error;
