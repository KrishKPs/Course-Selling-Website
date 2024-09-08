import './App.css'; 
import { BrowserRouter , Routes , Route } from 'react-router-dom';  
import { SignupPage } from './Pages/Signup';
import { Loginpage } from './Pages/Login';
import { Allcourses } from './Pages/Allcourses';
import { CoursePage } from './Pages/CoursePage';
import { AdminSignup } from './Pages/Admingsignup';
import { Adminlogin } from './Pages/Adminlogin';
import { Addcourse } from './Pages/Addcourse';

function App() {
  

  return (
    <>

     <BrowserRouter>
     <Routes> 

      <Route path='/signup' element={<SignupPage/>}/> 
      <Route path='/login' element={<Loginpage/>}/> 
      <Route path='/allcourses' element={<Allcourses/>}/> 
      <Route path='/allcourse/:courseid' element={<CoursePage/>}/> 
      <Route path='/admin/signup' element={<AdminSignup/>}/> 
      <Route path='/admin/login' element={<Adminlogin/>}/> 
      <Route path='/admin/addcourse' element={<Addcourse/>}/> 

     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
