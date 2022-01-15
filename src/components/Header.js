import '../style/Header.css';

function Header() {
  return (
    <header>
      <p id={'logo'}>Logo</p>
      <span id={'right-side'}>
        <a href="/">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </span>
    </header>
  );
}

export default Header;
