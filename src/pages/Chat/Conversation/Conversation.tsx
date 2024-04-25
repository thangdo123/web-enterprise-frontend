import React, { useEffect, useState } from "react";
import * as S from "./Conversation.styled";
import socket from "../../../socket";

interface IConversationList {
  getConversationId: (id: string) => void;
}

interface IConversation {
  conversationId: string;
  latestMessage: {
    text: string;
  };
  name: string;
}

interface IConversationResponse {
  body: {
    conversations: IConversation[];
    message: string;
  };
}

export default function ConversationList({
  getConversationId,
}: IConversationList) {
  const [conversationId, setConversationId] = useState<string>("");
  const [conversationList, setConversationList] = useState<IConversation[]>();

  useEffect(() => {
    socket.emit("get-conversation");
    socket.on("get-conversation-response", (data: IConversationResponse) => {
      setConversationList(data.body.conversations);
    });
  });

  useEffect(() => {
    getConversationId(conversationId);
  }, [conversationId]);
  return (
    <S.ListContainer>
      <S.ListTitle>Conversations</S.ListTitle>
      <S.ListItemsContainer>
        {conversationList &&
          conversationList.map((conversation, index) => (
            <S.ListItem
              key={index}
              onClick={() => setConversationId(conversation.conversationId)}
            >
              <S.ItemAva />
              <S.ItemInfo>
                <S.ItemName>{conversation.name}</S.ItemName>
                <S.ItemMsg>
                  {conversation.latestMessage && conversation.latestMessage.text
                    ? conversation.latestMessage.text
                    : ""}
                </S.ItemMsg>
              </S.ItemInfo>
            </S.ListItem>
          ))}
      </S.ListItemsContainer>
    </S.ListContainer>
  );
}
