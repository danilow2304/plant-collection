function Footer({ text }) {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {text}. Built with React.</p>
    </footer>
  );
}

export default Footer;
