import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./ChatBoxstyled";
import socket from "../../../socket";
import { IMessage } from "../../../interfaces/chat.interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface IChatBox {
  conversationId: string;
}

export default function ChatBox({ conversationId }: IChatBox) {
  const [message, setMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<IMessage[]>([]);
  const { userProfile } = useSelector(
    (state: RootState) => state.adminProfileState,
  );

  const sendMessage = () => {
    const messageContent = {
      userId: userProfile.id!,
      conversationId: conversationId,
      text: message,
    };
    socket.emit("message", messageContent);
    setMessage("");
    socket.on("message-sent", (data) => {
      console.log(data);
    });
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  useEffect(() => {
    socket.emit("get-message", {
      conversationId: conversationId,
    });
    socket.on("get-message-response", (data: IMessage[]) => {
      setMessageList(data);
    });
  });

  return (
    <S.ChatContainer>
      <S.ChatBox>
        {messageList &&
          messageList.map((value, index) => (
            <S.Message $isUser={userProfile.id === value.sender.id} key={index}>
              {value.text}
            </S.Message>
          ))}
      </S.ChatBox>
      <S.MessageInputContainer onSubmit={handleOnSubmit}>
        <S.InputContainer>
          <S.MessageInput
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </S.InputContainer>
        <S.SendBtn onClick={sendMessage}>Send</S.SendBtn>
      </S.MessageInputContainer>
    </S.ChatContainer>
  );
}
