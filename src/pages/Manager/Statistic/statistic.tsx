import React, { useEffect } from "react";
import * as S from "./statistic.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  getContributionPercentageByFaculty,
  getCountContributionsStats,
  getTotalContributions,
  getTotalContributionsToday,
  getTotalCoordinators,
} from "../../../store/slices/Manager/statistic";
import "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import { generateRandomColor } from "../../../utils/randomColor.utils";
import "./style.css";

export default function Statistic() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    percentage,
    countContribution,
    totalContributions,
    newContributions,
  } = useSelector((state: RootState) => state.statisticState);
  const pieData = {
    labels: Object.keys(percentage),
    datasets: [
      {
        label: "My First Dataset",
        data: Object.values(percentage),
        backgroundColor: Object.keys(percentage).map(() =>
          generateRandomColor(),
        ),
        hoverOffset: 4,
      },
    ],
  };

  /* eslint-disable */
  const barData = {
    labels: [
      "Total contributions",
      ...Object.keys(countContribution.contributionsByFaculty),
    ],
    datasets: [
      {
        label: "Contributions",
        data: [
          countContribution.totalContributions,
          ...Object.values(countContribution.contributionsByFaculty).map(
            (item: any) => item.totalContributions,
          ),
        ],
        backgroundColor: [
          "Total contributions",
          ...Object.keys(countContribution.contributionsByFaculty),
        ].map(() => generateRandomColor()),
        hoverOffset: 4,
      },
    ],
  };
  /* eslint-disable */

  useEffect(() => {
    dispatch(getTotalContributions());
    dispatch(getTotalContributionsToday());
    dispatch(getTotalCoordinators());
    dispatch(getContributionPercentageByFaculty());
    dispatch(getCountContributionsStats());
  }, []);
  return (
    <S.PageContainer>
      <S.Block1>
        <S.Block1Items>
          <S.Block1ItemLeft>
            <i className="bi bi-journal-text"></i>
          </S.Block1ItemLeft>
          <S.Block1ItemRight>
            <S.B1RightTitle>Total contributions</S.B1RightTitle>
            <S.B1RightCount>{totalContributions}</S.B1RightCount>
          </S.Block1ItemRight>
        </S.Block1Items>
        <S.Block1Items>
          <S.Block1ItemLeft>
            <i className="bi bi-journal-text"></i>
          </S.Block1ItemLeft>
          <S.Block1ItemRight>
            <S.B1RightTitle>Total new contributions today</S.B1RightTitle>
            <S.B1RightCount>{newContributions}</S.B1RightCount>
          </S.Block1ItemRight>
        </S.Block1Items>
        <S.Block1Items>
          <S.Block1ItemLeft>
            <i className="bi bi-journal-text"></i>
          </S.Block1ItemLeft>
          <S.Block1ItemRight>
            <S.B1RightTitle>Total contributions</S.B1RightTitle>
            <S.B1RightCount>23</S.B1RightCount>
          </S.Block1ItemRight>
        </S.Block1Items>
      </S.Block1>
      <S.ChartContainer>
        <S.Chart>
          <S.ChartTitle>Contributions in each faculty</S.ChartTitle>
          <Bar data={barData} />
        </S.Chart>
        <S.Chart>
          <S.ChartTitle>
            Percentage of contributions in each faculty compared to all
            contributions
          </S.ChartTitle>
          <Pie
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
            data={pieData}
          />
        </S.Chart>
      </S.ChartContainer>
    </S.PageContainer>
  );
}
