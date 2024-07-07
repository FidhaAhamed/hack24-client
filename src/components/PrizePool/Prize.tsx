import styled from "styled-components";

interface PrizeProps {
  icon: string;
  label: string;
}

interface ContainerProps {
  prizeProps: PrizeProps;
}

const Container = styled.div<ContainerProps>`
  .prize-label::before {
    content: "${(props) => props.prizeProps.label}";
  }
`;
const Prize = ({ icon, label }: PrizeProps) => {
  return (
    <div data-aos="fade-down">
      <Container
        prizeProps={{ icon, label }}
        className="relative mb-16 border-[#FBFBFB] border-[1px] w-44 pt-3 px-3"
      >
        <div className="prize-label  flex justify-center items-center before:text-white before:text-sm before:font-bold before:absolute before:-top-4 before:px-6 before:bg-[#151419]" />
        <div className="flex place-content-center items-center bg-[#F56E0F] p-3">
          <img src={icon} alt="winner-icon" className="w-10" />
        </div>
      </Container>
    </div>
  );
};
export default Prize;
