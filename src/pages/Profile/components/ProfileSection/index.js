import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { AsideContainer, Avatar, Details, Engagement, Description } from "./styles"
import { IoIosPeople, IoLogoTwitter} from "react-icons/io";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { FiStar } from "react-icons/fi";
import { GoLocation } from 'react-icons/go';
import { HiLink } from 'react-icons/hi';
import { FaRegBuilding } from 'react-icons/fa';

import { useRepository } from "../../../../context/RepositoryContext";

import axios from 'axios'


export const ProfileSection = () =>{
    const context  = useRepository()
    const {
        repository ,
        repositories, 
        totalStars,  
        setRepositories,
        setTotalStars,
        selectedUser,
        setSelectedUser,
        setStars,


    } = context
    
    
    const history = useHistory()


    

    
    useEffect(()=>{
        axios.get(`https://api.github.com/users/${selectedUser}/repos?page=1&per_page=200%27`)
        .then(response => setRepositories(response.data))
        
    },[setRepositories, selectedUser])


    useEffect(()=>{
        axios.get(`https://api.github.com/users/${selectedUser}/starred?page=1&per_page=200`)
        .then(response => setStars(response.data))

        
    },[setRepositories, selectedUser, setStars])



    useEffect(()=>{
        if(repositories?.length > 0){
            setTotalStars(repositories?.map(repo => repo.stargazers_count)
                .reduce((acc, repo)=> acc + repo), 0)
        }

    },[repositories, setTotalStars])



   
    

    const RedirectToHome = () =>{
        setSelectedUser('')
        history.push('/')
    }

    
    
    return (
        <AsideContainer>
            <>
            <Avatar avatar={repository?.avatar_url}/>
            <h1>{repository?.name}</h1>
            <span>@{repository?.login}</span>
            
            <Description>
                {repository?.bio}
            </Description>
            
            <Engagement>
                <div>
                    <Link to={{pathname:`https://github.com/${selectedUser}?tab=followers`}}
                          target="_blank">
                        <IoIosPeople strokeWidth={20} fill="transparent"/>
                            {repository?.followers} followers 
                        
                    </Link>
                </div>
                <div>
                    <Link to={{pathname:`https://github.com/${selectedUser}?tab=following`}}
                          target="_blank">
                        <AiOutlineHeart />
                        {repository?.following} following
                    </Link>
                </div>  
                <div><FiStar/>{totalStars} stars</div>
            </Engagement>
            
            <Details>
                {repository?.company ? <span><FaRegBuilding/> {repository.company}</span> : null}
                {repository?.location ? <span><GoLocation/> {repository.location}</span> : null}
                {repository?.email ? <span><AiOutlineMail/> {repository.email}</span> : null}
                {
                    repository?.blog 
                        ? <span>
                            <Link 
                              to={{pathname: `${repository?.blog}`}}
                              target='_blank'>
                                <HiLink/> {repository.blog}
                            </Link>
                         </span> 
                        : null}
                {
                    repository?.twitter_username 
                        ? <span>
                            <Link to={{pathname: `https://twitter.com/${repository?.twitter_username}`}} target='_blank'>
                                <IoLogoTwitter strokeWidth={20} fill="transparent"/>  
                                    {repository?.twitter_username}
                            </Link> 
                        </span>
                        
                        : null
                    
                }
            </Details>
            <br/>
            <button onClick={() => RedirectToHome()}>voltar</button>

            </>
        </AsideContainer>
    )
}