import React from "react";

interface SponsorProps {
  imgLink: string;
}

const Sponsor: React.FC<SponsorProps> = ({ imgLink }) => {
  return (
    <div className="max-w-[300px] p-4 h-[200px] flex items-center justify-center bg-[#da6919e0] rounded-lg -outline-offset-8 hover:bg-slate-800 duration-500 outline-double outline-slate-200">
      <img className="w-full p-4" src={imgLink} alt="Sponsor Logo" />
    </div>
  );
};

export default Sponsor;
