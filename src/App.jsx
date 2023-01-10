import reactLogo from './assets/react.svg'
import './App.css'
import banner from './assets/img/rick-morty-collection-banner_1400x.webp'
import RyM_app from './components/RyM_app'

function App() {


  return (
    <div className="App">
      <header>
        <img width={'100%'} src={banner} alt="" />
      </header>
      <RyM_app />
      <footer>


      </footer>

    </div>
  )
}

export default App
