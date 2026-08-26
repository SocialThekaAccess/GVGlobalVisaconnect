import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import StudyVisa from './Components/StudyVisa'
import WorkVisa from './Components/WorkVisa'
import Navbar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study-visa" element={<StudyVisa />} />
        <Route path="/work-visa" element={<WorkVisa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
