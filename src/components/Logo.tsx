import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            {/* Africa outline */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src='./img/ffisecurity~logo.png'></img>
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
