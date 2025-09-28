import React from "react";
import type { BadgeProps } from "@/types";

export const Badge: React.FC<BadgeProps> = ({ children, color = "bg-sky-600 text-white", className = "" }) => (
  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${color} ${className}`}>{children}</span>
);