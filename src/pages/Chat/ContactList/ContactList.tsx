import React, { useEffect, useState } from "react";
import * as S from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  viewCoordinatorByFacultyId,
  viewStudentByFacultyId,
} from "../../../store/slices/viewCoordinator";
import socket from "../../../socket";

interface IConversationList {
  getConversationId: (id: string) => void;
}

export default function ContactList({ getConversationId }: IConversationList) {
  const [conversationId, setConversationId] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { userProfile } = useSelector(
    (state: RootState) => state.userProfileState,
  );
  const { contactList } = useSelector((state: RootState) => state.contactState);

  const handleOpenConversation = (id: string) => {
    socket.emit("join", {
      users: `${userProfile.id}, ${id}`,
    });
    socket.on("join-room-response", (conversation: { room: string }) => {
      console.log(conversation);
      setConversationId(conversation.room);
    });
  };

  useEffect(() => {
    if (userProfile.role === "STUDENT") {
      dispatch(viewCoordinatorByFacultyId(userProfile.FacultyId!));
    } else {
      dispatch(viewStudentByFacultyId());
    }
  }, [userProfile]);

  useEffect(() => {
    getConversationId(conversationId);
  }, [conversationId]);
  return (
    <S.ListContainer>
      <S.ListTitle>Contacts</S.ListTitle>
      <S.ListItemsContainer>
        {contactList &&
          contactList.map((value, index) => (
            <S.ListItem
              key={index}
              onClick={() => handleOpenConversation(value.id!)}
            >
              <S.ItemAva />
              <S.ItemName>{value.name}</S.ItemName>
            </S.ListItem>
          ))}
      </S.ListItemsContainer>
    </S.ListContainer>
  );
}
