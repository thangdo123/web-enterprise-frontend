import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import {
  getContributionPercentageByFaculty,
  getContributionsStatsByFacultyAndYear,
} from "../../../store/slices/Manager/statistic";

export default function Statistic() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log("Percentage");
    dispatch(getContributionPercentageByFaculty());
    console.log("Stats");
    dispatch(getContributionsStatsByFacultyAndYear());
  });
  return (
    <div>
      <div></div>
    </div>
  );
}
