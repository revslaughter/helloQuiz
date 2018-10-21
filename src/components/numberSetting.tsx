import * as React from "react";

let NumberSetting = (props: {
  className?: string;
  name: string;
  caption: string;
  updater: (st: any) => void;
}) => {
  return (
    <p className="numberSetting">
      <label htmlFor={props.name}>{props.caption}</label>
      <input
        type="number"
        id={props.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          let stObj: any = {};
          stObj[props.name] = parseInt(e.target.value);
          props.updater(stObj);
        }}
      />
    </p>
  );
};

export default NumberSetting;
