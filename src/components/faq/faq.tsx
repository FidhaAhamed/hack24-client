import "./faq.css";
import "./script.js";
export default function Faq() {
  return (
    <section id="faq">
      <div className="upper-heading">faq</div>
      <div className="lower-heading">
        <h2>Have some queries?</h2>
      </div>
      <div className="faq-body">
        <div className="faq-questions">
          <div className="accordion-container">
            <details open>
              <summary>
                <span className="accordion-title">What is the universe?</span>
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
                The universe is the entirety of all objects and spaces that
                exist in time and space. It is the largest known system and is
                believed to be approximately 13.8 billion years old.
              </div>
            </details>
            <details>
              <summary>
                <span className="accordion-title">What is dark matter?</span>
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
                Dark matter is a form of matter that cannot be seen directly but
                can be inferred by its influence on galaxy formation and the
                speed of star rotation. It is believed to make up 27% of the
                total mass of the universe.
              </div>
            </details>
            <details>
              <summary>
                <span className="accordion-title">What is the Big Bang?</span>
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
                The Big Bang is the event that marked the beginning of the
                universe, approximately 13.8 billion years ago. It is believed
                to have been a moment when the entire universe rapidly expanded
                from an infinitely dense and hot point.
              </div>
            </details>
            <details>
              <summary>
                <span className="accordion-title">What is dark energy?</span>
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
                Dark energy is a form of energy that cannot be seen directly but
                can be inferred by its influence on the universe's expansion. It
                is believed to make up 68% of the total energy of the universe.
              </div>
            </details>
            <details>
              <summary>
                <span className="accordion-title">
                  What is the cosmic horizon?
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
                The cosmic horizon is the farthest limit that can be seen from
                Earth. It is the most distant point visible due to the
                universe's expansion and the speed of light. All stars and
                galaxies beyond this point are beyond human sight.
              </div>
            </details>
          </div>
        </div>
        <div className="faq-img">
          <img
            src="src\assets\thinking programmer.png"
            alt="thinking programmer"
          />
        </div>
      </div>
    </section>
  );
}
