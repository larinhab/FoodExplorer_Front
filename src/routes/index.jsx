import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from './auth.routes'
import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";

import { useAuth } from "../hooks/auth";

export function Routes(){
    const { user } = useAuth()

    return(
        <BrowserRouter>
             { user ? <UserRoutes></UserRoutes> : <AuthRoutes></AuthRoutes>  }
        </BrowserRouter>
    )
}