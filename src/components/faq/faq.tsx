import Heading from "../heading.js";
import "./faq.css";
import "./script.js";
export default function Faq() {
  return (
    <section
      id="faq"
      className="md:h-dvh flex w-dvw flex-col place-content-center bg-gluon"
    >
      <div className="lg:p-4 py-12">
        <Heading heading="Faq" subheading="Have some queries ?"></Heading>
        <div className="faq-body">
          <div
            data-aos="fade-down"
            className="faq-questions flex flex-col place-content-center"
          >
            <div className="accordion-container">
              <details open>
                <summary>
                  <span className="accordion-title">
                    How many participants can be in a team?
                  </span>
                  <span className="accordion-icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </span>
                </summary>
                <div className="accordion-content">
                  Teams can consist of 1 to 4 participants.
                </div>
              </details>
              <details>
                <summary>
                  <span className="accordion-title">
                    Can non-IEEE members participate in the hackathon?
                  </span>
                  <span className="accordion-icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </span>
                </summary>
                <div className="accordion-content">
                  Yes, the hackathon is open to both IEEE members and
                  non-members. Everyone is welcome to join and contribute their
                  innovative ideas.
                </div>
              </details>
              <details>
                <summary>
                  <span className="accordion-title">
                    Do I need to have a team before registering?
                  </span>
                  <span className="accordion-icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </span>
                </summary>
                <div className="accordion-content">
                  No, you can register as an individual, and we will help you
                  form a team.
                </div>
              </details>
              <details>
                <summary>
                  <span className="accordion-title">
                    Is there a registration fee to participate in the hackathon?
                  </span>
                  <span className="accordion-icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </span>
                </summary>
                <div className="accordion-content">No.</div>
              </details>
              <details>
                <summary>
                  <span className="accordion-title">
                    Do I need to have a specific skill set to participate in the
                    hackathon?
                  </span>
                  <span className="accordion-icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </span>
                </summary>
                <div className="accordion-content">
                  No, the hackathon is open to participants of all skill levels,
                  whether you're a beginner or an experienced developer.
                </div>
              </details>
            </div>
          </div>
          <div data-aos="flip-left" className="faq-img">
            <img
              src="/images/thinking programmer.png"
              alt="thinking programmer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
