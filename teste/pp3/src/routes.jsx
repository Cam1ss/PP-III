
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/home"
import AboutUs from "./pages/AboutUs/aboutUs"
import Form from "./pages/Form/App"


export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/aboutUs" element={ <AboutUs /> }/>
                <Route path="/formulario" element={ <Form /> }/>
            </Routes>
        </BrowserRouter>
    )

}