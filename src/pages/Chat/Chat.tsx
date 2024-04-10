import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox/ChatBox";
import * as S from "./Chat.styled";
import socket from "../../socket";
import ContactList from "./ContactList/ContactList";

export default function Chat() {
  const [conversationId, setConversationId] = useState<string>("");
  useEffect(() => {
    socket.emit("get-conversation");
    socket.on("get-conversation-response", (data) => {
      console.log(data);
    });
  });
  return (
    <S.PageContainer>
      {conversationId && <ChatBox conversationId={conversationId} />}
      <ContactList getConversationId={setConversationId} />
    </S.PageContainer>
  );
}
