import { useState } from "react";
import HomePage from "./pages/homePage.jsx";

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
