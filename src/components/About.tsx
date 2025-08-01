import { useState } from 'react';

function About() {
  const [showFull, setShowFull] = useState(false);

  const shortText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  const fullText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <section className="mb-5 p-3 text-center animate__animated animate__fadeIn">
      <h2 className="mb-4">About You</h2>
      <p style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {showFull ? fullText : shortText}
      </p>

      <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Read Less" : "Read More"}
        </button>


       <a
  href="#"
          onClick={(e) => e.preventDefault()}

  download
  className="btn btn-custom btn-sm d-flex align-items-center gap-1"
>
  <img src="/pdf.png" alt="PDF icon" width="20" height="20" />Download Resume</a>

      </div>
    </section>
  );
}

export default About;
