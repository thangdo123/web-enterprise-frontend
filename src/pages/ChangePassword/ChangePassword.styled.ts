import { styled } from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

export const LoginContainter = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--gray-light-1);
  height: 900px;
  p {
    margin: 0;
  }
`;

export const LoginCenter = styled.div`
  width: 33.33%;
  p {
    color: var(--gray);
  }
  @media ${DEVICES.TABLET} {
    width: 100%;
  }
`;

export const LogoDescription = styled.p`
  text-align: center;
`;

export const LoginLogoBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    width: 80%;
  }
`;

export const LogoImg = styled.img`
  width: 20%;
`;

export const LoginField = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginFieldContainer = styled.form`
  margin-top: 40px;
  width: 80%;
`;

export const LoginFieldText = styled.div`
  border-bottom: var(--gray) solid 1px;
  padding-bottom: 2px;
  p {
    color: var(--blue-2);
    border-bottom: var(--blue-2) solid 2px;
    width: fit-content;
  }
`;

export const InputField = styled.div`
  padding: 5px;
  margin-top: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  border: var(--gray) solid 1px;
  gap: 2px;
  p {
    width: 7%;
    i {
      font-size: 20px;
      color: var(--blue-2);
    }
  }
  input {
    width: 85%;
    border: none;
    outline: none;
  }
`;

export const HidePasswordBtn = styled.div``;

export const ForgotPassword = styled.div`
  margin-top: 20px;
  color: var(--blue-2);
  a {
    text-decoration: none;
  }
  & :hover {
    text-decoration: underline;
    color: purple;
  }
`;

export const SignInBtn = styled.button`
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  background-color: var(--blue-2);
  color: white;
  border: none;
  border-radius: 5px;
`;
