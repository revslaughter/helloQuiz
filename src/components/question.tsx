import * as React from "react";
import * as ReactDOM from "react-dom";

let question = (props: { firstNo: string; secondNo: string }) => (
  <div>
    {props.firstNo} &times; {props.secondNo} = <input type="number" />
  </div>
);

export default question;
