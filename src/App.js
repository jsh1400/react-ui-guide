import React from 'react'
import './App.css'
import JHelp from 'react-ui-guide'
import Test from './Test'


const helpList= [
  {
    selector: '#iTest_7',
    content: 'help test 7'
  },
  {
    selector: '#iTest_37',
    content: 'help test 37'
  },
  {
    selector: '#iTest_57',
    content: 'help test 57'
  },
  {
    selector: '#iTest_11',
    content: 'help test 11'
  },
  {
    selector: '#iTest_22',
    content: 'help test 22'
  },
  {
    selector: '#iTest_67',
    content: 'help test 67'
  }
]


class App extends React.Component {
  state = {
    locale: 'fa',
    size: 30,
    color: '#000066',
  }

  render () {
    const { color, locale, size } = this.state
    return (
      <div className="App">
      <header className="App-header">
      <JHelp
    step={5}
    helpList={helpList}>
      <button style={{position:'fixed'}}>HELP</button>
    </JHelp>
    <Test count={70}/>
    </header>
    </div>
  )
  }
}

export default App
