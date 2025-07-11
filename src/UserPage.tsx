import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './header';
import Footer from './footer';
import ModalImage from './ModalImage';

function AppDownload() {
  return (
    <Container className="my-5">
      <h2>アプリのダウンロード</h2>
      <p>アプリのダウンロードは、以下のリンクからどうぞ。</p>
      <p>最終更新日: 2025年7月13日</p>

      <button className="download-button"
        onClick={() => {
          window.location.href = "https://drive.google.com/drive/folders/1g_BAW973Z73qcZMdjj2I8iLDhk9jTbDg?usp=share_link";
        }}
      >
        <img
              src={`${process.env.PUBLIC_URL}/download.svg`}
              width="30"
              height="30"
              alt="アプリケーションをダウンロードする"
            />
            ダウンロードをする
      </button>
            
    </Container>
  );
}

function AppRestrict() {
  return (
    <Container className="my-5">
      <h2>アプリの利用について</h2>
      <ul>        
        <li><p>このアプリは XREAL Air 2 Ultra と、「開発互換性」のある Android 端末でのみ動作します。<a href='https://developer.xreal.com/?lang=ja'>こちらをご参照ください。</a></p></li>
        <li><p>利用するにあたって、Xreal社が提供する <a href='https://developer.xreal.com/download'>Control Glasses 1.1.0 アプリ</a> のインストールも必要です。</p></li>
        <li><p>インストールするにあたってAndroid は開発者モードに設定しておく必要があります。<a href='https://developer.android.com/studio/debug/dev-options'>こちらの手順</a>に従ってください。</p></li>
        <li><p>Apple iPhoneでは動作しません。</p></li>
        <li><p>本アプリは予告なく動作を変更する可能性があります。</p></li>
        <li><p>本アプリの使用に伴う「いかなる損害」につきましても、当方は責任を負いかねますので、ご了承の上ご利用ください。</p></li>
      </ul>
    </Container>
  );
}

function AppUpdateInfo() {
  return (
    <Container className="my-5">
      <h2>アプリの修正履歴</h2>
      <p>2025年7月13日 : 最初のバージョンの公開を行いました</p>
    </Container>
  );
}

function GameMat() {
  return (
    <Container className="my-5">
      <h2>ゲームマット</h2>
      <ModalImage
        src={`${process.env.PUBLIC_URL}/PlayMatA2_2.png`}
            width={350}
            height={250}
            className="d-inline-block align-top"
            alt="遊び方"
      />
      <p>ゲームマットは以下のページからダウンロードできます。(外部サイトに飛びます)</p>
      <button 
          className="download-button"
          onClick={() => {
          window.location.href = "https://drive.google.com/drive/folders/1g_BAW973Z73qcZMdjj2I8iLDhk9jTbDg?usp=share_link";
      }}>
        <img
              src={`${process.env.PUBLIC_URL}/download.svg`}
              width="30"
              height="30"
              alt="ゲームマットをダウンロードする"
            />
            ダウンロードをする
      </button>
    </Container>
  );
}


function UserPage() {
  return (
    <Container className="my-5">
      <h2>ユーザサポート</h2>
      <section>
        <p>このページはご購入者向けの情報を記載します。</p>
      </section>

    </Container>
  );
}

function Support() {
  return (
    <Container className="my-5">
      <h2>お問合せ先</h2>
      <section>
        <p>本製品に関するお問い合わせは、FacebookからDMによるお問い合わせください。</p>
        <h4>
          <a href='https://www.facebook.com/hiroshimaunity/'>
                <img
              src={`${process.env.PUBLIC_URL}/facebook.svg`}
              width="30"
              height="30"
              alt="アプリケーションをダウンロードする"
            />
            &nbsp;
            広島Unity勉強会 Facebookページ
          </a>
        </h4>
      </section>

    </Container>
  );
}

function UserPageApp() {
  return (
      <div className="App">
        <Header />

        <div id="userpage">
          <UserPage />
        </div>

        <div id="appdownload">
          <AppDownload />
        </div>

        <div id="apprestrict">
          <AppRestrict />
        </div>

        <div id="update">
          <AppUpdateInfo />
        </div>

        <div id="gamemat">
          <GameMat />
        </div>

        <div id="support">
          <Support />
        </div>

        <Footer />
      </div>
 );
}

export default UserPageApp;
