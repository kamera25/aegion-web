import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UserPage from './UserPage';
import Header from './header';
import Footer from './footer';
import type { CSSProperties } from 'react';
import ModalImage from './ModalImage';


function Home() {
  return (
    <header className="App-header">
      <h1>Aegion</h1>
      <p>これは 見えざる者 と 見える者 による戦いの物語</p>
    </header>
  );
}

function About() {
  return (
    <Container className="my-5">
<section>
  <h2><strong>Aegion - エイジオン</strong></h2>
  <h3>A TACTICAL AR BOAD GAME</h3>

  <h4>🧩 プレイ人数：</h4>
  <p>2〜4人（協力プレイ）</p>

  <h4>⏱ 所要時間：</h4>
  <p>1プレイ 約10分</p>

  <h4>📦 Aegionスターターキット 内容物(頒布品)：</h4>
  <ul>
    <li>ボスカード × 5枚</li>
    <li>マスカード × 40枚</li>
    <li>サイコロ × 2個</li>
    <li>兵士コマ × 3個</li>
    <li>神器コマ(守護者・ランダム封入) × 1個</li>
    <li>ストーリー・マニュアルカード x 各1枚</li>
  </ul>
  <h4>🙏 ご準備いただくもの：</h4>
  <ul>
    <li>ARゲームマット × 1枚 (A3 2枚/本サイトで配布中)</li>
  </ul>
  <h4>‼️ 別途お買い求めが必要な物：</h4>
  <ul>
    <li>XREAL Air 2 Ultra（ARグラス）- XREAL One や XREAL One Proでは動作しません。</li>
    <li>XREAL Air 2 Ultra が動作するスマートフォン - <a href='https://jp.shop.xreal.com/products/xreal-air-2-ultra'>こちら</a> をご確認ください</li>   
  </ul>
</section>

    <img 
      src={`${process.env.PUBLIC_URL}/starterpack.jpg`} 
      alt='スターターパックの画像'
    />

    </Container>
  );
}

function Story() {
  return (
    <Container className="my-5">
      <h2>ストーリー</h2>
      <p>遥か昔、人の目には映らぬ“異界”を見通し、巨悪を封じていた存在──それが“守護者”たちだった。</p>
      <p>──永き月日は経ち、地は裂け、忘却の彼方に封じられていた五つの“巨悪”──それぞれ異なる異能と意志を持つ"理"が、再び現世に侵攻を始めたのだ。</p>

      <p>しかし、その目覚めに呼応するように、"選ばれし戦士たち"が現れる。</p>

      <p>“不可視の戦場”で人知れず戦いは始まっている。彼らだけに見える"理"。彼らだけが踏み入れることのできる戦場。</p>

      <h4>これは、世界が気づかぬまま終わりへ向かう中での、“見えざる戦士たち”の物語。</h4>
    </Container>
  );
}

function HowToPlay() {
  return (
    <Container className="my-5">
      <h2>遊び方</h2>
      <p>以下、遊び方マニュアルをご確認ください。</p>
      <ModalImage
        src={`${process.env.PUBLIC_URL}/HowToPlay.png`}
            width={350}
            height={250}
            className="d-inline-block align-top"
            alt="遊び方"
      />

    </Container>
  );
}

function Gallery() {
  return (
    <Container className="my-5">
      <h2>ギャラリー</h2>
      <p>このゲームのコンセプトアートをご紹介します！</p>
      <ThumbnailGallery />
    </Container>
  );
}

function News() {
  return (
    <Container className="my-5">
      <h2>ニュース</h2>
      <p>2025年6月29日(日) : <a href='https://asokuro.com/gamemarche-3/'>第4回 たちまちゲームマルシェ</a> に本ゲームを出展します！</p>
    </Container>
  );
}

function AppHome() {
  return (
      <div className="App">
        <Header />

        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="story">
          <Story />
        </div>
        <div id="how-to-play">
          <HowToPlay />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="news">
          <News />
        </div>

        <Footer />
      </div>
    );
}


const galleryStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
};

const thumbnailStyle: CSSProperties = {
  width: '170px',
  height: '170px',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
};

const modalOverlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalImageStyle: CSSProperties = {
  maxWidth: '90%',
  maxHeight: '90%',
  borderRadius: '12px',
};

const ThumbnailGallery = () => {
  const thumbnails = [
    `${process.env.PUBLIC_URL}/gallery/01.png`,
    `${process.env.PUBLIC_URL}/gallery/02.png`,
    `${process.env.PUBLIC_URL}/gallery/03.png`,
    // 必要に応じて追加
  ];


  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div style={galleryStyle}>
        {thumbnails.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index}`}
            style={thumbnailStyle}
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div style={modalOverlayStyle} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="拡大画像" style={modalImageStyle} />
        </div>
      )}
    </>
  );
}




function App() {
  return (
    <HashRouter>
       <Routes>
           <Route path="/" element={<AppHome />} />
           <Route path="/userpage" element={<UserPage />} />
       </Routes>
    </HashRouter>
  );
}




export default App;