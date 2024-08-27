import React from "react";

const Desktop = () => {
  return (
    <div className="w-full h-screen flex">
      {/* Left side with whatsapp-image */}
      <div className="w-1/2 h-full relative">
        <img
          className="absolute top-0 left-0 w-full h-full"
          loading="lazy"
          alt="Left Side Background"
          src="/whatsapp-image-20240817-at-40052-pm-3@2x.png"
        />
      </div>

      {/* Right side with rectangle-42046 background and cards */}
      <div
        className="w-1/2 h-full relative bg-cover bg-no-repeat flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url("/rectangle-42046@2x.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Container for the cards */}
        <div className="flex flex-col space-y-8">
          {/* Cards */}
          <button
            onClick={() => console.log("Navigating to Finance")}
            className="rounded-41xl bg-black border-orangered border-[2px] border-solid box-border w-[528px] h-[123px] flex items-center justify-center z-10"
          >
            <div className="font-semibold text-white text-5xl">FINANCE</div>
          </button>
          <button
            onClick={() => console.log("Navigating to Sponsorship")}
            className="rounded-41xl bg-black border-orangered border-[2px] border-solid box-border w-[528px] h-[123px] flex items-center justify-center z-10"
          >
            <div className="font-semibold text-white text-5xl">SPONSORSHIP</div>
          </button>
          <button
            onClick={() => console.log("Navigating to Legal & Draftings")}
            className="rounded-41xl bg-black border-orangered border-[2px] border-solid box-border w-[528px] h-[123px] flex items-center justify-center z-10"
          >
            <div className="font-semibold text-white text-5xl">LEGAL & DRAFTINGS</div>
          </button>
          <button
            onClick={() => console.log("Navigating to Public Relations")}
            className="rounded-41xl bg-black border-orangered border-[2px] border-solid box-border w-[528px] h-[123px] flex items-center justify-center z-10"
          >
            <div className="font-semibold text-white text-5xl">PUBLIC RELATIONS</div>
          </button>
          <button
            onClick={() => console.log("Navigating to Human Resource")}
            className="rounded-41xl bg-black border-orangered border-[2px] border-solid box-border w-[528px] h-[123px] flex items-center justify-center z-10"
          >
            <div className="font-semibold text-white text-5xl">HUMAN RESOURCE</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
