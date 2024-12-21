import { useState } from "react";

const MessageInput = ({ socket }: any) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("", message);
      setMessage("");
    }
  };

  return <div className="p-3 border-t-2">
    <input 
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="w-3/4 p-1.5"
    />
    <button
        onClick={() => sendMessage()}
        className="ml-3"
    >
        send
    </button>
  </div>;
};

export default MessageInput;
