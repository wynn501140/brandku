import { useState } from "react";
import HomePage from "./pages/homePage.jsx";
import { useState } from "react";
import HomePage from "./pages/HomePage";

const MAX_CLICKS = 3;

function App() {
  const [clickCount, setClickCount] = useState(0);

  const isGone = clickCount >= MAX_CLICKS;
  const remaining = MAX_CLICKS - clickCount;

  const handleCtaClick = () => {
    if (!isGone) {
      setClickCount((c) => c + 1);
    }
  };

  const ctaLabel =
    clickCount === 0
      ? "Mulai Gratis ↗"
      : clickCount === 1
      ? `Serius nih? (${remaining - 1}x lagi)`
      : `Yakin banget? (${remaining - 1}x lagi)`;

  return (
    <HomePage
      clickCount={clickCount}
      isGone={isGone}
      ctaLabel={ctaLabel}
      handleCtaClick={handleCtaClick}
    />
  );
}

export default App;
// Untuk nambah halaman baru, import di sini dan tambahkan ke switch di bawah
// Contoh: import LoginPage from "./pages/loginPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => setCurrentPage(page);

  switch (currentPage) {
    case "home":
      return <HomePage navigate={navigate} />;
    // case "login":
    //   return <LoginPage navigate={navigate} />;
    default:
      return <HomePage navigate={navigate} />;
  }
}
