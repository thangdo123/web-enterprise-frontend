export interface ICoordinatorContribution {
  id?: string;
  title: string;
  description: string;
  is_disabled?: boolean;
  is_choosen?: boolean;
  userId?: string;
  createAt: string;
  updateAt?: string;
  is_public?: boolean;
  AcademicYearId?: string;
  AcademicYear: {
    closure_date: string;
    final_closure_date: string;
  };
  Image: [
    {
      path: string;
    },
  ];
}

export interface ICoordinatorContributionState {
  contribution: ICoordinatorContribution[][];
}
