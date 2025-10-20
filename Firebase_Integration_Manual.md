
# 既存のFirebaseプロジェクトに新規プロジェクトを接続する手順

このマニュアルは、既存のFirebaseプロジェクト（データベース、認証など）に、新しいReactプロジェクト（Viteを使用）を接続するための手順を説明します。

## 前提条件

-   Node.jsがインストールされていること。
-   Viteで新しいReactプロジェクトが作成済みであること。
-   接続したいFirebaseプロジェクトへのアクセス権があること。

---

## ステップ1: Firebaseライブラリのインストール

まず、新しいReactプロジェクトにFirebaseのクライアントライブラリをインストールします。プロジェクトのルートディレクトリで以下のコマンドを実行してください。

```bash
npm install firebase
```

---

## ステップ2: Firebase設定ファイルの作成

次に、Firebaseの初期化と設定を行うファイルを作成します。

1.  **ファイルの作成**:
    プロジェクトの `src` フォルダ内に `firebase.js` という名前でファイルを作成します。

    ```
    my-new-project/
    └── src/
        └── firebase.js  <-- これを作成
    ```

2.  **ファイルの内容**:
    作成した `src/firebase.js` に以下のコードをコピー＆ペーストします。これは`InkNest`プロジェクトで使われているものと同じ構成です。

    ```javascript
    // src/firebase.js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";
    // 必要に応じて他のFirebaseサービスをインポート (e.g., getStorage)

    // Firebase configuration
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Export services for use in other components
    export const auth = getAuth(app);
    export const db = getFirestore(app);

    export default app;
    ```

---

## ステップ3: 環境変数の設定（ローカル開発用）

FirebaseのAPIキーなどを直接コードに書き込むのは危険です。環境変数を使って管理します。

1.  **`.env.local`ファイルの作成**:
    プロジェクトの**ルートディレクトリ**（`package.json`と同じ階層）に `.env.local` という名前のファイルを作成します。

2.  **環境変数の記述**:
    `.env.local` ファイルに、あなたのFirebaseプロジェクトの情報を記述します。キーの名前は `VITE_` で始める必要があります。

    ```env
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    VITE_FIREBASE_APP_ID="YOUR_APP_ID"
    VITE_FIREBASE_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"
    ```
    **注**: `"YOUR_..."` の部分は、ご自身のFirebaseプロジェクトの設定値に置き換えてください。これらの値は[Firebaseコンソール](https://console.firebase.google.com/) > プロジェクトを選択 > プロジェクトの設定 (歯車アイコン) > 全般 タブの「マイアプリ」セクションで確認できます。

3.  **`.gitignore`への追加**:
    作成した `.env.local` ファイルは機密情報を含むため、Gitリポジトリに含めないようにします。プロジェクトの `.gitignore` ファイルに以下の1行を追加してください。

    ```
    .env.local
    ```

---

## ステップ4: Vercelでの環境変数設定

ローカル開発と同様に、Vercelでホスティングする際も環境変数を設定する必要があります。

1.  Vercelにログインし、対象のプロジェクトを選択します。
2.  プロジェクトページの **Settings** タブに移動します。
3.  サイドメニューから **Environment Variables** を選択します。
4.  ローカルの `.env.local` に設定したキーと値を一つずつ登録します。
    -   **KEY**: `VITE_FIREBASE_API_KEY`
    -   **VALUE**: `YOUR_API_KEY`
    -   ...というように、すべてのキーと値を設定します。
5.  設定を保存すると、Vercelのビルドプロセスでこれらの変数が使われるようになります。

---

## ステップ5: アプリケーションでの利用

設定が完了すれば、アプリケーションのコンポーネントからFirebaseのサービスをインポートして利用できます。

**例: `App.jsx` でFirestoreのデータを取得する**

```jsx
import React, { useEffect } from 'react';
import { db } from './firebase'; // 作成した設定ファイルをインポート
import { collection, getDocs } from 'firebase/firestore';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users")); // "users"コレクションの例
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>My New Firebase App</h1>
      <p>Check the console for Firestore data.</p>
    </div>
  );
}

export default App;
```

これで、新しいプロジェクトから既存のFirebaseバックエンドを利用する準備が整いました。
