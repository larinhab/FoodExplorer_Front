import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { api } from "../services/api";

export const AuthContext =
  createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({
    email,
    password,
  }) {
    try {
      const response = await api.post(
        "/sessions",
        { email, password },
        { withCredentials: true }
      );
      const { user } = response.data;

      localStorage.setItem(
        "@foodexplorer:user",
        JSON.stringify(user)
      );
      //  localStorage.setItem("@foodexplorer:token", token)

      // api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setData({ user });
    } catch (error) {
      if (error.response) {
        alert(
          error.response.data.message
        );
      } else {
        alert(
          "Não foi possível entrar"
        );
      }
    }
  }

  function signOut() {
    // localStorage.removeItem(
    //   "@foodexplorer:token"
    // );
    localStorage.removeItem(
      "@foodexplorer:user"
    );

    setData({});
  }

  async function updateProfile({
    user,
  }) {
    try {
      const response = await api.put(
        `/users/${user.id}`,
        user
      );
      const updatedUser = response.data;

      localStorage.setItem(
        "@foodexplorer:user",
        JSON.stringify(updatedUser)
      );
      setData({
        user: updatedUser,
        token: data.token,
      });

      return "Usuário atualizado com sucesso!";
    } catch (error) {
      console.log(
        "Não foi possivel atualizar o usuário.",
        error
      );
    }
  }

  useEffect(() => {
    // const token = localStorage.getItem(
    //   "@foodexplorer:token"
    // );
    const user = localStorage.getItem(
      "@foodexplorer:user"
    );

    if (user) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      setData({
        //token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data?.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(
    AuthContext
  );

  return context;
}

export { AuthProvider, useAuth };
