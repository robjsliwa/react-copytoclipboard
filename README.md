# react-copytoclipboard
This package provides simple copy to clipboard function to be used in React projects.

## Installation
To install the package use:

```
npm install react-copytoclipboard
```

## Usage
Here is sample code how you can add copy to clipboard functionality:

```
import CopyToClipboard from 'react-copytoclipboard';

<div className="input-group">
  <input
    ref="mycontrol"
    type="text"
    className="form-control"
    value={this.state.stateValue}
    readOnly
  />
  <span
    className="input-group-addon btn"
    onClick={CopyToClipboard.bind(this, 'mycontrol')}
  >
    <i className="fa fa-clipboard" aria-hidden="true"></i>
  </span>
</div>
```
