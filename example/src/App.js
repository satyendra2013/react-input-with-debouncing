import React from "react";
import "react-input-with-debouncing/dist/index.css";
import './App.css';
import { ControllableComponent } from "./ControllableComponent";
import { CustomizableComponent } from "./CustomizableComponent";
import { UndoRedoComponent } from "./UndoRedoComponent";
import { TextAreaComponent } from "./TextAreaComponent";
import { Ref } from "./Ref";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">React Input With Debouncing</h1>
      <div className="usecase">
        <h2>Case 1. Customizable Input</h2>
        <CustomizableComponent />
      </div>

      <div className="usecase">
        <h2>Case 2. Controllable Input</h2>
        <ControllableComponent />
      </div>

      <div className="usecase">
        <h2>Case 3. Input With Undo-Redo</h2>
        <UndoRedoComponent />
      </div>

      <div className="usecase">
        <h2>Case 4. Textarea Input With Debouncing</h2>
        <TextAreaComponent />
      </div>

      <div className="usecase">
        <h2>Case 5. Input With Custom ref</h2>
        <Ref />
      </div>
    </div>
  );
};

export default App;
