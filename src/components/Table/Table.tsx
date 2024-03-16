import React from "react";
import * as S from "./Table.styled";

export default function Table() {
  return (
    <S.Table>
      <S.TableHeadRow>
        <S.TableHeadItem>Username</S.TableHeadItem>
        <S.TableHeadItem>Email</S.TableHeadItem>
        <S.TableHeadItem>Role</S.TableHeadItem>
        <S.TableHeadItem>Actions</S.TableHeadItem>
      </S.TableHeadRow>
      <S.TableRow>
        <S.TableItem>ThangDo</S.TableItem>
        <S.TableItem>thangdd3103@gmail.com</S.TableItem>
        <S.TableItem>Student</S.TableItem>
        <S.TableItem>
          <S.ActionItemContainer>
            <S.ActionTitle>Edit</S.ActionTitle>
            <S.ActionTitle>Delete</S.ActionTitle>
          </S.ActionItemContainer>
        </S.TableItem>
      </S.TableRow>
    </S.Table>
  );
}
