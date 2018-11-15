import * as React from "react";
import { operatorChoice, ALL_OPERATORS } from "../operators";

interface operProps {
  setOnChange?: (some: any) => any;
  className?: string;
  disabled: boolean;
}
interface operState {
  choice?: operatorChoice;
}

class OperatorCheckboxes extends React.Component<operProps, operState> {
  constructor(props: operProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <fieldset className={this.props.className} disabled={this.props.disabled}>
        <legend>
          Please select the operators you wish to have in the quiz:
        </legend>
        {ALL_OPERATORS.items.map((v: operatorChoice, i: number) => (
          <div key={`${v.name}:${i.toString()}`}>
            <input
              key={i.toString()}
              name={v.name}
              value={v.operChar}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.props.setOnChange(e)
              }
              type="checkbox"
            />
            <label htmlFor={i.toString()}>{v.operChar}</label>
          </div>
        ))}
      </fieldset>
    );
  }
}

export default OperatorCheckboxes;
