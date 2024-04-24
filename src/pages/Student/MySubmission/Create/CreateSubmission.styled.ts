import styled from "styled-components";

export const Layout = styled.form`
    display: flex;
    justify-content: center;
    p, h3{
        margin:0;
    }
`;

export const Container = styled.div`
    width: 95%;
`;

export const Block1 = styled.div`
    border-bottom: var(--gray-light-1) solid 1px;
`;

export const MainTitle = styled.h1`
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    margin-bottom: var(--s-6);
    margin-top: var(--s-6);
`;

export const Description = styled.p`
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    margin-bottom: var(--s-12);
`;

export const LeftTile = styled.div`
    flex: 3;
`;

export const Block2 = styled.div`
    margin-top: var(--s-10);
    display: flex;
    align-items: center;
`;

export const Block2RightInput = styled.div`
    flex: 7;
    border: var(--gray-light-2) solid 1px;
    border-radius: 5px;
    padding: 5px 10px;
    input{
        font-size: var(--fs-md);
        width: 100%;
    }
`;

export const Block3 = styled.div`
    margin-top: var(--s-10);
    display: flex;
`;

export const Block3Right = styled.div`
    flex: 7;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap:4%;
    margin-top: var(--s-10);
`;

export const Buttons = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-evenly;
`;

export const SaveBtn = styled.button`
    padding: 10px 20px;
    color: white;
    background-color: var(--blue);
    border-radius: 3px;
    &:hover{
        cursor: pointer;
    }
`;

export const CancelBtn = styled.button`
    padding: 10px 20px;
    color: white;
    background-color: red;
    border-radius: 3px;
    &:hover{
        cursor: pointer;
    }
`;

export const ReturnBtn = styled.button`
    padding: 10px 20px;
    color: white;
    background-color: var(--gray);
    border-radius: 3px;
    &:hover{
        cursor: pointer;
    }
`;

export const Block4 = styled.div`
    margin-top: var(--s-10);
    display: flex;
    align-items: center;
`;

export const Block4RightTxtArea = styled.div`
    flex: 7;
    border: var(--gray-light-2) solid 1px;
    border-radius: 5px;
    padding: 5px 10px;
    textarea{
        font-size: var(--fs-md);
        width: 100%;
        height: var(--s-13);
        max-height: 500px;
    }
`;