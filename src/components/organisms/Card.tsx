import React from "react";
import { BookingCard, InfoCard } from "@/components";
import type { CardProps } from "@/types";

export const Card: React.FC<CardProps> = (props) => {
  if (props.type === "booking") {
    return <BookingCard data={props.data} onManage={props.onManage} />;
  }
  
  if (props.type === "info") {
    return <InfoCard />;
  }
  
  return null;
};
