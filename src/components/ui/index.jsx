import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #eeeeee;
    display: flex;
`
export const Sider = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    background-color: #038fd4;
`
export const MainDash = styled.div`
    width: 75%;
    display: flex;
    background-color: #fafafa;
    padding: 20px;
`

export const CardTitle = styled.div`
    font-size: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    position: relative;
    border: 2px solid #dadada;
    border-radius: 10px;
    padding: 30px 5px;
    .c-title{
        position: absolute;
        font-size: 1.6rem;
        font-weight: bold;
        text-transform: capitalize;
        color: #919191;
        top: -1em;
        left: 10px;
        background-color: #fafafa;
        padding: 5px;
    }
`

export const SiderItem = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    padding-left: 5px;
    transition: all 100ms ease-in-out;
    display: flex;
    align-items: center;
    color: white;
    a{
        height: 100%;
        text-decoration: none;
        font-size: 1.2rem;
        color: white;
        width: 100%;
        line-height: 40px;
    }
    i{
        font-size: 1.5rem;
        margin-right: 5px;
    }
    &:hover{
        background-color: #0000003e;
        span{
            position: absolute;
            content: '';
            top: 0;
            right: 0;
            width: 3px;
            height: 100%;
            background-color: #000;
        }
    }
`

export const ContainerScrollY = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`

export const NavButton = styled.a`
    padding: 5px;
    font-size: 1.2rem;
    color: white;
    background-color: #038fd4;
    text-decoration: none;
    border-radius: 10px;
    box-shadow: 2px 2px rgba(#000, .3);
    max-width: 100px;
    margin: 10px;
    i{
        margin-right:5px;

    }
    &:hover{
        color: white;
        opacity: .7;
    }
`

export const IconButton = styled.a`
    padding: 6px 8px;
    font-size: 1.2rem;
    color: white;
    background-color: ${props => props.bcolor ? props.bcolor : '#038fd4'};
    text-decoration: none;
    border-radius: 6px;
    /* box-shadow: 2px 2px rgba(#000, .3); */
    margin-right: 10px;
    &:hover{
        color: white;
        opacity: .7;
    }
`

export const Form = styled.form`
    width: 80%;
    min-height: 30px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 2px solid #dadada;
    border-radius: 10px;
    margin: 0 auto;

`

export const Charge = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000088;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30;
    span{
        width: 100px;
        height: 100px;
        background-color: transparent;
        border-top: 5px solid blue;
        border-left: 5px solid blue;
        /* border-bottom: 5px solid blue; */
        border-radius: 50%;
        animation: ani 1s infinite;
    }

    @keyframes ani {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
        
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000088;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    span{
        position: absolute;
        top: 5px;
        right: 15px;
        color: #585858;
        font-size: 2rem;
        cursor: pointer;
    }
    div{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        min-width: 300px;
        min-height: 300px;
        background-color: #fff;
    }
`
export const Charging = () => <Charge><span></span></Charge>
