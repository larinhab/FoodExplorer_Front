import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";

import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utilis/roles";
import { useEffect } from "react";

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    api
      .get("/users/validated")
      .catch((error) => {
        if (
          error.response?.status === 401
        )
          signOut();
      });
  }, []);

  function AccessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;

      case USER_ROLE.USER:
        return <UserRoutes />;

      default:
        <AuthRoutes />;
    }
  }

  return (
    <BrowserRouter>
      {user ? (
        <AccessRoutes />
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
}
