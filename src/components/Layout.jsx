export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">🐱 냥이의 댄스 파티</h1>
        <p className="subtitle">클릭해서 댄스를 시작하세요!</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>Made with ❤️ and React</p>
      </footer>
    </div>
  );
}
