export default function FooterSection({ text }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{text}</p>
        <span>About us, with love.</span>
      </div>
    </footer>
  );
}
