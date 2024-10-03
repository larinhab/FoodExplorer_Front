import { Route, Routes } from "react-router-dom"

import { Home } from '../pages/Home'
import { Cart } from "../pages/Cart"
import { Profile } from "../pages/Profile"
import { Details } from "../pages/Details"
import { Payment } from "../pages/Payment"
import { Favorites } from "../pages/Favorites"

export function UserRoutes(){
    return(
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="/profile" element={<Profile />} />
             <Route path="/plates/:id" element={<Details />} />
             <Route path="/favorites" element={<Favorites />} />
             <Route path ="/payment" element={<Payment/>}/>
             
        </Routes>
    )
}

// <Route path="/checkout" element={<Checkout />} />