# histoslider [![Circle CI](https://circleci.com/gh/samhogg/histoslider.svg?style=svg)](https://circleci.com/gh/samhogg/histoslider)

[![Greenkeeper badge](https://badges.greenkeeper.io/samhogg/histoslider.svg)](https://greenkeeper.io/)


## Fleks-no Fork

A fork of https://github.com/samhogg/histoslider. 
- Updates the `react-motion` dependency to be compatible with React 16 and 17,
- Fixes the Histoslider for touch screens, where it was previously completely broken,
- Removes unused files, scripts, imports, and props.

## Original README

A D3 based histogram slider component for React. Useful for exploring distributions of things within data visualisations.

## Usage

`histoslider` has a few peer dependencies. Make sure these are installed before you go any further.

* `react`
* `react-dom`
* `d3-array`
* `d3-format`
* `d3-scale`

Then, to install,

`yarn add @finnssmith/histoslider`

Yay, glad we got that out of the way.

## Component API

```JSX
  <Histoslider
    // An array of objects to create the histogram
    data={[
      {
        x0: 0,    // Start of the bucket
        x: 1,     // End of the bucket
        y: 100    // Value
      },
      {
        x0: 1,    // Start of the bucket
        x: 2,     // End of the bucket
        y: 120    // Value
      },
      ...
    ]}
    // How much to pad the slider and histogram by, defaults to 20
    padding={20}
    // The extent of the selection, this doesn't have to be sorted (and you shouldn't sort it to store it)
    selection={[number, number]}
    // A function to handle a change in the selection
    onChange={array => { console.log(array) }}
  />
```

Check PropTypes for more options.
