import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from './auth.routes'
import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";

import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utilis/roles"


export function Routes(){
    const { user } = useAuth()

    function AccessRoutes(){
        switch(user.role){
            case USER_ROLE.ADMIN:
                return <AdminRoutes/>

            case USER_ROLE.USER:
                return <UserRoutes/>
                
                default: <AuthRoutes/>
            }
        }
            
    return(
        <BrowserRouter>
             { user ? <AccessRoutes/> : <AuthRoutes/>  }
        </BrowserRouter>
    )
}