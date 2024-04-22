import React, { useState } from "react";
import ChatBox from "./ChatBox/ChatBox";
import * as S from "./Chat.styled";
import ContactList from "./ContactList/ContactList";
import ConversationList from "./Conversation/Conversation";

export default function Chat() {
  const [conversationId, setConversationId] = useState<string>("");

  return (
    <S.PageContainer>
      <S.ConversationContainer>
        <ConversationList getConversationId={setConversationId} />
        {conversationId && <ChatBox conversationId={conversationId} />}
      </S.ConversationContainer>
      <ContactList getConversationId={setConversationId} />
    </S.PageContainer>
  );
}
