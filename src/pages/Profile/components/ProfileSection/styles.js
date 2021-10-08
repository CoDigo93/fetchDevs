import styled  from 'styled-components'

export const AsideContainer = styled.aside`
    @media (max-height: 800px){
        height:100vh;
        width:450px;

    }
    
    height:1024px;
    width: 450px;
    background-color: #3B4252;
    color:#ECEFF4;
    padding:2rem 1rem 0 1rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    overflow-x: hidden;
    

    h1{
        font-size:clamp(20px, 30px, 40px);
        font-family: 'Lato';
        font-weight: 300;
        text-align: left;
        line-height: 50px;
        width: 400px;
        margin: 1rem 0 0 0;
    }

    span{
        font-size: clamp(20px, 24px, 28px);
        line-height: 22px;
        font-weight: 300;
        color: #ECEFF4;
        width: 400px;
        margin-bottom: 1.5rem;
        
    }

    button{
        width:192px;
        background-color: #ECEFF4;
        height: 50px;
        position:sticky;
        border-radius: 5px;
        border:none;
        outline: none;
        font-family: 'Lato';
        font-size: 18px;
        color: #3B4252;
        font-weight: 300;
        cursor: pointer;
        transition: .4s;

        &:hover{
            background-color: #ECEFF4aa;
        }

        
        
    }

    

`


export const Avatar = styled.div`
    @media (max-height: 800px){
        height:180px;
        width: 180px;
        border:1px solid #C0CCDA;
        background-image: url(${props => props.avatar});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    
    height:298px;
    width: 298px;
    border:1px solid #C0CCDA;
    background-image: url(${props => props.avatar});
    background-size: contain;
    background-position: center;
`


export const Details = styled.div`
    display: flex;
    flex-direction: column;
    font-size: clamp(20px, 24px, 28px);

    
    a{
        text-decoration:none;
        color:white;

    }

    
    
`


export const Engagement = styled.small`
    display: flex;
    font-size: clamp(14px, 18px, 20px);
    font-weight: 300;
    width:100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;

    div{
        margin-right: 1rem;

        a{
            text-decoration: none;
            color:#ECEFF4;
        }
    }
`

export const Description = styled.small`
        color: #8190A5;
        width:400px;
        font-family: 'Lato';
        line-height: 28px;
        font-size: clamp(14px ,18px, 18px);
        margin-bottom: 1.5rem;
`