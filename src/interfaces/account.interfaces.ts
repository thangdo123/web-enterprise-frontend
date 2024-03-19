import React from "react";

export interface IAccount {
  accountId: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createAt: React.ReactNode;
}

export interface IAccountState {
  accounts: IAccount[][][];
}
