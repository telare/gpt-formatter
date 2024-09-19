
import './App.css'
import Nav from './components/nav'
import Main from './components/main_content'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <> 
      <Router>
        <Nav /> 
        <Routes>
        <Route path="/" element={<Main />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
