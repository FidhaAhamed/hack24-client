import Heading from "./heading";

export default function About() {
  return (
    <div className="w-dvw h-dvh bg-about">
      <div className="z-10 absolute w-full h-full flex flex-col md:grid md:grid-cols-2 p-8">
        <div className="col-span-1 w-full h-full flex flex-col place-content-center place-items-center lg:p-20">
          <Heading heading="About" subheading=".hack(); 2024" />
          <div className="text-center flex flex-col gap-y-4 text-snow">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              pariatur, facere sequi culpa nulla magnam, nobis aliquam iste
              voluptatibus unde nisi dolore iure? Consectetur harum id, eius ex
              sed deleniti perspiciatis cumque mollitia ipsa! Ut eum architecto
              voluptatum veritatis explicabo nobis quas, nisi quis
              necessitatibus vitae ab velit minus autem corporis consequuntur
              enim? Tenetur fugit doloremque inventore voluptatum recusandae
              veritatis.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              obcaecati ea voluptatum quis impedit esse odio? Ad, similique odit
              facilis in, hic dicta assumenda sunt accusamus iusto provident
              culpa excepturi.
            </p>
          </div>
        </div>
        <div className="col-span-1">hi</div>
      </div>
    </div>
  );
}
