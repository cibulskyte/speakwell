import {Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import {PATHS} from './consts'
import Home from '../pages/Home'
import Register from "../pages/Register";
import Programs from "../pages/Programs";
import Test from "../pages/Test"
import CourseRegistration from "../pages/CourseRegistration";
import AboutUs from '../pages/AboutUs';
import Contacts from "../pages/Contacts";

const AppRoutes = () => {
    return (

        <Routes> 
    <Route path={""} element={<Home/>}/>
    <Route path={PATHS.Login} element={<Login/>}/>
    <Route path={PATHS.Register} element={<Register/>}/>
    <Route path={PATHS.Programs} element={<Programs/>}/>
    <Route path={PATHS.Test} element={<Test/>}/> 
    <Route path={PATHS.CourseRegistration} element={<CourseRegistration/>}/> 
    <Route path={PATHS.AboutUs} element={<AboutUs/>}/>      
    <Route path={PATHS.Contacts} element={<Contacts/>}/>
    
    </Routes>
    )
}

export default AppRoutes;