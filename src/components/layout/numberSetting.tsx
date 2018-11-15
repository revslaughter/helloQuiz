import * as React from "react";

let NumberSetting = (props: {
  className?: string;
  name: string;
  caption: string;
  updater: (st: any) => void;
  disabled: boolean;
}) => {
  return (
    <p className="numberSetting">
      <label htmlFor={props.name}>{props.caption}</label>
      <input
        disabled={props.disabled}
        className="numberSetting"
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
