import React from "react";
import { Button } from "@/components";

export const InfoCard: React.FC = () => (
  <article className="rounded-2xl bg-white p-4 md:p-6 shadow-md ring-1 ring-slate-100 max-w-4xl mx-auto">
    {/* Mobile Layout */}
    <div className="block md:hidden space-y-6">
      {/* Status Section */}
      <div className="space-y-4">
        <div className="text-sm text-slate-500">Lorem ipsum</div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center">
          </div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <span className="text-sm">Lorem ipsum</span>
          <span className="text-sm">▾</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center">
          </div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
        </div>
      </div>

      {/* Info Grid Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="text-sm text-slate-500">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
        </div>
        <div className="space-y-4">
          <div className="text-sm text-slate-500">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
          <div className="text-sm text-slate-500">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex justify-end gap-3 pt-4">
        <Button className="px-6 py-2">
          Button
        </Button>
        <button className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition">
          <div className="text-4xl text-primary">⋯</div>
        </button>
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden md:flex gap-28 h-full">
      {/* First Div - Column Layout with badges and icons */}
      <div className="flex flex-col space-y-4 flex-shrink-0">
        <div className="text-sm text-slate-500">Lorem ipsum</div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center">
          </div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <span className="text-sm">Lorem ipsum</span>
          <span className="text-sm">▾</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center">
          </div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
        </div>
      </div>

      {/* Second Div - Grid Layout */}
      <div className="grid grid-cols-2 gap-28 flex-1">
        <div className="space-y-4">
          <div className="text-sm text-slate-500">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
        </div>
        <div className="space-y-4">
          <div className="text-sm text-slate-500">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
          <div className="text-sm text-slate-500">Lorem ipsum</div>
          <div className="font-semibold text-slate-900">Lorem ipsum</div>
        </div>
      </div>

      {/* Third Div - Buttons positioned at bottom right */}
      <div className="flex flex-col justify-end">
        <div className="flex gap-3">
          <Button className="px-6 py-2">
            Button
          </Button>
          <button className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition">
            <div className="text-4xl text-primary">⋯</div>
          </button>
        </div>
      </div>
    </div>
  </article>
);
