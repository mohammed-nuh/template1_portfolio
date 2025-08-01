function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="mb-3">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <i className="bi bi-linkedin fs-4"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <i className="bi bi-youtube fs-4"></i>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <i className="bi bi-twitter-x fs-4"></i>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <i className="bi bi-facebook fs-4"></i>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <i className="bi bi-instagram fs-4"></i>
        </a>
      </div>
      <p className="mb-0">&copy; 2025 Your Name</p>
    </footer>
  );
}

export default Footer;
