import Link from "next/link";
import React from "react";
import { BiAtom } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="w-full fixed bg-slate-800 px-6 py-3 flex justify-between items-center  border-b-4 border-blue-600">
      <div className="logo">
        <h2 className="flex gap-3 justify-center items-center">
          <BiAtom className="text-4xl text-blue-500" />{" "}
          <span className="text-xl font-bold">React Next</span>
        </h2>
      </div>
      <ul className="navLink flex text-lg gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/features">Features</Link>
        </li>
        <li>
          <Link href="/download">Download</Link>
        </li>
        <li>
          <Link href="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link href="/login">Login Now</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
