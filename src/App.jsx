import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SubjectsPage } from './pages/SubjectsPage'
import { SubjectDetailsPage } from './pages/SubjectDetailsPage'
import { NewSubjectPage } from './pages/NewSubjectPage'
import { NotFound } from './pages/NotFound'
import { SubjectsProvider } from './hooks/SubjectsContext'

function App() {

  return (
    <SubjectsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='materia'element={<SubjectsPage />} />
          <Route path='materia/nova'element={<NewSubjectPage />} />
          <Route path='materia/:id'element={<SubjectDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </SubjectsProvider>
  )
}

export default App
