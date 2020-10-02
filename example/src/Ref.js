import React, { Component } from "react";
import InputWithDebouncing from "react-input-with-debouncing";

export class Ref extends Component {
  state = {
    value: "",
    key: undefined,
  };

  render() {
    const { value, key } = this.state;

    return (
      <div>
        <div className="custom-config">
          <label className="label-button">
            <button type="button" onClick={() => this.ref.focus()}>
              Apply Focus
            </button>
          </label>

          <label className="label-button">
            <button type="button" onClick={() => this.ref.blur()}>
              Apply Blur
            </button>
          </label>
        </div>

        <InputWithDebouncing
          inputRef={(ref) => {
            this.ref = ref;
          }}
          onChange={(e) => this.setState({ value: e.target.value })}
          onKeyDown={(e) => this.setState({ key: e.key })}
        />
        <p>Value: {value}</p>
        <p>Key pressed: {key}</p>
      </div>
    );
  }
}
