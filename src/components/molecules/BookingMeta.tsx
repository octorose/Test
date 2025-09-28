import React from "react";
import { Label } from "@/components";
import type { BookingMetaProps } from "@/types";
import containerImg from "@/assets/container.png";

export const BookingMeta: React.FC<BookingMetaProps> = ({ bookingCode, cargo, vessel, service }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 ">
    <div className="space-y-3 md:space-y-4">
      <Label title="Booking" value={<span className="font-semibold tracking-wide">{bookingCode}</span>} />
      <div>
        <div className="text-sm font-medium text-slate-900 mb-1">{cargo.description}</div>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <img 
            src={containerImg} 
            alt="Container" 
            width={16} 
            height={16}
            className="flex-shrink-0"
          />
          <span>{cargo.containers}</span>
        </div>
      </div>
    </div>
    <div className="space-y-3 md:space-y-4">
      <Label title="Vessel" value={vessel} />
      <Label title="Service" value={service} />
    </div>
  </div>
);
