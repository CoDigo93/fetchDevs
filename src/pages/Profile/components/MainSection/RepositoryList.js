import { RepositoryCard } from "./RepositoryCard"

import { useRepository } from "../../../../context/RepositoryContext"


export const RepositoryList = () =>{
    const context = useRepository()
    const { repositories, stars } = context

    console.log(repositories)

    const orderByStars = (current, next) => {
        const stargazers_count = 'stargazers_count'
        const decrescent =  next[stargazers_count] - current[stargazers_count]
        return decrescent
    }

    return(
        repositories ? (
            repositories.sort((current, next) => orderByStars(current, next)).map((repository, index) => (
                <RepositoryCard
                    key = {repository.id} 
                    repository = {repository}
                    stars = {stars}
                    index = {index}/>
                
            ) )
            
        ): <span> Loading!</span>
    )
}