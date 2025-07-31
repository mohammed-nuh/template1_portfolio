import { forwardRef, useState } from "react";

type Project = {
  title: string;
  video: string;
  short: string;
  full: string;
};

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const projects: Project[] = [
    {
      title: "Voice Based Cart Adding System",
      video: "project1.mp4",
      short: "Add products to cart using voice commands.",
      full:
        "An innovative voice-controlled system for hands-free shopping where users can speak to add products to their cart. Built with React and voice recognition APIs.",
    },
    {
      title: "Ecommerce App",
      video: "project2.mp4",
      short: "A full-featured ecommerce frontend.",
      full:
        "A responsive ecommerce app with product listings, cart, and checkout flow. Designed with Bootstrap and managed with React states.",
    },
    {
      title: "Todo List App",
      video: "project3.mp4",
      short: "Simple and effective todo manager.",
      full:
        "A React-based todo app to add, delete, and filter tasks. Designed with clean UI and local storage support for persistent data.",
    },
    {
      title: "Theme Toggler App",
      video: "project4.mp4",
      short: "Switch between light and dark themes.",
      full:
        "A React app that lets users toggle between themes using state management. It remembers user preference using localStorage.",
    },
    {
      title: "Travel And Tourism",
      video: "project5.mp4",
      short: "Explore destinations with this tourism site.",
      full:
        "A travel website that displays tourist spots with visuals and brief guides. Built using Bootstrap and React routing.",
    },
    {
      title: "Language Switcher App",
      video: "project6.mp4",
      short: "Dynamic multi-language interface.",
      full:
        "React app that supports multiple languages using i18next. Users can switch languages instantly with preserved content state.",
    },
  ];

  return (
    <section
      ref={ref}
      className="mb-5 animate__animated animate__fadeInUp text-center container"
    >
      <h2 className="mb-4">Projects</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow">
              <video className="card-img-top" controls>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body text-start">
                <h5 className="card-title d-flex align-items-center gap-2">
                  {project.title}
                  {project.title === "Ecommerce App" && (
                    <a
                      href="https://ecommerce-app-host.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
                      style={{ fontSize: "0.75rem", padding: "2px 6px" }}
                    >
                      <span className="live-dot"></span> Live
                    </a>
                  )}
                </h5>

                <p className="card-text">
                  {expanded === index ? project.full : project.short}
                </p>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => toggleExpand(index)}
                >
                  {expanded === index ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Styles for live dot animation */}
      <style>{`
        .live-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background-color: red;
          border-radius: 50%;
          animation: pulse 1.2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.6);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
});

export default Projects;
