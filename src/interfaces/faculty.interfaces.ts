import React from "react";

export interface IFaculty {
  id: string;
  name: string;
  createAt: React.ReactNode;
}

export interface IFacultyState {
  allFaculties: IFaculty[][];
}
