import { Route, Routes } from "react-router-dom"

import { Home } from '../pages/Home'
import { Cart } from "../pages/Cart"
import { Profile } from "../pages/Profile"
import { Details } from "../pages/Details"
import { NewPlate } from '../pages/NewPlate'
import { EditPlate } from '../pages/EditPlate'

export function AdminRoutes(){
    return(
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/profile" element={<Profile />} />
             <Route path="/plates/:id" element={<Details />} />
             <Route path="/cart" element={<Cart />} />

             <Route path="/newplate" element={<NewPlate />} />
             <Route path="/editplate/:id" element={<EditPlate />} />
        </Routes>
    )
}