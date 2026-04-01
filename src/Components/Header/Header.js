import "./Header.css";

//This is my Header

function Header() {
  return (
    <header className="header">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="header-title">MyReads</h1>
        </div>
        <p className="header-subtitle">Track your reading journey</p>
      </div>
    </header>
  );
}

export default Header;
