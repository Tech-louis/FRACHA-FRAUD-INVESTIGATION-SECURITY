import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-white">
                <Logo />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#services" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#about" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#contact" className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900">
            <a href="#home" className="text-white hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="text-white hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#about" className="text-white hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="text-white hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}