import React from "react";
import { RouteRow, BookingMeta, Button } from "@/components";
import type { BookingCardProps } from "@/types";

export const BookingCard: React.FC<BookingCardProps> = ({ data, onManage }) => (
        <article className="rounded-2xl bg-white p-4 md:p-6 shadow-md ring-1 ring-slate-100 relative">
          {/* Top Right - Partner Badges and Logo */}
          <div className="absolute -top-3 right-4 flex items-center gap-4">
            <div className="flex items-centertext-sm text-slate-600">
              <div className="w-6 h-6 rounded flex items-center justify-center">
                <img 
                  src="/src/assets/warehouse.png" 
                  alt="Warehouse" 
                  width={20} 
                  height={20}
                  className="flex-shrink-0"
                />
              </div>
              <span>Copag</span>
            </div>
            <div className="flex items-center  text-sm text-slate-600">
              <div className="w-6 h-6 rounded flex items-center justify-center">
                <img 
                  src="/src/assets/candidate.png" 
                  alt="Candidate" 
                  width={20} 
                  height={20}
                  className="flex-shrink-0"
                />
              </div>
              <span>Transit</span>
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <div className="w-6 h-7  rounded flex items-center justify-center relative">
                <img 
                  src="/src/assets/group.png" 
                  alt="Group" 
                  width={40} 
                  height={40}
                  className="flex-shrink-0"
                />
                <div className="absolute -top-3 -right-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center z-10 border-2 border-white">
                  <span className="text-white text-[10px] font-semibold">{data.requestsCount}</span>
                </div>
              </div>
            </div>
            <img 
              src="/src/assets/CMA.svg" 
              alt="CMA CGM" 
              width={60} 
              height={20}
              className="flex-shrink-0"
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
