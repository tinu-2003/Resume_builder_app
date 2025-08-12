import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes ,Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage'
import ResumeGenerator from'./pages/ResumeGenerator'
import UserForm from './pages/UserForm';
import History from './pages/History'
import PageNotFound from './pages/PageNotFound'
function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/resume' element={<ResumeGenerator/>}/>
      <Route path='/form' element={<UserForm/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
