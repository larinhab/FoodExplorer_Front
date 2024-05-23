import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home'

export function UserRoutes(){
    return(
        <Routes>
             <Route path="/" element={<Home />} />

        </Routes>
    )
}

// <Route path="/profile" element={<Profile />} />
// <Route path="/plateview/:id" element={<PlateView />} />
// <Route path="/cart" element={<Cart />} />