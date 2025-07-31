function Channel() {
  return (
    <section className="my-5 animate__animated animate__fadeInUp px-3 text-center">
      <h2 className="pt-5">Rapid Code (Channel)</h2>
      <p>
        I run a channel called <strong>Rapid Code</strong>, where I publish short, beginner-friendly
        videos explaining frontend concepts, coding mini-projects, and tips for aspiring developers.
      </p>

      {/* Long video */}
      <div className="ratio ratio-16x9 my-4" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <iframe
          src="https://www.youtube.com/embed/xBP0UPXzX8s"
          title="Rapid Code Long Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Shorts */}
      <div className="container px-0">
        <div className="row g-2">
          {[
            "Y-KnGuGw8CA",
            "9Bv9mA2ryUM",
            "vbRh6Ca1kUo",
            "D6Z1hY5J0WA",
          ].map((id, i) => (
            <div key={i} className="col-6 col-md-3 d-flex justify-content-center">
              <iframe
                width="100%"
                height="444"
                src={`https://www.youtube.com/embed/${id}`}
                title={`Rapid Code Short ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ maxWidth: "250px" }}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Channel;
