interface HeadingProps {
  heading: string;
  subheading: string;
}

export default function Heading(props: HeadingProps) {
  return <div>heading{props.heading}</div>;
}
