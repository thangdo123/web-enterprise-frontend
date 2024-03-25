import React from "react";

export interface IAcademicYear {
  id: string;
  closure_date: string;
  final_closure_date: string;
  createdAt: React.ReactNode;
}

export interface IAcademicYearsState {
  allAcademicYears: IAcademicYear[][];
}
