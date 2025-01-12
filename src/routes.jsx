import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/home"
import AboutUs from "./pages/AboutUs/aboutUs"
import Form from "./pages/Form/form"
import Comments from  "./pages/Comments/comments"
import Users from  "./pages/Users/Users"


export default function AppRoutes () {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/sobrenos" element={ <AboutUs /> }/>
                    <Route path="/formulario" element={ <Form /> }/>
                    <Route path="/comments" element={ <Comments/>}/>
                    <Route path="/users" element={ <Users/>}/>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    )

}