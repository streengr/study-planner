import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SubjectsPage } from './pages/SubjectsPage'
import { SubjectDetailsPage } from './pages/SubjectDetailsPage'
import { NewSubjectPage } from './pages/NewSubjectPage'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='materias'element={<SubjectsPage />} />
        <Route path='materias/nova'element={<NewSubjectPage />} />
        <Route path='materias/:id'element={<SubjectDetailsPage />} />
        <Route path='*'element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
      
     
  )
}

export default App
