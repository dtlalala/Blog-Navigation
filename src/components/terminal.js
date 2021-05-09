import Terminal from 'react-terminal-app'
// eslint-disable-next-line
import React from 'react'

import staticList from '../components/command/static'
import dynamicList from '../components/command/dynamic'

const cmd = {
  dynamicList,
  staticList
}

const config = {
  prompt: '➜  ~ ',
  version: '1.0.0',
  initialDirectory: 'dtlalala',
  bootCmd: 'intro'
}

function App() {
   return <Terminal cmd={cmd} config={config} />
}

export default App;
