import React, { useEffect } from "react";
import * as S from "./statistic.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  getContributionPercentageByFaculty,
  getContributionsStatsByFacultyAndYear,
  getCountContributionsStats,
} from "../../../store/slices/Manager/statistic";
import "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import { generateRandomColor } from "../../../utils/randomColor.utils";

export default function Statistic() {
  const dispatch = useDispatch<AppDispatch>();
  const { percentage, countContribution } = useSelector(
    (state: RootState) => state.statisticState,
  );
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
          ...Object.values(countContribution.contributionsByFaculty),
        ],
        backgroundColor: [
          "Total contributions",
          ...Object.keys(countContribution.contributionsByFaculty),
        ].map(() => generateRandomColor()),
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    dispatch(getContributionPercentageByFaculty());
    dispatch(getContributionsStatsByFacultyAndYear());
    dispatch(getCountContributionsStats());
  }, []);
  return (
    <S.PageContainer>
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
