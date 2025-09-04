// "use client";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav>
//       <Link href="/">Home</Link> | <Link href="/cart">Cart</Link>
//     </nav>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            <Link href="/">Amaze</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/"   className={`hover:text-blue-600 ${
                    pathname === "/" ? "text-blue-600 font-semibold" : ""
            }`}>Home</Link>
            
            {/* <Link href="/" className="hover:text-blue-600">Home</Link> */}
            {/* <Link href="/cart" className="hover:text-blue-600">Cart</Link> */}
             <Link href="/cart"   className={`hover:text-blue-600 ${
                    pathname === "/cart" ? "text-blue-600 font-semibold" : ""
            }`}>Cart</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/client-page" className="hover:text-blue-600">Products</Link>
            <Link href="/cart" className="hover:text-blue-600">Cart</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
