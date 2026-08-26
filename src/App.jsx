import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import StudyVisa from './Components/StudyVisa'
import Navbar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study-visa" element={<StudyVisa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
