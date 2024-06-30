import Prize from "./Prize"
import winner from '../../assets/winner.png'
import firstRunnerUp from '../../assets/1st-runner-up.png'
import secondRunnerUp from '../../assets/2nd-runner-up.png'
import bestProject from '../../assets/best-project.png'
import TotalPrize from "./TotalPrize"


const PrizePool = () => {
  return (
    <section className="px-3 md:px-12 lg:px-32 mt-24 max-w-[1500px] mx-auto">
        <h1 className="text-sm sm:text-lg text-center text-[#F56E0F] font-semibold">Prize Pool</h1>
        <h1 className="text-2xl sm:text-4xl text-center text-[#FBFBFB] font-bold">Take a Peek at the Prizes</h1>
        
        <div>
          <div className="flex flex-col items-center justify-center mt-10 sm:mt-16">
          <TotalPrize amount={10000} className='block md:hidden'/>
            <Prize icon={winner} amount={10000} label='Winner'/>
          </div>
          <div className="flex flex-col items-center md:gap-x-3 md:flex-row md:justify-between">
            <Prize icon={firstRunnerUp} amount={10000} label='1st Runner Up'/>
            <TotalPrize amount={10000} className='hidden md:block'/>
            <Prize icon={secondRunnerUp} amount={10000} label='2nd Runner Up'/>
          </div>
          <div className="flex flex-col items-center md:gap-x-3 md:flex-row md:justify-between">
            <Prize icon={bestProject} amount={10000} label='Best Project'/>
            <Prize icon={bestProject} amount={10000} label='Best Project '/>
            <Prize icon={bestProject} amount={10000} label='Best Project'/>
            <Prize icon={bestProject} amount={10000} label='Best Project'/>
          </div>
        </div>
    </section>
  )
}
export default PrizePool