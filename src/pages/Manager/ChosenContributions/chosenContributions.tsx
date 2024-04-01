import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { getAllChoosenContributions } from "../../../store/slices/Manager/choosenContributions";

export default function ChosenContributions() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllChoosenContributions());
  });
  return (
    <div>
      <div></div>
    </div>
  );
}
