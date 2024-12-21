import { useEffect, useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatRoom = ({ socket }: any) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      let mergedMessages: any = [...messages, data];

      setMessages(mergedMessages);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <div className="flex flex-col h-svh">
      <MessageList messages={messages} />
      <MessageInput socket={socket} />
    </div>
  );
};

export default ChatRoom;
