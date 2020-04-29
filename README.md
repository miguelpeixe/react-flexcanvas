# React FlexCanvas


[![version](https://img.shields.io/npm/v/react-flexcanvas.svg)](https://www.npmjs.com/package/react-flexcanvas) ![license](https://img.shields.io/github/license/miguelpeixe/react-flexcanvas) ![dependencies](https://david-dm.org/miguelpeixe/react-flexcanvas.svg)

Canvas grid system built with flexboxes for React.

 - Complete grid system with Rows and Columns
 - Multiple colors
 - Support for lists and tables

![FlexCanvas Example](https://i.imgur.com/iJlAVoM.png)

---

## Installation and Usage

```
$ npm install --save react-flexcanvas
```

### Include the component

```js
import React from "react";
import FlexCanvas from "react-flexcanvas";

class MyCanvas extends React.Component {
  render() {
    return (
      <FlexCanvas>
        <FlexCanvas.Row>
          <FlexCanvas.Item title="Canvas item" />
        </FlexCanvas.Row>
        <FlexCanvas.Row>
          <FlexCanvas.Item title="Canvas item" />
        </FlexCanvas.Row>
      </FlexCanvas>
    );
  }
}
```

## API

WIP

## License

MIT
