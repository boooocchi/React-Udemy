import React from "react";

const Demo = (props) => {
  return <p>{props.show ? `this is new!!` : ``}</p>;
};

export default React.memo(Demo);
