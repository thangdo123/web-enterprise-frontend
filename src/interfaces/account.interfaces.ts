import React from "react";

export interface IAccount {
  id?: string;
  name: string;
  email: string;
  role: string;
  createAt?: React.ReactNode;
  avatar?: string;
  faculty?: string;
  FacultyId?: string;
  is_locked?: boolean;
  password?: string;
}

export interface IAccountState {
  accounts: {
    account: IAccount[][];
  };
}
