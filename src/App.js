
import RootLayout from "./shared/components/Layouts/RootLayout";
import StudentLayout from "./shared/components/Layouts/StudentLayout";

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import StudentsPage from './pages/Students';
import StudentPage from './pages/Student';
import AddStudent from './pages/AddStudent';
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
 
        <Routes>

         <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
         </Route>
       
          <Route element={<StudentLayout />}>
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/student/:id" element={<StudentPage />} />
          <Route path="/student/:id/:hello" element={<StudentPage />} />
          <Route path="/student/add" element={<AddStudent />} />
          </Route>

        
         <Route path="*" element={<NotFoundPage />} />
        </Routes>

   

  );
}

export default App;
