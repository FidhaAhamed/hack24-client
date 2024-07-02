interface HeadingProps {
  heading: string;
  subheading: string;
}

export default function Heading(props: HeadingProps) {
  return (
    <div data-aos="zoom-in-down" className="text-center p-4 mb-4">
      <div className=" text-lg text-lava p-0 m-0">{props.heading}</div>
      <div className=" text-4xl leading-7 text-snow">
        <b>{props.subheading}</b>
      </div>
    </div>
  );
}
