function Education() {
  return (
    <section className="mb-5 animate__animated animate__fadeInUp px-3 text-center">
      <h2 className="mb-4">Education</h2>

      {/* Scrollable wrapper with left padding to avoid cutoff */}
      <div
        className="position-relative w-100"
        style={{
          overflowX: "auto",
          paddingBottom: "20px",
          paddingLeft: "16px",           // ✅ Fix: prevents left-side cutoff
          scrollPaddingLeft: "16px",     // ✅ Optional: for better scroll behavior
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Timeline line */}
        <div
          className="position-absolute bg-dark"
          style={{
            top: "10px",
            left: 0,
            height: "2px",
            width: "100%",
            minWidth: "650px",
            zIndex: 0,
          }}
        ></div>

        {/* Timeline items */}
        <div
          className="d-flex flex-nowrap justify-content-center px-4"
          style={{ minWidth: "650px", gap: "50px" }}
        >
          {/* Checkpoint 1 */}
          <div style={{ minWidth: "200px", zIndex: 1 }}>
            <div
              className="rounded-circle bg-darkblue mx-auto mb-3"
              style={{ width: 20, height: 20 }}
            ></div>
            <h6 className="mb-1">Your High School Name</h6>
            <small>(Start Date – End Date)</small>
            <div className="d-flex justify-content-center gap-2 mt-1">
              <span className="badge rounded-pill bg-darkblue text-white px-3 py-2">Grade 10</span>
              <span className="badge rounded-pill bg-light text-dark border px-3 py-2">XX.XX%</span>
            </div>
          </div>

          {/* Checkpoint 2 */}
          <div style={{ minWidth: "200px", zIndex: 1 }}>
            <div
              className="rounded-circle bg-darkblue mx-auto mb-3"
              style={{ width: 20, height: 20 }}
            ></div>
            <h6 className="mb-1">Your Pre University Name</h6>
            <small>(Start Date – End Date)</small>
            <div className="d-flex justify-content-center gap-2 mt-1">
              <span className="badge rounded-pill bg-darkblue text-white px-3 py-2">Grade 12</span>
              <span className="badge rounded-pill bg-light text-dark border px-3 py-2">XX.XX%</span>
            </div>
          </div>

          {/* Checkpoint 3 */}
          <div style={{ minWidth: "200px", zIndex: 1 }}>
            <div
              className="rounded-circle bg-darkblue mx-auto mb-3"
              style={{ width: 20, height: 20 }}
            ></div>
            <h6 className="mb-1">Your University Name</h6>
            <small>(Start Date – End Date)</small>
            <div className="d-flex justify-content-center gap-2 mt-1">
              <span className="badge rounded-pill bg-darkblue text-white px-3 py-2">Course</span>
              <span className="badge rounded-pill bg-light text-dark border px-3 py-2">CGPA X.XX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
