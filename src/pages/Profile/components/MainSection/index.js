import { RepositoryList } from "../MainSection/RepositoryList"

import { Container } from "./styles"

import { useRepository } from "../../../../context/RepositoryContext"

export const MainSection = () =>{
    const context = useRepository()
    const { repositories } = context 
    
    return (
        <Container>
        {repositories?.length > 0 
            ? <RepositoryList />
            : <h1>There are no repositories yet</h1>
        }
        </Container>      
        )

        
    
}