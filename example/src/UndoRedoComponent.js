import React, { Component } from "react";
import InputWithDebouncing from "react-input-with-debouncing";

export class UndoRedoComponent extends Component {
  state = {
    value: "",
    history: [""],
    historyIndex: 0,
  };

  onChange = ({ target: { value } }) => {
    const { historyIndex, history } = this.state;

    this.setState({
      value,
      historyIndex: historyIndex + 1,
      history: [...history.slice(0, historyIndex + 1), value],
    });
  };

  onRedo = () => {
    const { historyIndex } = this.state;
    this.setValueFromHistory(historyIndex + 1);
  };

  onUndo = () => {
    const { historyIndex } = this.state;
    this.setValueFromHistory(historyIndex - 1);
  };

  setValueFromHistory = (index) => {
    const { history } = this.state;
    const historyIndex = Math.min(Math.max(index, 0), history.length - 1);

    this.setState({
      value: history[historyIndex],
      historyIndex,
    });
  };

  render() {
    const { history, value, historyIndex } = this.state;

    return (
      <div>
        <div className="custom-config">
          <label className="label">
            Debounced Input:
            <InputWithDebouncing
              className="input"
              value={value}
              minLength={2}
              debounceTimeout={500}
              notifyOnBlur={false}
              onChange={this.onChange}
            />
          </label>

          <label className="label-undo">
            <button type="button" className="input-undo" onClick={this.onUndo}>
              Undo
            </button>
          </label>

          <label className="label-redo">
            <button type="button" className="input-redo" onClick={this.onRedo}>
              Redo
            </button>
          </label>
        </div>

        <p>Current Value: {value}</p>
        <p>
          History:
          {history.map((val, key) => (
            <span className="item" key={key}>
              {key === historyIndex ? (
                <b>{`"${val}"`}</b>
              ) : (
                <span>{`"${val}"`}</span>
              )}
            </span>
          ))}
        </p>
        <p>History Index: {historyIndex}</p>
      </div>
    );
  }
}
