import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home'
import { Details } from "../pages/Details"

export function UserRoutes(){
    return(
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/plates/:id" element={<Details />} />

        </Routes>
    )
}

// <Route path="/profile" element={<Profile />} />
// <Route path="/plateview/:id" element={<PlateView />} />
// <Route path="/cart" element={<Cart />} />