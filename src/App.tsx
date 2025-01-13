import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Sidebar */}
      <div className="w-full md:w-[300px] bg-black text-white font-pt-sans">
        <div className="p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-[40px] leading-[48px] font-bold mb-2 scale-hover">
              This is<br />CS2103DE
            </h1>
            <h2 className="text-[20px] leading-[24px] font-normal text-white/80">
              All Things Software Engineering
            </h2>
          </div>

          {/* Team Section */}
          <div className="mb-6">
            <h3 className="section-header">Teaching Team</h3>
            <div className="space-y-1">
              <p className="text-[18px] leading-[27px] font-normal text-white/50 text-glow">
                Theivendiram Pranavan
              </p>
              <p className="text-[18px] leading-[27px] font-normal text-white/50 text-glow">
                Zhu Zikun
              </p>
            </div>
          </div>

          {/* iP Navigation Section */}
          <div className="nav-section mb-6">
            <h3 className="section-header">Individual Project</h3>
            <div className="space-y-1">
              <a href="#" className="nav-link">
                iP Details
              </a>
              <a href="#" className="nav-link">
                iP progress dashboard
              </a>
              <a href="#" className="nav-link">
                iP Code dashboard
              </a>
            </div>
          </div>

          {/* tP Navigation Section */}
          <div className="nav-section">
            <h3 className="section-header">Team Project</h3>
            <div className="space-y-1">
              <a href="#" className="nav-link">
                tP Details
              </a>
              <a href="#" className="nav-link">
                tP progress dashboard
              </a>
              <a href="#" className="nav-link">
                tP Code dashboard
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white">
        <div className="p-8">
          <h2 className="text-[32px] leading-[38px] font-bold text-black mb-4 title-hover-1">
            Welcome
          </h2>
          <div className="border-t border-black">
            <p className="text-[16px] leading-[1.6] font-normal text-black mt-4">
              This course introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. It covers four main areas of software development, namely object-oriented system analysis, object-oriented system modelling and design, implementation, and testing, with emphasis on system modelling and design and implementation of software courses that work cooperatively to fulfill the requirements of the system. Tools and techniques for software development, such as Unified Modelling Language (UML), program specification, and testing methods, will be taught. Major software engineering issues such as modularisation criteria, program correctness, and software quality will also be covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
