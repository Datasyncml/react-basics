import { useRef,useEffect} from 'react'
import { ChatMessage } from './ChatMessage';
   import './ChatMessages.css' ; 
     
     
     function ChatMessages( {chatMessages}) {
      const chatMessageRef= useRef(null);
      
      useEffect( ()=>{
          const containerElem = 
          chatMessageRef.current;
          if(containerElem){
            containerElem.scrollTop = 
            containerElem.scrollHeight;
          }
  
        },[chatMessages]);
        return (
          <div className="chat-message-container"
          ref={chatMessageRef}>
                    

            {chatMessages.map((chatMessage) => (
              <ChatMessage
                key={chatMessage.id}
                message={chatMessage.message}
                sender={chatMessage.sender}
              />
            ))}
            </div>
        );
      }
      export default ChatMessages;