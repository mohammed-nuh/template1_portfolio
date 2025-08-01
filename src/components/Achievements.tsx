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
              src="certificates/certificate_sample.png"
              className="card-img-top"
              alt="UWL RAK Certificate"
            />
            <div className="card-body">
              <h5 className="card-title">Certificate 1 (Competition)</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi impedit reprehenderit, culpa cumque deserunt distinctio vel tenetur labore perspiciatis porro possimus. Eius minus debitis consectetur, iure cupiditate tempora nemo expedita?
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
              src="certificates/certificate_sample.png"
              className="card-img-top"
              alt="Full Stack Certificate"
            />
            <div className="card-body">
              <h5 className="card-title">Certificate 2</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis iste blanditiis atque eaque rerum iure, delectus commodi. Explicabo sequi quisquam omnis deserunt dignissimos, minima nihil ratione dicta est nemo!
              </p>
            </div>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className="col-md-4">
          <div className="card border-dark h-100">
            <img
              src="certificates/certificate_sample.png"
              className="card-img-top"
              alt="FLA Certificate"
            />
            <div className="card-body">
              <h5 className="card-title">Certificate 3</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit quos laborum sunt est magni dolore incidunt in necessitatibus mollitia commodi dolores dolor modi iure doloribus optio labore, officia consequuntur!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
