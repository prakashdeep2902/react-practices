import React from 'react'
import ShowList from './component/ShowList'
import Button from './component/Button'
import Input from './component/Input'

const App = () => {
  return (
    <div>
      <h1>TODO LIST</h1>
      <Input />
      <ShowList />
    </div>
  )
}

export default App
