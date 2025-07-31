type AchievementsProps = {
  onCartClick: () => void;
};

function Achievements({ onCartClick }: AchievementsProps) {
  return (
    <section className="animate__animated animate__fadeInUp px-3 text-center">
      <h2 className="mb-4">Achievements</h2>

      <div className="row justify-content-center g-4">
        {/* Certificate 1 */}
        <div className="col-md-4">
          <div className="card border-dark h-100">
            <img
              src="certificates/uwl_rak_certificate.png"
              className="card-img-top"
              alt="UWL RAK Certificate"
            />
            <div className="card-body">
              <h5 className="card-title">Runners Up - UWL RAK Web Design</h5>
              <p className="card-text">
                Our team secured 2nd place in the PAN UAE IDEA MARATHON 2022 hosted by UWL RAK. I developed the{" "}
                <strong>Voice-Based Cart Adding System</strong> project that earned us this position. The entire codebase
                was written by me and my teammates handled the presentation part.
              </p>
              <button onClick={onCartClick} className="btn btn-outline-primary mt-2">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="col-md-4">
          <div className="card border-dark h-100">
            <img
              src="certificates/FullStack_Certificate.jpeg"
              className="card-img-top"
              alt="Full Stack Certificate"
            />
            <div className="card-body">
              <h5 className="card-title">Full Stack Developer Certificate (IT Ridge)</h5>
              <p className="card-text">
                Successfully completed Full Stack Development training at IT Ridge and earned certification.
              </p>
            </div>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className="col-md-4">
          <div className="card border-dark h-100">
            <img
              src="certificates/FLA_FullStack_Certificate.png"
              className="card-img-top"
              alt="FLA Certificate"
            />
            <div className="card-body">
              <h5 className="card-title">FLA Full Stack Certificate</h5>
              <p className="card-text">
                Successfully completed Full Stack Web Development course (Oct 2024 – June 2025), covering HTML, CSS,
                Bootstrap, JavaScript, TypeScript, React JS, Core Java, REST APIs, and Spring Boot. Earned Grade A.
              </p>
            </div>
          </div>
        </div>
      </div>

{/* On-Stage Photo & Media Coverage Side by Side */}
<div className="row g-4 mb-5">
  {/* On-Stage Photo */}
  <div className="col-md-6 pt-4">
    <h4 className="mb-3">On Stage at UWL RAK</h4>
    <div className="card border-dark h-100">
      <img
        src="images/me_in_stage.png"
        className="card-img-top"
        alt="On Stage Photo"
      />
      <div className="card-body">
        <p className="card-text">
          A proud moment captured during the award ceremony at UWL RAK after
          winning Runners Up in the Web Designing Competition.
        </p>
      </div>
    </div>
  </div>

  {/* Media Coverage */}
  <div className="col-md-6 pt-4">
    <div className="text-center mb-3 px-2">
      <h4 className="text-decoration-underline m-0">Media Coverage</h4>
    </div>
    <div className="card border-secondary h-100 d-flex">
      <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
        <p className="card-text" style={{ fontStyle: "italic", fontSize: "1.05rem" }}>
          “The University of West London RAK Branch Campus hosted the grand finale of PAN UAE IDEA MARATHON on January 21...
          Mohammed Uzair Ateef, <mark>Mohammed Nuh Abuhuseina</mark> & Sandeep Singh from PACE International School, Sharjah
          became the runner-up in the Web Designing Competition.”
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
          <a
            href="https://uwl.ac.ae/news/uwl-rak-idea-marathon/#:~:text=Annet%20Cecil%20Thomas%20from%20The,Share%20Facebook%20Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            UWL RAK Website
          </a>
          <a
            href="https://www.khaleejtimes.com/kt-network/the-university-of-west-london-rak-branch-hosts-idea-marathon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            Khaleej Times
          </a>
        </div>
      </div>
    </div>
  </div>
</div>




    </section>
  );
}

export default Achievements;
