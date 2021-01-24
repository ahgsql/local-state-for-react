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
