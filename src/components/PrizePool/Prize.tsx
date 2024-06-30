import styled from 'styled-components'

interface PrizeProps {
  icon : string;
  label : string;
  amount : number;
}

interface ContainerProps {
    prizeProps : PrizeProps;
  }

const Container = styled.div<ContainerProps>`
.prize-label::before {
    content: "${props => props.prizeProps.label}";
}
`
const Prize = ({icon,label,amount}: PrizeProps) => {

  return (
    <Container prizeProps={{ icon, label, amount }} className='relative mb-16 border-[#FBFBFB] border-[1px] w-48 pt-3 px-3'>
        <div className='prize-label flex justify-center items-center before:text-white before:text-sm before:font-normal before:absolute before:-top-4 before:px-6 before:bg-black'
        />
        <div className='flex items-center bg-[#F56E0F] p-3'>
            <img src={icon} alt='winner-icon' className='w-8'/>
            <p className='ml-4 text-white'>₹{amount}</p>   
        </div>
    </Container>
  )
}
export default Prize