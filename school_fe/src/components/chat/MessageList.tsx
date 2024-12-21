const MessageList = ({ messages }: any) => {
  return (
    <div className="flex-1 overflow-scroll p-3">
      {messages.map((message: string, index: number) => {
        <p key={index}>{message}</p>;
      })}
    </div>
  );
};
export default MessageList;
