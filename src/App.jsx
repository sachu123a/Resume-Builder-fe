

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ResumeGenerate from './pages/ResumeGenerate'
import ResumeDetails from './pages/ResumeDetails'
import Allresumes from './pages/Allresumes'
import Alldownloads from './pages/Alldownloads'
import Singleresume from './pages/Singleresume'
import Pnf from './pages/Pnf'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {
 

  return (
    <>
  <Header/>
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/resume' element={<ResumeGenerate/>}/>
    <Route path='/resumedetails' element={<ResumeDetails/>}/>
    <Route path='/allresumes' element={<Allresumes/>}/>
    <Route path='alldownloads' element={<Alldownloads/>}/>
    <Route path='/resumes/:id' element={<Singleresume/>}/>
    <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>    
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>  
    </>
  )
}

export default App
