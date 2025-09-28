import React from "react";
import type { RouteRowProps } from "@/types";

export const RouteRow: React.FC<RouteRowProps> = ({ from, to, dateLabel, id }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <img 
        src="/src/assets/Boat.png" 
        alt="Boat" 
        width={12} 
        height={12}
        className="flex-shrink-0"
      />
      <span className="text-xs text-slate-500">{id || dateLabel}</span>
      <span className="text-xs uppercase text-slate-500">CIF</span>
    </div>
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#283C7E'}}>
          <div className="text-white text-xs">▾</div>
        </div>
        <div className="font-semibold text-slate-900 text-sm md:text-base">{from}</div>
        <div className="text-xs text-slate-500">{dateLabel}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-xs text-primary">Stops 1</div>
        <div className="text-xs text-primary">▾</div>
      </div>
      <div className="flex items-center gap-2">
        <img 
          src="/src/assets/map-pin.png" 
          alt="Map Pin" 
          width={16} 
          height={16}
          className="flex-shrink-0"
        />
        <div className="font-medium text-slate-900 text-sm md:text-base">{to}</div>
      </div>
    </div>
  </div>
);
