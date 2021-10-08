import { useEffect } from "react"

import { ProfileSection } from "./components/ProfileSection"
import { MainSection } from "./components/MainSection"

import { useRepository } from "../../context/RepositoryContext"
import { Container } from "./styles"

export const Profile = () =>{
    const context = useRepository()
    const {isLoading, repository, setIsLoading, repositories } = context
    
    useEffect(()=>{
        setIsLoading(false)
    },[repositories, repository, setIsLoading])

    return (
        !isLoading ? (
        <Container>
            <ProfileSection/>
            <MainSection/>
        </Container>

        )
        : <span>Loading!!!...</span>
    )
    
}