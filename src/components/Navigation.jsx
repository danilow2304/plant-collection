function Navigation({ title, links }) {
  return (
    <header className="navbar">
      <h1>{title}</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
