import React, { createContext, useState, useContext, useEffect } from 'react'
import { api } from '../services/api'
import { data } from '../utilis/data'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
    const [ favorites, setFavorites ] = useState([])

    const addFavorite = async(plate_id) => {
        try {
            const response = await api.post('/favorites', {plate_id} )
            const newFavorite = response.data
            setFavorites(prevFavorites => [...prevFavorites, newFavorite])

            alert("Prato adicionado aos favoritos!")
        }catch (error) {
            alert("Erro ao adicionar aos favoritos", error)
        }
    }

    const removeFavorite = async (id) => {
        try {
            console.log("Tentando remover favorito com ID:", id);

            await api.delete(`/favorites/${id}`)

            console.log("Remoção bem-sucedida");
            
            setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== id))
        } catch (error) {
            console.error("Erro ao remover aos favoritos", error)
        }
    }

   useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await api.get('/favorites')
                console.log(data)
                setFavorites(response.data)
            } catch (error) {
                console.error("Erro ao buscar favoritos", error)
            }
        }
        fetchFavorites()
    }, [])

    return(
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites(){
    return useContext(FavoritesContext)
}