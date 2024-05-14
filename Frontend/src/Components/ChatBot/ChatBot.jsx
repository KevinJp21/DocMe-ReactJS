import React, { useState, useEffect, useRef, useContext } from 'react';
import './ChatBot.css';
import { AuthContext } from '../AuthContext/AuthContext';

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [conversation, setConversation] = useState([]);
    const [isOpenChatBot, setIsOpenChatBot] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const {userData} = useContext(AuthContext);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [conversation]);

    const simulateTyping = async (text, sender) => {
        setIsTyping(true);
        let currentText = '';
        for (let i = 0; i < text.length; i++) {
            currentText += text[i];
            // Actualiza el último mensaje de la conversación en vez de añadir uno nuevo
            setConversation(conv => {
                const newConv = [...conv];
                if (newConv.length && newConv[newConv.length - 1].sender === sender) {
                    newConv[newConv.length - 1].text = currentText;
                } else {
                    newConv.push({ text: currentText, sender });
                }
                return newConv;
            });
            await new Promise(resolve => setTimeout(resolve, 50)); // Ajusta la velocidad de "tipeo"
        }
        setIsTyping(false);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!message.trim()) return;

        const userMessage = { text: message, sender: 'user' };
        setConversation(conv => [...conv, userMessage]);
        setMessage('');

        try {
            const response = await fetch('http://localhost:8080/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: userData.id, message }), // Asegúrate de que userData.id es accesible
            });
            const data = await response.json();

            // Simular la respuesta del bot
            simulateTyping(data.response, 'bot');
        } catch (error) {
            console.error('Error sending message:', error);
            simulateTyping('Error al conectar al chatbot', 'bot');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    };

    const handleOpenChatBot = () => {
        setIsOpenChatBot(true);
    };

    const handleCloseChatBot = () => {
        setIsOpenChatBot(false);
    };

    return (
        <>
            <button className='btnChatBot' onClick={handleOpenChatBot}>
                <span>DocMe ChatBot</span>
            </button>

            <div className={`ChatBotContainer ${isOpenChatBot ? 'ChatBotOpen' : ''}`}>
                <div className='ContentChatBot'>
                    <div className='HeaderChatBot'>
                        <div className='TitleChatBot'>
                            <span>DocMe ChatBot</span>
                        </div>
                        <div className='BTNChatBotCLose'>
                            <button className='CloseChatBot' onClick={handleCloseChatBot}>
                                <i className="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>
                    </div>

                    <div className="bodyChatBot">
                        <div className="conversation">
                            {conversation.map((entry, index) => (
                                <div key={index} className={`message ${entry.sender}`}>
                                    <div className="message-sender">
                                        <span>{entry.sender === 'user' ? 'Tú' : 'DocMe'}</span>
                                    </div>
                                    <p className="message-text">
                                        <span>{entry.text}</span>
                                    </p>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSubmit} className="message-form">
                            <textarea 
                                value={message} 
                                onChange={handleMessageChange} 
                                onKeyDown={handleKeyDown}
                                placeholder="Escribe tu mensaje aquí..."
                                maxLength={200}
                                rows={4}></textarea>
                            <button type="submit">
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBot;
