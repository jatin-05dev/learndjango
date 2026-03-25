 import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-5 flex justify-between items-center border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
    <Link to="/" className="text-xl font-black tracking-tighter text-cyan-500 italic">EDUPAY.</Link>
    <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
      <Link to="/admin" className="text-slate-500 hover:text-white transition-colors">Staff Dashboard</Link>
      <Link to="/student" className="text-slate-500 hover:text-white transition-colors">Student Portal</Link>
    </div>
  </nav>
);

export default Navbar;