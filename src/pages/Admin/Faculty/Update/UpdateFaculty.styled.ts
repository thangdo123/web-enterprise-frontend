import styled from "styled-components";

export const CreateFacultyLayout = styled.div`
    display:flex;
    justify-content: center;
    padding-top: 50px;
`;

export const CreateFacultyContainer = styled.form`
    display: flex;
    flex-direction:column;
    width: 40%;
`;

export const CreateFacultyBlock1 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const CreateFacultyLeftTitle = styled.p`
    width: 35%;
    font-weight: bold;
`;

export const CreateFacultyBlock1Right = styled.div`
    width: 65%;
    border: var(--gray) solid 1px;
    padding: 10px;
    border-radius: 10px;
    input{
        width: 100%;
    }

`;

export const BottomBtn = styled.div`
    display: flex;
    justify-content: center;
    div{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
    }
`;

export const SaveBtn = styled.button`
    background-color: var(--blue);
    padding: 10px 20px;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
    }
`;

export const CancelBtn = styled.button`
    background-color: var(--red);
    padding: 10px 20px;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
    }
`;