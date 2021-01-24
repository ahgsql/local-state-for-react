# local-state-for-react

> localStorage for State Management

[![NPM](https://img.shields.io/npm/v/local-state-for-react.svg)](https://www.npmjs.com/package/local-state-for-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save local-state-for-react
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
