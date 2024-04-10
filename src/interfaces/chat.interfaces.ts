import { IAccount } from "./account.interfaces";

export interface IMessage {
  text: string;
  userId: string;
  sender: {
    id: string;
  };
}

export interface IContactState {
  coordinator: IAccount[];
}

export interface IConversation {
  id: string;
}
