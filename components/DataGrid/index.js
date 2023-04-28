import React from "react";
import PropTypes from "prop-types";

function DataGrid(props) {
  const ComponentToRender = props.component;
  let content = <div/>;

  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.field}`} item={item}/>
    ));
  } else {
    content = <ComponentToRender/>;
  }

  return (
    <div className="row-strip border-bottom">
      {content}
    </div>
  );
}

DataGrid.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default DataGrid;
