import { createContext, useContext, useState } from "react";

const RepositoryContext = createContext({})

export const RepositoryProvider = ({children}) =>{
    const [repository, setRepository] = useState()
    const [repositories, setRepositories] = useState()
    const [totalStars, setTotalStars] = useState()
    const [selectedUser, setSelectedUser] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [stars, setStars] = useState()


    

    return(


        <RepositoryContext.Provider 
            value={{
                repository, 
                setRepository, 
                repositories, 
                setRepositories, 
                totalStars, 
                setTotalStars,
                selectedUser,
                setSelectedUser,
                isLoading,
                setIsLoading,
                error,
                setError,
                stars, 
                setStars
            }}
        >
            
            {children}
        </RepositoryContext.Provider>
    )

}

export const useRepository = () =>{
    const context = useContext(RepositoryContext)
    return context

}