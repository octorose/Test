import React from "react";
import type { ButtonProps } from "@/types";

export const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => (
  <button
    className={`rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);