import React from "react";
import Sponsor from "./sponsor";

interface TierProps {
  tier: string;
  color: string;
  sponsorImgLinks: string[];
}

const Tier: React.FC<TierProps> = ({ tier, color, sponsorImgLinks }) => {
  return (
    <div className="flex flex-col items-center flex-wrap justify-center pb-8">
      <div className={`text-2xl font-bold pb-8`} style={{ color }}>
        {tier} sponsor
      </div>
      <div className="flex justify-center flex-wrap">
        {sponsorImgLinks.map((imgLink, index) => (
          <Sponsor key={index} imgLink={imgLink} />
        ))}
      </div>
    </div>
  );
};

export default Tier;
