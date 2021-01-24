# local-state-for-react

> localStorage for State Management

[![NPM](https://img.shields.io/npm/v/local-state-for-react.svg)](https://www.npmjs.com/package/local-state-for-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install  local-state-for-react
```

or

```bash
yarn add  local-state-for-react
```

## Methods

#### Determining Default State

##### freshState(initial)

Initializes state with default values.
This function needs to be called outside of component function.

```jsx
freshState({ input1: 1 })
```

&nbsp;

#### Writing To State

##### writeState(path,value)

Writes state value on given path
&nbsp;

#### Getting Data From State

##### readState(path)

Returns state value

```javascript
readState('stateName').someCustomProperty
```

#### Listening For Changes

System uses event dispatchers and React reducers for manually forcing re-rendering component which uses that state value.

So every component needs to useSubscribe method.
This method also returns single or multiple objects with, their values.

##### useSubscribe(...fields)

Listens for changes and Returns state values

```javascript
const input1 = useSubscribe('input1')
```

or

```javascript
const { name, email } = useSubscribe('name', 'email')
```

## Usage

```jsx
import { writeState, freshState, useSubscribe } from 'local-state-for-react'
freshState({ input1: 1 })
const App = () => {
  const input1 = useSubscribe('input1')
  return (
    <div>
      <h2>Hi From Local-State Package!</h2>
      <h1>{input1}</h1>
      <button
        onClick={() => {
          writeState('input1', input1 + 1)
        }}
      >
        Click To Change State!
      </button>
    </div>
  )
}

export default App
```

## License

MIT © [ahgsql](https://github.com/ahgsql)
