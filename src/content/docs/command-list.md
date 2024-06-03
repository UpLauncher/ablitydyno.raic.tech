---
title: コマンドリスト
description: このページでは、AblityDynoのコマンドリストについてを説明します。
---

このページでは、AblityDyno のコマンドについてを説明します。

## 基本コマンド

誰でも使用できるコマンド(カテゴリー: 基本)です。

### /ping

BOTが応答している場合はPong!と返します。BOTが動作しているかチェックするときに利用してください。

### /stats

BOTが参加しているサーバー数や、メンバー数、チャンネル数などを表示します。

### /user info (target:ユーザー)

指定したユーザー(指定していない場合は自分)のユーザー情報を表示します。アカウント作成日時などです。

**オプションの説明**
```markdown
# 順番: オプション: 説明: 型

target: DiscordのユーザーID、ユーザー選択 | user
```

## マインクラフト

誰でも使用できるコマンド(カテゴリー: マインクラフト)です。

### /minecraft info target:文字

指定したユーザーの基本的な情報を表示します。

**オプションの説明**
```markdown
# 順番: オプション: 説明: 型

target: マインクラフトのユーザー名(MCID) | string
```

### /minecraft images target:文字

指定したユーザーの体や頭の画像を表示します。

**オプションの説明**
```markdown
# 順番: オプション: 説明: 型

target: マインクラフトのユーザー名(MCID) | string
```

### /minecraft cape target:文字

指定したユーザーのマントを表示します。(近日登場予定)

**オプションの説明**
```markdown
# 順番: オプション: 説明: 型

target: マインクラフトのユーザー名(MCID) | string
```


## サーバー管理者向け
### /ban target:ユーザー (reason:文字)

:::note
バージョン 1.1 から、このコマンドを"/user ban"に変更します。バージョン 1.1の変更で戸惑わないようにしましょう。
:::

指定したユーザーをサーバーからBANします。reasonオプション(任意)で理由を追加できます。

**オプションの説明**
```markdown
# 順番: オプション: 説明: 型

target: DiscordのユーザーID、ユーザー選択 | user
```

## /kick target:ユーザー

:::note
バージョン 1.1 から、このコマンドを"/user kick"に変更します。バージョン 1.1の変更で戸惑わないようにしましょう。
:::

指定したユーザーをサーバーからキックします。

**オプションの説明**
```markdown
# 順番: オプション: 説明: 型

target: DiscordのユーザーID、ユーザー選択 | user
```

## /pardon target:ユーザー

:::note
バージョン 1.1 から、このコマンドを"/user pardon"に変更します。バージョン 1.1の変更で戸惑わないようにしましょう。
:::

指定したユーザーのBANを解除します。

**オプションの説明**
```markdown
# 順番: オプション: 説明: 型

target: DiscordのユーザーID、ユーザー選択 | user
```