import React from "react";
import { RouteRow, BookingMeta, Button } from "@/components";
import type { BookingCardProps } from "@/types";
import warehouseImg from "@/assets/warehouse.png";
import candidateImg from "@/assets/candidate.png";
import groupImg from "@/assets/group.png";
import cmaImg from "@/assets/CMA.svg";

export const BookingCard: React.FC<BookingCardProps> = ({ data, onManage }) => (
        <article className="rounded-2xl bg-white p-4 md:p-6 shadow-md ring-1 ring-slate-100 relative">
          {/* Top Right - Partner Badges and Logo */}
          <div className="absolute -top-2 md:-top-1 right-2 md:right-4 flex items-center gap-1 md:gap-4">
            {/* Mobile: Show only icons, Desktop: Show icons with labels */}
            <div className="flex items-center text-xs md:text-sm text-slate-600">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center">
                <img 
                  src={warehouseImg} 
                  alt="Warehouse" 
                  width={16} 
                  height={16}
                  className="md:w-5 md:h-5 flex-shrink-0"
                />
              </div>
              <span className="hidden md:inline ml-1">Copag</span>
            </div>
            <div className="flex items-center text-xs md:text-sm text-slate-600">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center">
                <img 
                  src={candidateImg} 
                  alt="Candidate" 
                  width={16} 
                  height={16}
                  className="md:w-5 md:h-5 flex-shrink-0"
                />
              </div>
              <span className="hidden md:inline ml-1">Transit</span>
            </div>
            <div className="flex items-center text-xs md:text-sm text-slate-600">
              <div className="w-5 h-6 md:w-6 md:h-5 rounded flex items-center justify-center relative">
                <img 
                  src={groupImg} 
                  alt="Group" 
                  width={32} 
                  height={32}
                  className="md:w-10 md:h-10 flex-shrink-0"
                />
                <div className="absolute -top-2 -right-2 md:-top-6 md:-right-3 w-4 h-4 md:w-7 md:h-7 bg-primary rounded-full flex items-center justify-center z-10 border-2 border-white">
                  <span className="text-white text-[8px] md:text-[10px] font-semibold">{data.requestsCount}</span>
                </div>
              </div>
            </div>
            <img 
              src={cmaImg} 
              alt="CMA CGM" 
              width={40} 
              height={14}
              className="md:w-[60px] md:h-14  flex-shrink-0"
            />
          </div>
    {/* Mobile Layout */}
    <div className="block md:hidden space-y-4">
      <RouteRow from={data.from} to={data.to} dateLabel={data.dateLabel} id={data.id} />
      <BookingMeta
        bookingCode={data.bookingCode}
        cargo={{ description: data.cargo.description, containers: data.cargo.containers, unitsLabel: data.cargo.unitsLabel }}
        vessel={data.vessel}
        service={data.service}
        partnerBadges={data.partnerBadges}
        shipperLogo={data.shipperLogo}
      />
      <div className="flex justify-between items-center pt-4">
      <div className="flex items-center gap-2">
        <div className="text-xl font-semibold leading-none bg-gradient-to-r from-primary to-[#283C7E] bg-clip-text text-transparent">{data.requestsCount}</div>
        <div className="text-xs text-slate-500">modification requests</div>
      </div>
        <Button onClick={() => onManage?.(data.id)} className="w-20 h-8 text-sm">
          Manage
        </Button>
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden md:flex items-start gap-20">
      {/* Left Section - Route Info */}
      <div className="flex-shrink-0">
        <RouteRow from={data.from} to={data.to} dateLabel={data.dateLabel} id={data.id} />
      </div>
      
      {/* Middle Section - Booking Details */}
      <div className="flex-1 mt-8">
        <BookingMeta
          bookingCode={data.bookingCode}
          cargo={{ description: data.cargo.description, containers: data.cargo.containers, unitsLabel: data.cargo.unitsLabel }}
          vessel={data.vessel}
          service={data.service}
          partnerBadges={data.partnerBadges}
          shipperLogo={data.shipperLogo}
        />
      </div>
    </div>
    
    {/* Desktop Bottom Right Section - Stats and Button */}
    <div className="hidden md:block absolute bottom-2 right-3 flex flex-col gap-2" style={{width: 'fit-content'}}>
      <div className="flex items-center gap-2">
        <div className="text-2xl font-semibold leading-none bg-gradient-to-r from-primary to-[#283C7E] bg-clip-text text-transparent">{data.requestsCount}</div>
        <div className="text-xs text-slate-500">modification requests</div>
      </div>
      <div className="flex justify-end">
        <Button onClick={() => onManage?.(data.id)} className="w-24 h-10">
          Manage
        </Button>
      </div>
    </div>
  </article>
);
