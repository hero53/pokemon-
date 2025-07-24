export default function Footer() {
  return (
    <footer className=" d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark text-light">
      <p className="col-md-4 mb-0 text-light">
        &copy; 2025 Company, Inc
      </p>

      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none"
        aria-label="Bootstrap"
      >
        <svg className="bi me-2" width="40" height="32" aria-hidden="true">
          <use href="#bootstrap"></use>
        </svg>
      </a>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-light">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-light">Princing</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-light">Contact</a>
        </li>      
      </ul>
    </footer>
  );
}
