import React from "react";
import type { LabelProps } from "@/types";

export const Label: React.FC<LabelProps> = ({ title, value }) => (
  <div>
    <div className="text-xs capitalize tracking-wide text-slate-500 mb-1">{title}</div>
    <div className="text-sm font-medium text-slate-900">{value}</div>
  </div>
);
