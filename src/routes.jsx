import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/home"
import AboutUs from "./pages/AboutUs/aboutUs"
import Form from "./pages/Form/form"
import Comments from  "./pages/Comments/comments"


export default function AppRoutes () {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/aboutUs" element={ <AboutUs /> }/>
                    <Route path="/formulario" element={ <Form /> }/>
                    <Route path="/comments" element={ <Comments/>}/>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    )

}