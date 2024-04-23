import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";

export const Container = styled.div`
    border: var(--gray-light-2) solid 1px;
    width: 300px;
    position: absolute;
    right: 100px;
    top: 70px;
    background-color: white;
    padding: var(--s-4);
    border-radius: var(--br-md);
    overflow: auto;
    height: 300px;
    @media ${DEVICES.PHONE} {
    right: 10px;
    top: 55px;
  }
`;

export const NotiItems = styled.div`
    padding: var(--s-2) 0;
    border-bottom: var(--gray-light-2) solid 1px;
    i{
        color: var(--red);
        margin-right: 5px;
    }
`;