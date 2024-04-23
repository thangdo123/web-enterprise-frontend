import styled from "styled-components";
import Button from "../../../components/Button/Button";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
  width: 100%;
  flex: 8;
`;

const ReceiverInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
  overflow-y: scroll;
  height: 100%;
  max-height: 400px;
  width: 100%;
`;

const Message = styled.div<{ $isUser: boolean }>`
  word-wrap: break-word;
  ${({ $isUser }) => ($isUser ? "margin-left: auto" : "margin-right: auto")};
  padding: var(--s-4);
  background-color: ${({ $isUser }) =>
    $isUser ? "var(--blue-light-2)" : "var(--gray-light-2)"};
  border-radius: var(--br-lg) var(--br-lg) var(--br-lg) 0;
  box-shadow: var(--shadow-sm);
  max-width: 40%;
`;

const MessageInputContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
`;

const InputContainer = styled.div`
  border: 1px solid var(--gray-light-2);
  border-radius: var(--br-md);
  padding: var(--s-2) var(--s-4);
  flex: 8;
`;

const MessageInput = styled.textarea`
  width: 100%;
  word-wrap: break-word;
  height: fit-content;
`;

const SendBtn = styled(Button)`
  flex: 2;
  color: var(--black);
`;

export {
  ChatContainer,
  ChatBox,
  ReceiverInfo,
  Message,
  MessageInputContainer,
  MessageInput,
  InputContainer,
  SendBtn,
};
