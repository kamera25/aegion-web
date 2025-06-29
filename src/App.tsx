import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UserPage from './UserPage';
import Header from './header';

function Home() {
  return (
    <header className="App-header">
      <h1>Aegion</h1>
      <p>これは 見えざる者 と 見える者 との戦いも物語</p>
    </header>
  );
}

function About() {
  return (
    <Container className="my-5">
<section>
  <h2><strong>Aegion - エイジオン</strong></h2>
  <p>A TACTICAL AR BOAD GAME</p>

  <h4>🧩 プレイ人数：</h4>
  <p>2〜4人（協力プレイ）</p>

  <h4>⏱ 所要時間：</h4>
  <p>1プレイ 約40〜60分</p>

  <h4>📦 内容物：</h4>
  <ul>
    <li>ボスカード × 5枚</li>
    <li>マスカード × 60枚（攻撃／防御／特殊カード含む）</li>
    <li>サイコロ × 2個</li>
    <li>ゲームマット × 1枚</li>
    <li>Xreal Ultra（ARグラス）※別売となります。</li>
  </ul>
</section>

    </Container>
  );
}

function Story() {
  return (
    <Container className="my-5">
      <h2>ストーリー</h2>
      <p>遥か昔、人の目には映らぬ“異界”を見通し、巨悪を封じていた存在──それが“守護者”たちだった。</p>
      <p>──永き月日は経ち、地は裂け、忘却の彼方に封じられていた五つの“巨悪”──それぞれ異なる異能と意志を持つ”ソレ”が、再び現世に侵攻を始めたのだ。</p>

      <p>しかし、その目覚めに呼応するように、選ばれし者たちが現れる。</p>

      <p>現代の裏側に潜む“不可視の戦場”で人知れず戦いは始まっている。彼らだけに見える敵。彼らだけが踏み入れることのできる戦場。</p>

      <h4>これは、世界が気づかぬまま終わりへ向かう世界での、“見えざる戦士たち”の物語。</h4>
    </Container>
  );
}

function HowToPlay() {
  return (
    <Container className="my-5">
      <h2>遊び方</h2>
      <p>以下のガイドブックでご確認ください。(製品版にはガイドブックが同梱されています)</p>
      <a href={`${process.env.PUBLIC_URL}/HowToPlay.png`}>
        <img
          src={`${process.env.PUBLIC_URL}/HowToPlay.png`}
          width="350"
          height="250"
          className="d-inline-block align-top"
          alt="Aegion"
        />
      </a>
    </Container>
  );
}

function Gallery() {
  return (
    <Container className="my-5">
      <h2>ギャラリー</h2>
      <p>このゲームのコンセプトアートをご紹介します</p>
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

      </div>
    );
}

function App() {
  return (
       <Routes>
           <Route path="/" element={<AppHome />} />
           <Route path="/userpage" element={<UserPage />} />
       </Routes>
  );
}

export default App;