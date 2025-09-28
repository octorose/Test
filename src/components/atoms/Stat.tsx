import React from "react";
import type { StatProps } from "@/types";

export const Stat: React.FC<StatProps> = ({ value, hint }) => (
  <div className="text-right">
    <div className="text-2xl font-semibold leading-none text-sky-600">{value}</div>
    {hint && <div className="text-[11px] text-slate-500">{hint}</div>}
  </div>
);
