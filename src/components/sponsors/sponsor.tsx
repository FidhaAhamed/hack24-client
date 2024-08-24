import React from "react";

interface SponsorProps {
  link: string;
  imgLink: string;
}

const Sponsor: React.FC<SponsorProps> = ({ link,imgLink }) => {
  return (
    <div className="max-w-[300px] p-4 h-[200px] flex items-center justify-center bg-[#da6919e0] rounded-lg -outline-offset-8 hover:bg-slate-800 duration-500 outline-double outline-slate-200">
      <a href={link}><img className="w-full p-4" src={imgLink} alt="Sponsor Logo" /></a>
    </div>
  );
};

export default Sponsor;
