export interface IGuestFaculty {
    id: string;
    name: string;
    createBy?: string;
    createAt?: string;
    updatedAt?: string;
}

export interface IPublishedContributions{
    id: string;
    title: string;
    description: string;
    user: {
        name: string,
        Faculty: {
            name: string,
        }
    }
    Image: [
        {
            path:string,
        }
    ]
}

export interface IGuestState {
    faculties: IGuestFaculty[],
    allPublicContributions: IPublishedContributions[][],
    isLoading: boolean;
}