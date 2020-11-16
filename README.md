# react-input-with-debouncing

A small lightweight React input component with debouncing that can be used in place of normal `<input />` or `<textarea />` fields.The component renders input with debouncing onChange event.

[![NPM](https://img.shields.io/npm/v/react-input-with-debouncing.svg)](https://www.npmjs.com/package/react-input-with-debouncing) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![node-current](https://img.shields.io/node/v/react-input-with-debouncing/latest) ![npm peer dependency version](https://img.shields.io/npm/dependency-version/react-input-with-debouncing/peer/react)

## Installation

### NPM

```bash
npm install --save react-input-with-debouncing
```

## Usage

```jsx
import React, { Component } from 'react'

import InputWithDebouncing from 'react-input-with-debouncing'
import 'react-input-with-debouncing/dist/index.css' //import of index.css is optional

class ExampleInputWithDebouncing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '';
    }
  }

  render() {
    return (
      <InputWithDebouncing
        type="text"
        placeholder='Search'
        className='input-search'
        minLength={1}
        debounceTimeout={1000}
        onChange={(e) => this.setState({ value: e.target.value })}
        value={this.state.value}
      />
    )
  }
}
```

## Options

### Default prop values

```js
<InputWithDebouncing
  element= 'input',
  type= 'text',
  onKeyDown= {undefined},
  onBlur= {undefined},
  value= {undefined},
  minLength= {0},
  debounceTimeout= {500},
  notifyOnEnter= {true},
  notifyOnBlur= {true},
  inputRef= {undefined}
 />
```

## Usage explanation

### Note: This package is primarily built and tested on `<input />` and `<textarea />` keeping use cases in mind. But you can explore.

### `element` : PropTypes.oneOfType([PropTypes.string, PropTypes.func]) (default: 'input')

element prop can take either one of the value from `input` or `textarea`.

### `type` : PropTypes.string (default: 'text')

Default value of `type` prop is `text` but you can specify other options like `number`.

### `onChange`: PropTypes.func.isRequired (Mandatory Props)

`onChange` function is called with event passed through it on input change with debounced timeout.

### `value`: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) (default: undefined)

Default `value` of input is undefined. If not specified, then input works as non-controlled input.

### `minLength`: PropTypes.number (default: 0)

`minLength` prop specifies minimal length of text to start notify, if value becomes lesser then `minLength` (after removing some characters), there will be a notification with empty value `''`.

### `debounceTimeout`: PropTypes.number (default: 500)

`debounceTimeout` specifies the debouncing time in ms. If you specify `debounceTimeout = -1`, then it disable automatic notifications completely. On pressing of `Enter`, notification will be triggered only in this case.

### `notifyOnEnter`: PropTypes.bool (default: true)

On pressing `Enter`, notification of current value will be triggered immediately. Notification value follows the same rule as with debounced notification, so if length is less, then `minLength` - empty value `''` will be sent back.

### `notifyOnBlur`: PropTypes.bool (default: true)

In this case, notification will be sent only when focus leaves the input field.

### `inputRef`: PropTypes.func (default: undefined)

Pass `ref={inputRef}` to generated input element. `ref` is a special prop in React, and hence renamed `ref` to `inputRef`.

### `className` : className props will be applied directly on generated input.

This is an arbitrary prop which is directly applied to input field.

### `placeholder` : placeholder props will be applied directly on generated input.

This is an arbitrary prop which is directly applied to input field.

## Test

### Unit testing with lint testing

```bash
npm run test
```

### Unit testing

```bash
npm run test:unit
```

### Lint testing

```bash
npm run test:lint
```

### Testing during development

```bash
npm run test:watch
```

## License

MIT © [Satyendra Pandit](https://github.com/satyendra2013)
