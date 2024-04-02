interface IFile {
  name: string;
  path: string;
}

export interface IChosenContribution {
  id: string;
  title: string;
  is_public: boolean;
  user: {
    name: string;
    Faculty: {
      name: string;
    };
  };
  Documents: IFile[];
  Image: IFile[];
}

export interface IChosenContributionState {
  allChosenContributions: IChosenContribution[][];
  isDownloading: boolean;
}
