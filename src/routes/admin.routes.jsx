import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home'

export function AdminRoutes(){
    return(
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/profile" element={<Profile />} />
             <Route path="/plateview/:id" element={<PlateView />} />
             <Route path="/cart" element={<Cart />} />

             <Route path="/newplate" element={<NewPlate />} />
             <Route path="/editplate/:id" element={<EditPlate />} />
        </Routes>
    )
}