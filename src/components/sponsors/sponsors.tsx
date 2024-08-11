import React from "react";
import Heading from "../heading";
import Tier from "./tier";

const sponsors = [
  {
    tier: "Diamond",
    color: "#67E8F9",
    logo: ["/images/htb.png"],
  },
  {
    tier: "Bronze",
    color: "#CD7F32",
    logo: ["/images/Accelerate-x.png"],
  },
];

const Sponsors: React.FC = () => {
  return (
    <div className="w-full p-4 sm:py-12">
      <Heading heading="Sponsors" subheading="Meet Our Sponsors" />
      {sponsors.map((sponsor, index) => (
        <Tier
          key={index}
          color={sponsor.color}
          tier={sponsor.tier}
          sponsorImgLinks={sponsor.logo}
        />
      ))}
    </div>
  );
};

export default Sponsors;
