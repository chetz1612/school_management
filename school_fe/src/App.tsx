import "./App.css";
import {io} from "socket.io-client";
import ChatRoom from "./components/chat/ChatRoom";

const socket = io(`http://localhost:5000`);

console.log("🚀 ~ socket:", socket);

function App() {
  return (
    <div>
      <ChatRoom socket={socket} />
    </div>
  );
}

export default App;
