'use client';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-semibold italic text-black">CareLens</div>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-8 text-sm font-medium text-gray-700 items-center">
          <Link href="/" className="relative group">
            <span className="transition-colors group-hover:text-black">Home</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link href="/dashboard" className="relative group">
            <span className="transition-colors group-hover:text-black">Dashboard</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden sm:flex items-center gap-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button variant="outline" size="sm">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 bg-white shadow-inner border-t border-gray-200">
          <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
            <Link href="/" onClick={closeMenu} className="relative group w-fit">
              <span className="transition-colors group-hover:text-black">Home</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/dashboard" onClick={closeMenu} className="relative group w-fit">
              <span className="transition-colors group-hover:text-black">Dashboard</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>

            <SignedIn>
              <div className="pt-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            <SignedOut>
              <Button variant="outline" size="sm" onClick={closeMenu}>
                <Link href="/sign-in" className='text-center'>Sign In</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
