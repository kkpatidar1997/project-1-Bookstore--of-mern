import React from 'react';
import Signup from './components/Signup';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import { Routes, Route, Navigate} from "react-router-dom";
import ContactForm from './components/ContactForm';
import  { Toaster } from 'react-hot-toast';

import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
        <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<ContactForm/>}/>


      </Routes>
      <Toaster />
      </div>


    </>
  );
}

export default App;
