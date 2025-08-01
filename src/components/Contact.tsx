function Contact() {
  return (
    <section className="mb-5 animate__animated animate__fadeInUp px-3">
      <div
        className="container py-5 px-4"
        style={{
          background: "#f8f9fa",
          borderRadius: "1rem",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 className="text-dark mb-4">Contact</h2>

        <p className="mb-4 text-muted">
          Feel free to reach out via email or WhatsApp...
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {/* Email Button */}
          <a
            href="#" 
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger btn-lg px-4 d-flex align-items-center gap-2 email-btn"
            style={{ transition: "all 0.3s ease" }}
          >
            <i className="bi bi-envelope-fill"></i> Email Me
          </a>

          {/* WhatsApp Button */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg px-4 d-flex align-items-center gap-2 whatsapp-btn"
            style={{ transition: "all 0.3s ease" }}
          >
            <i className="bi bi-whatsapp"></i> WhatsApp Me
          </a>
        </div>
      </div>

      <style>{`
        .email-btn:hover {
          background-color: #c82333 !important;
          transform: translateY(-2px) scale(1.03);
        }
        .whatsapp-btn:hover {
          background-color: #218838 !important;
          transform: translateY(-2px) scale(1.03);
        }
      `}</style>
    </section>
  );
}

export default Contact;
