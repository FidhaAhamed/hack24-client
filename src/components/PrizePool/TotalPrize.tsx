interface TotalPrizeProps {
  amount: number;
  className?: string;
}

const TotalPrize = ({ amount, className }: TotalPrizeProps) => {
  return (
    <div
      data-aos="zoom-in"
      className={`mb-16 bg-black w-48 pt-2 pb-4 flex flex-col items-center justify-between ${className}`}
    >
      <h1 className="text-[#F56E0F] text-center font-semibold mb-auto">
        Total Prize Pool
      </h1>
      <p className="text-white text-xl font-bold text-center mt-auto">
        ₹{amount.toLocaleString("en-US")}
      </p>
    </div>
  );
};

export default TotalPrize;
