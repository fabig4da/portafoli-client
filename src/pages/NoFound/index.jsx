import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';



export const NoFound =  ( )=>{
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }, [navigate])
    return(
        <Container>
            <h2>Pages no found</h2>
            <p>Redirecting to home...</p>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    gap: 10px;
    h2, p{
        text-align: center;
    }
`