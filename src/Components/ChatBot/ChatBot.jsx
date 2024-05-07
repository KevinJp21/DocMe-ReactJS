import React, {useState} from 'react'
import './ChatBot.css'
const ChatBot = () => {
    const [isOpenChatBot, setIsOpenChatBot] = useState(false);

    const handleOpenChatBot = () => {
        setIsOpenChatBot(true)
    }

    const handleCloseChatBot = () => {
        setIsOpenChatBot(false)
    }

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
        </div>
    </div>

    </>
  )
}

export default ChatBot