import React from "react";

export interface IAccount {
  id?: string;
  name: string;
  email: string;
  role: string;
  createAt?: React.ReactNode;
  avatar?: string;
  faculty?: string;
  is_locked?: boolean;
}

export interface IAccountState {
  accounts: {
    account: IAccount[][];
  };
}
