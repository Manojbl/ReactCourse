import React from 'react';
import './App.css';
import {Chatbot} from 'supersimpledev';

function ChatInput({ chatMessages, setChatMessages }) {
            const [inputText, setInputText] = React.useState('');

            function saveInputText(event){
                setInputText(event.target.value);
            }
            function sendMessage(){

                const newChatMessages = [
                    ...chatMessages,
                    {
                        message:inputText,
                        sender:'user',
                        id:crypto.randomUUID()  
                    }
                ];
                setChatMessages(newChatMessages);


               const response = Chatbot.getResponse(inputText);
               setChatMessages([
                    ...newChatMessages,
                    {
                        message:response,
                        sender:'robot',
                        id:crypto.randomUUID()  
                    }
               ]);
               

                setInputText('');
            
            }        
            return(
                <div className="chat-input-container">
                    <input 
                     placeholder="Type your message..." 
                     size="30"
                     onChange={saveInputText}
                     className="chat-input"
                     value={inputText}
                     />
                    <button
                    onClick={sendMessage}
                    className="send-button"
                    >Send</button>
                </div>
            );
        }
        function ChatMessage({message, sender}) {
            
            //const message = props.message;
            //const sender = props.sender;
            //const { message, sender } = props;

            /*if(sender === 'robot'){
                return(
                    <div>
                        <img src="robot.png"  width="50" />
                        {message}
                    </div>
                );
            }*/
            return(
                <div className={sender === 'user' ? 'user-message' : 'robot-message'}>
                    {sender === 'robot' && (
                        <img src="robot.png"  className="chat-message-profile" />
                    )}
                    <div className="message-text">
                    {message}
                    </div>
                    {sender === 'user' && (
                        <img src="user.png"  className="chat-message-profile" />
                    )}
                </div>
            );
        }

        function ChatMessages({chatMessages}){

            const chatMessagesRef = React.useRef(null);

            React.useEffect(()=>{
                const containerElem = chatMessagesRef.current;
                if(containerElem){
                    containerElem.scrollTop = containerElem.scrollHeight;
                }
            }, [chatMessages]);
            
            return (
                <div className="chat-messages-container" ref={chatMessagesRef}>
                    {chatMessages.map((chatMessage)=>{
                            return (
                                <ChatMessage
                                message={chatMessage.message}
                                sender={chatMessage.sender}
                        key={chatMessage.id}
                        />
                        );
                    })}
                </div>
            );
        }

        function App() {

            const [chatMessages, setChatMessages] = React.useState([
                {
                    message: 'Hello! How can I assist you today?',
                    sender: 'robot',
                    id: crypto.randomUUID()
                }
            ]);
            // const [ChatMessages, setChatMessages] = array;
             //const ChatMessages = array[0];
            //const setChatMessages = array[1];

            return (            
            <div className="app-container">
                <ChatMessages 
                    chatMessages={chatMessages}
                />
                <ChatInput 
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                />
            </div>
            );
        }

        export default App