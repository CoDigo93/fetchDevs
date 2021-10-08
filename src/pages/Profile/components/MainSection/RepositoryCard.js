import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";

import { Repository, RepositoryDescription, RepositoryName } from "./styles";

import { FiStar } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";

import { useRepository } from "../../../../context/RepositoryContext";

export const RepositoryCard = ({repository, stars, index},) =>{
    const context = useRepository()
    const { selectedUser } = context
    return(
        <Repository>
            <RepositoryName>
                <Link 
                  to={{pathname:`https://github.com/${selectedUser}/${repository?.name}`}}
                  target='_blank'
                >
                    {repository?.name}
                </Link>
            </RepositoryName>

            <RepositoryDescription>
                {repository.description}
            </RepositoryDescription>
            
            { 
                <div>
                    <span>
                        <FiStar /> {repository?.stargazers_count} stars
                    </span>
                    <span>
                        <GoPrimitiveDot viewBox="0, -2, 8, 16"/>
                          Updated {formatDistance(new Date(repository.updated_at), new Date(), {addSuffix:true})}
                    </span>
                </div>
            }
        </Repository>
    )
}


