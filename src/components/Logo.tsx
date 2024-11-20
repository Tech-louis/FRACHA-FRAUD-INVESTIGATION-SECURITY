import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            {/* Africa outline */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-red-600">
                <path d="M50,10 C60,25 70,40 65,60 C60,80 40,85 35,65 C30,45 40,25 50,10" />
              </svg>
            </div>
            {/* FFI text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-red-600 font-bold text-sm">FFI</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight">FRACHA FRAUD</span>
        <span className="font-bold text-lg leading-tight">INVESTIGATION</span>
      </div>
    </div>
  );
}