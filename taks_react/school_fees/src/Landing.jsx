import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6 relative overflow-hidden">
    <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -top-20 -left-20"></div>
    <div className="relative z-10 space-y-6">
      <h1 className="text-7xl font-black tracking-tighter bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
        EDUPAY<span className="text-white">.</span>
      </h1>
      <p className="text-slate-400 text-lg font-medium">Modern Fee Management for Modern Schools</p>
      <div className="flex gap-4 justify-center pt-6">
        <Link to="/admin" className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">Admin Portal</Link>
        <Link to="/student" className="bg-slate-800 border border-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-700 transition-all">Student Login</Link>
      </div>
    </div>
  </div>
);

export default Landing;