import { Header } from './components/header'
import { Sidenav } from './components/sidenav'
import { Card } from './components/card'
import { SlButton } from './components/shoelace'

function App() {
  return (
    <div className="fn-core">
      <Sidenav />
      <div className="fn-app">
        <Header />
        <div className="fn-app-content">
          <div className="fn-main-page">
            <Card />
            <Card />
            <Card />
          </div>
          <SlButton>Button</SlButton>
        </div>
      </div>
    </div>
  )
}

export default App
