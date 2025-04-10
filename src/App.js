import React from "react";
import Dock from "./components/Dock";
import "./App.css";

// セクションへスムーズスクロールするためのヘルパー関数
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function App() {
  // Dock の各アイテム（アイコンは絵文字を利用していますが、実際は SVG などのアイコンに差し替えても良いです）
  const dockItems = [
    {
      label: "ホーム",
      icon: <span role="img" aria-label="home">🏠</span>,
      onClick: () => scrollToSection("home"),
    },
    {
      label: "製品紹介",
      icon: <span role="img" aria-label="product">🌱</span>,
      onClick: () => scrollToSection("product"),
    },
    {
      label: "特徴",
      icon: <span role="img" aria-label="features">✨</span>,
      onClick: () => scrollToSection("features"),
    },
    {
      label: "購入",
      icon: <span role="img" aria-label="purchase">🛒</span>,
      onClick: () =>
        window.open("https://sales.example.com", "_blank"), // ※実際の販売サイト URL に差し替えてください
    },
  ];

  return (
    <div className="App">
      <section id="home" className="section home">
        <h1>3Dプリンターで実現した革新的水耕栽培容器</h1>
        <p>
          高いデザイン性と使いやすさを兼ね備えた水耕栽培容器。最新の3Dプリンティング技術で製造され、室内でも安心して水耕栽培が楽しめます。
        </p>
      </section>

      <section id="product" className="section product">
        <h2>製品紹介</h2>
        <p>
          当製品は、精密な3Dプリンターを用いて製作され、従来の水耕栽培容器にはなかったエレガントなデザインと直感的な操作性を実現しました。高品質な素材を採用しており、清掃やメンテナンスがしやすい点も魅力です。
        </p>
      </section>

      <section id="features" className="section features">
        <h2>特徴</h2>
        <ul>
          <li>美しいデザインと直感的操作</li>
          <li>革新的な3Dプリンティング技術採用</li>
          <li>環境に配慮した素材の使用</li>
          <li>室内での安全・快適な水耕栽培環境</li>
        </ul>
      </section>

      {/* ページ下部または適宜 Dock を配置 */}
      <Dock items={dockItems} />
    </div>
  );
}

export default App;
