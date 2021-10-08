import styled from 'styled-components'

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #FAFAFA;

    input{
        font-family: 'Lato', sans-serif;
        padding-left: 1rem;
        color: #8190A5;
        font-size: 1.125rem;
        font-weight:300;
        line-height: 3.875rem;
        text-align: left;
        width:25rem;
        height:3.125rem;
        border: 1px solid #3B4252;
        border-radius: 5px;
        outline: none;

        
    }

    button{
        height:3.125rem;
        font-family: 'Lato';
        font-size: 22px;
        font-weight: 300;
        width:118px;
        border-radius: 5px;
        background-color:#47525E;
        color: #ECEFF4;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;
        transition: .1s ease-in-out;

        &:hover{
            transform:scale(0.95);
        }
    }

    div{
        display: flex;
        align-items: center;
    }
    
    
`

export const Title = styled.label`
    font-weight: 300;
    font-size: 40px;
    color:#3B4252;

`

export const ErrorMessage = styled.span`
    color: #a4133c;
    margin-top:1rem;
    transition: 4s;
`