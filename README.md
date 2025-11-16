# 掲示板サイト

Flaskで作成したシンプルな掲示板アプリケーション

## 機能

- スレッド作成
- スレッド一覧表示
- 記事投稿
- 投稿完了メッセージ表示

## 技術スタック

- Python 3
- Flask
- SQLAlchemy
- Bootstrap 4

## セットアップ

1. 依存パッケージをインストール
```bash
pip install -r requirements.txt
```

2. サーバーを起動
```bash
python3 app.py
```

3. ブラウザでアクセス
```
http://localhost:5000
```

## データベース

- デフォルト: SQLite (`test.db`)
- 本番環境: PostgreSQL対応（環境変数`DATABASE_URL`で設定）