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
  academicYear: {
    closure_date: string;
    final_closure_date?: string;
  };
  document: [
    {
      name: string;
      path: string;
    },
  ];
  image: [
    {
      name: string;
      path: string;
    },
  ];
  comment: [
    {
      content: string;
    },
  ];
}

export interface IChosenContribution {
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
  user: {
    name: string;
    Faculty: {
      name: string;
    };
  };
  academicYear: {
    closure_date: string;
    final_closure_date?: string;
  };
  Document?: [
    {
      id: string;
      name: string;
      path: string;
      creatAt: string;
      updatedAt: string;
      contributionId: string;
    },
  ];
  Image: [
    {
      id?: string;
      name?: string;
      path: string;
      creatAt?: string;
      updatedAt?: string;
      contributionId?: string;
    },
  ];
}

export interface IContributionState {
  allMyContributions: IContribution[][];
  detailContribution: IContributionDetail;
  allChosenContribtution: IChosenContribution[][];
}
