import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-9 "
        alt="user"
        src="https://imgs.search.brave.com/dOKW9m1byb09eqHnJKr0hpAvCWILxG3qn8aGzQtP7dU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMTUwOC9Q/TkcvOTYvc3lzdGVt/dXNlcnNfMTA0NTY5/LnBuZw"
      />
      <span className="font-bold px-2">{name}</span>

      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
