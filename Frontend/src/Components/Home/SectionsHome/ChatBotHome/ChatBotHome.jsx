import React from 'react'
import './ChatBotHome.css'
import ChatBotGreeting from '../../../../assets/Animations/DocMe Chatbot.mp4'

const ChatBotHome = () => {
    return (
        <section className='ContainerChatBotHome'>
            <div className="ContentChatBotHome">
                <div className='ChatBotTextWrapper'>
                    <div className="textContentChatBot">
                        <h3 id='TextContent'>
                            Estamos aquí para ti. Habla con nuestro asistente de salud
                        </h3>
                    </div>

                    <div className="PTextChatBotHome">
                        <p>
                            Nuestro asistente de salud está disponible para responder tus preguntas y guiarte en el proceso de gestión de citas médicas. Con DocMe, recibirás la atención y el soporte que necesitas, cuando lo necesitas. No importa la hora ni el lugar, estamos aquí para asegurarnos de que tu salud siempre sea una prioridad.
                        </p>
                    </div>
                </div>

                <div className='ContainerAnimatadCharBotHome'>
                    <video src={ChatBotGreeting} alt="Chatbot" loop autoPlay muted />
                </div>

            </div>

        </section>
    )
}

export default ChatBotHome