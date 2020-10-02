import React, { Component } from "react";
import InputWithDebouncing from "react-input-with-debouncing";

export class CustomizableComponent extends Component {
  state = {
    value: "",
    minLength: 0,
    debounceTimeout: 700,
    infinite: false,
    notifyOnEnter: true,
    notifyOnBlur: true,
  };

  render() {
    const {
      minLength,
      infinite,
      debounceTimeout,
      notifyOnEnter,
      notifyOnBlur,
      value,
      key,
    } = this.state;

    return (
      <div className="customizable">
        <div className="custom-config">
          <label className="label">
            Minimum length:
            <input
              className="input"
              type="range"
              value={minLength}
              step={1}
              min={0}
              max={10}
              onChange={(e) =>
                this.setState({ minLength: parseInt(e.target.value, 10) })
              }
            />
            {minLength}
          </label>

          <label className="label">
            Debounce timeout:
            <input
              className="input"
              type="range"
              disabled={infinite}
              value={debounceTimeout}
              step={100}
              min={0}
              max={2000}
              onChange={(e) =>
                this.setState({ debounceTimeout: parseInt(e.target.value, 10) })
              }
            />
            {debounceTimeout}
          </label>

          <label className="label">
            Infinite timeout:
            <input
              className="input"
              type="checkbox"
              checked={infinite}
              onChange={(e) => this.setState({ infinite: e.target.checked })}
            />
          </label>
        </div>

        <div className="custom-config">
          <label className="label">Notify by:</label>

          <label className="label">
            Enter keypress:
            <input
              className="input"
              type="checkbox"
              checked={notifyOnEnter}
              onChange={(e) =>
                this.setState({ notifyOnEnter: e.target.checked })
              }
            />
          </label>

          <label className="label">
            Blur:
            <input
              className="input"
              type="checkbox"
              checked={notifyOnBlur}
              onChange={(e) =>
                this.setState({ notifyOnBlur: e.target.checked })
              }
            />
          </label>
        </div>

        <InputWithDebouncing
          notifyOnEnter={notifyOnEnter}
          notifyOnBlur={notifyOnBlur}
          minLength={minLength}
          debounceTimeout={infinite ? -1 : debounceTimeout}
          onChange={(e) => this.setState({ value: e.target.value })}
          onKeyDown={(e) => this.setState({ key: e.key })}
        />
        <p>Value: {value}</p>
        <p>Key pressed: {key}</p>
      </div>
    );
  }
}
