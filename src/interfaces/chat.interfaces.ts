import { IAccount } from "./account.interfaces";

export interface IMessage {
  text: string;
  userId: string;
  sender: {
    id: string;
  };
}

export interface IContactState {
  contactList: IAccount[];
}

export interface IConversation {
  id: string;
}
