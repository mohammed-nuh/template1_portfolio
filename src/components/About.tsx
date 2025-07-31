import { useState } from 'react';

function About() {
  const [showFull, setShowFull] = useState(false);

  const shortText = "I’m pursuing a BCA from Amity Online University and deeply interested in frontend React development and UI/UX.";
  const fullText = "I’m currently pursuing a Bachelor of Computer Applications degree from Amity Online University and have developed a strong interest in frontend React development, web design, and UI/UX. I’m passionate about building responsive, user-friendly interfaces and bringing ideas to life through clean, functional code. Alongside my studies, I run a content channel called Rapid Code where I simplify complex web development topics into short, engaging videos for beginners. I enjoy experimenting with the React framework for frontend logic and interaction, and exploring design systems using Bootstrap and Tailwind CSS to craft modern, visually appealing web interfaces.";

  return (
    <section className="mb-5 p-3 text-center animate__animated animate__fadeIn">
      <h2 className="mb-4">About Me</h2>
      <p style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {showFull ? fullText : shortText}
      </p>
      <button
        className="btn btn-outline-primary btn-sm mt-3"
        onClick={() => setShowFull(!showFull)}
      >
        {showFull ? "Read Less" : "Read More"}
      </button>
    </section>
  );
}

export default About;
