import { useState } from "react";
import yourPic from "../assets/your_pic.png"

function Header() {
  const [expanded, setExpanded] = useState(false);
  const toggleNavbar = () => setExpanded(!expanded);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-darkblue navbar-dark py-2 position-relative">
        <div className="container justify-content-center position-relative">
          {/* Nav Links */}
          <div
            className={`collapse navbar-collapse justify-content-center ${expanded ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex gap-2 text-center">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#education", label: "Education" },
                { href: "#projects", label: "Projects" },
                { href: "#achievements", label: "Achievements" },
                { href: "#channel", label: "Channel" },
                { href: "#contact", label: "Contact" },
              ].map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <a
                    className="nav-link text-white px-3 py-2 rounded hover-bg"
                    href={item.href}
                    onClick={() => setExpanded(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Toggler Button */}
          <button
            className={`navbar-toggler border-0 position-absolute top-0 end-0 mt-2 me-3 z-3 ${expanded ? "open" : ""}`}
            type="button"
            onClick={toggleNavbar}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Header Content */}
      <header className="py-4 mb-5 border-bottom bg-darkblue">
        <div className="container">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src={yourPic}
              alt="Your Pic"
              className="rounded-circle shadow mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h1 className="text-light fw-bold mb-1">Your Name</h1>
            <p className="text-light lead mb-0">Your Occupation</p>
          </div>
        </div>
      </header>

      {/* Styles */}
      <style>{`
        .hover-bg:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transition: background-color 0.3s ease;
        }

        .hamburger {
          width: 28px;
          height: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        .hamburger span {
          height: 3px;
          background-color: white;
          border-radius: 2px;
          transition: 0.4s;
        }

        .navbar-toggler.open .hamburger span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .navbar-toggler.open .hamburger span:nth-child(2) {
          opacity: 0;
        }

        .navbar-toggler.open .hamburger span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      `}</style>
    </>
  );
}

export default Header;
