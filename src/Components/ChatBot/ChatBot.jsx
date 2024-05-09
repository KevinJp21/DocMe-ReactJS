import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
    const [message, setMessage] = useState('');
    const [conversation, setConversation] = useState([]);
    const [isOpenChatBot, setIsOpenChatBot] = useState(false);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!message.trim()) return;  // Evita enviar el mensaje

        const newConversation = [...conversation, { text: message, sender: 'user' }];
        setConversation(newConversation);
        setMessage('');

        // Envia el mensaje al servidor y espera la respuesta
        try {
            const response = await fetch('http://localhost:8080/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();
            
            setConversation([...newConversation, { text: data.response, sender: 'bot' }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setConversation([...newConversation, { text: 'Error al conectar al chatbot', sender: 'bot' }]);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();  // Previene que al presionar enter haga un salto de linea en el textarea
            handleSubmit(event);    // Envia el mensaje cuando la tecla enter se presione
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