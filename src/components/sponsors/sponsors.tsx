import Heading from "../heading";

export default function Sponsors() {
  return (
    <div className="w-full p-4 sm:py-12">
      <Heading heading="Sponsors" subheading="Meet Our Sponsors"></Heading>
      <div className="flex flex-col items-center flex-wrap justify-center">
        <div className="text-2xl font-bold text-cyan-300 pb-8">
          Diamond sponsor
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="max-w-[300px] p-4 bg-[#da6919e0] rounded-lg -outline-offset-8 hover:bg-slate-800 duration-500 outline-double outline-slate-200">
            <img
              className="w-full p-4"
              src="/images/htb.png"
              alt="Sponsor Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
