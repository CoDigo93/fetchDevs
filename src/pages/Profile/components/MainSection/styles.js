import styled from "styled-components";


export const Container = styled.article`
    display: flex;
    flex-direction: column;
    margin-left: 530px;
    
    
`


export const Repository = styled.li`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ECEFF4;
    height: 10rem;
    gap: 1rem;

    h3{
        color: #3B4252;
        font-size: 24px;
        font-weight: 300;
        font-style: italic;
    }

    div{
        display: flex;
        gap: 1.5rem;
        align-items: center;
        color: #8190A5;
    }
`

export const RepositoryDescription = styled.span`
    color:#3B4252;
    font-size: 18px;
    font-weight: 300;
`


export const RepositoryName = styled.span`
    color: #3B4252;
    font-size: 24px;
    padding-top: 1rem;

    a{
        text-decoration: none;
        color: #3B4252;
    }
`