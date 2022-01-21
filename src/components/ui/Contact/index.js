import { useState } from 'react';
import {messageRepository} from '../../../repository/message'
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { Charging } from '..';
import { useForm } from 'react-hook-form';
import { _errorMessage, _succesMessage } from '../../../Redux/actions';
import { useDispatch } from 'react-redux';


export const Contact = () => {
    const [visible, setVisible] = useState(false);
    const {mutate, isLoading} = useMutation(data=>messageRepository.create(data));
    const {register, handleSubmit, reset} = useForm();
    const dispatch =  useDispatch();

    const closeChatWindow = ({target})=>{
        if(target.id && target.id === 'chat-container'){
            setVisible(false);
        }
    }

    const sendMessage = (data)=>{
        console.log(data);
        mutate(data, {
            onSuccess: async ()=>{
                dispatch(_succesMessage("Message sent, I'll contact you as soon as posible, thanks!!!"))
                setVisible(false);
                reset();
            },
            onError: async ()=>{
                dispatch(_errorMessage("It's occured an error, your message wasn't sent"))
            }

        })
    }

    if(isLoading) return <Charging />

    return (
        <>
            {visible &&
                <ContactContainer onClick={closeChatWindow} id='chat-container'>
                    <ChatBox onSubmit={handleSubmit(sendMessage)}>
                        <label for="email" className="form-label">Email: </label>
                        <input
                            type="email"
                            className="form-control mb-1"
                            id="email"
                            placeholder="type your email"
                            {...register("email", { required: true })}
                        />
                        <label for="subject" className="form-label">Subject: </label>
                        <input
                            type="text"
                            className="form-control mb-1"
                            id="subject"
                            placeholder="type the subject"
                            {...register("subject", { required: true })}
                        />
                        <label for="msg" className="form-label">Message: </label>
                        <textarea
                            className="form-control mb-1"
                            id="msg"
                            placeholder="Write your message here"
                            {...register("msg", { required: true })}

                        ></textarea>
                        <input type="submit" className="btn btn-primary mt-3" value="Send"/>
                            
                        
                    </ChatBox>

                </ContactContainer>
            }
            <ChatIcon onClick={() => setVisible(val => !val)}>
                <i class="fas fa-comment">  </i>
            </ChatIcon>
        </>
    )
}

const ContactContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
`

const ChatBox = styled.form`
    width: 400px;
    height: 500px;
    background-color: #fff;
    position: absolute;
    right: 15px;
    bottom: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 1s  ease-in-out;
    textarea{
        min-height: 200px;
    }
`

const ChatIcon = styled.div`
    width: 100px;
    height: 100px;
    position: fixed;
    right: 15px;
    bottom: 15px;
    background-color: #073cc0;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 19;
    i{
        font-size: 3rem;
    }
`
