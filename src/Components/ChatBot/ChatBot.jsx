import React, {useState} from 'react'
import './ChatBot.css'
const ChatBot = () => {
  return (
    <>
        
        <button className='btnChatBot'>
            <span>DocMe ChatBot</span>
        </button>
    <div className='ChatBotContainer'>
        <div className='ContentChatBot'>
            <div className='HeaderChatBot'>
                <div className='TitleChatBot'>
                    <span>DocMe ChatBot</span>
                </div>

                <div className='BTNChatBotCLose'>
                    <button className='CloseChatBot'>
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