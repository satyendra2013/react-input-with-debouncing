import React, { Component } from "react";
import InputWithDebouncing from "react-input-with-debouncing";

export class ControllableComponent extends Component {
  state = {
    value: "",
    debouncedValue: "",
  };

  onChange = (e) =>
    this.setState({
      value: e.target.value,
      debouncedValue: e.target.value,
    });

  render() {
    const { value, debouncedValue } = this.state;

    return (
      <div>
        <div className="custom-config">
          <label className="label">
            Contollable input:
            <input
              className="input"
              type="text"
              value={value}
              onChange={(e) => this.setState({ value: e.target.value })}
            />
            {value}
          </label>
        </div>

        <div className="config">
          <label className="label">
            Debounced input:
            <InputWithDebouncing
              className="input"
              value={value}
              minLength={3}
              debounceTimeout={600}
              onChange={this.onChange}
            />
            {debouncedValue}
          </label>
        </div>
      </div>
    );
  }
}
