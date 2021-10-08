import { useRef, useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";

import { Title, HomeWrapper, ErrorMessage } from "./styles"
import { FiSearch } from "react-icons/fi";


import { useRepository } from "../../context/RepositoryContext";
import axios from 'axios'



function generateUrl(key){
    return `https://api.github.com/users/${key}`
}



export const Home = () =>{
    const [url, setUrl] = useState()
    const [isErrorLoaded, setIsErrorLoaded] = useState(false)
    const context  = useRepository()
    const inputRef = useRef()

    const { setSelectedUser, setIsLoading, setRepository, setError } = context

    const history = useHistory()

    

    const handleSearch = () => {
        setSelectedUser(inputRef.current.value)
        setUrl(generateUrl(inputRef.current.value))
    }


    const onSubmit = () => {
        handleSearch()
        inputRef.current.value = ''
        
        
    }

    useEffect(()=>{
        async function fetchDevs(){
            try{
                setIsLoading(true)
                const response = await axios.get(url)
                setRepository(response.data)
                setIsLoading(false)
                history.push('/profile')
            }
            catch(error){
                setError(error.response)
                setIsErrorLoaded(true)
                setIsLoading(false)
            }
        }

        if(url){
            fetchDevs()
            
        } 
    },[url, history, setError, setRepository, setIsLoading])


    





    return(
        <HomeWrapper>
            <Title>Search Devs</Title>
            <div>
                <input 
                    type="search"
                    placeholder="Type the username here..."
                    ref={inputRef}
                   
                />
                <button onClick={(e) => onSubmit(e)}><FiSearch size={22}/>Buscar</button>
            </div>
            {
                 isErrorLoaded 
                ? <ErrorMessage>That user does not exists. Try again!</ErrorMessage>
                : null

                
            }
            
        </HomeWrapper>
    )
}