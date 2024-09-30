import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="fs-6">
        Made with ❤️ by Shuveksha Tuladhar &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
