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
      title: "Title of Project 1",
      video: "your_project_video.mp4",
      short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      full:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Title of Project 2",
      video: "your_project_video.mp4",
      short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      full:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Title of Project 3",
      video: "your_project_video.mp4",
      short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      full:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Title of Project 4",
      video: "your_project_video.mp4",
      short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      full:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Title of Project 5",
      video: "your_project_video.mp4",
      short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      full:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Title of Project 6",
      video: "your_project_video.mp4",
      short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      full:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
