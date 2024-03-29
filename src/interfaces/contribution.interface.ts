export interface IContribution {
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

export interface IContributionDetail {
  contribution: {
    id?: string;
    title: string;
    description: string;
    is_disabled?: boolean;
    is_choosen?: boolean;
    userId?: string;
    createdAt: string;
    updatedAt?: string;
    is_public?: boolean;
    AcademicYearId?: string;
  };
  academicYear: 
    {
      closure_date: string;
      final_closure_date?: string;
    };
  document: [
    {
      name: string;
    },
  ];
  image: [
    {
      name: string;
    },
  ];
  comment: [
    {
      content: string;
    }
  ]
}

export interface IContributionState {
  contribution: IContribution[][];
  detailContribution: IContributionDetail;
}
