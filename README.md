# 🧘 FOCUS QUEST

```text
    ______                               ____                       __ 
   / ____/____   _____ _   __ _____     / __ \ __  __ ___   _____ / /_
  / /_   / __ \ / ___/| | / // ___/    / / / // / / // _ \ / ___// __/
 / __/  / /_/ // /__  | |/ /(__  )    / /_/ // /_/ //  __/(__  )/ /_  
/_/     \____/ \___/  |___//____/     \___\_\\__,_/ \___//____/ \__/  
```

<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**"Turn your deep work into a legendary adventure."**
将你的深思熟虑化为一场传奇冒险。

[Installation](#installation) • [Usage](#usage) • [Features](#features) • [Tech Stack](#tech-stack)

</div>

---

## ⚡ What is FocusQuest?

**FocusQuest** 不仅仅是一个番茄钟。它是一个将“深度工作” (Deep Work) 与 RPG 元素结合的生产力工具。你的每一次专注都是在为你的英雄（比如 Merlin）积攒能量。

**一键开启冒险，让专注不再枯燥。**

## 🚀 Features

- **🧘 Deep Work Gamification**: 将枯燥的计时器转化为英雄的“冒险”倒计时。
- **🍅 RPG-Themed Pomodoro**: 默认 25 分钟专注周期，支持灵活的“继续/暂停”控制。
- **⚡ Lightning Fast Stack**: 基于 Vite + React 19 + Tailwind v4 构建的极致前端体验。
- **🛡️ Merlin-Approved Status**: 实时监控后端健康状态，确保你的“冒险”永不掉线。

## 📦 Installation

### 1. 克隆项目
```bash
git clone https://github.com/SaintFore/FocusQuest.git
cd FocusQuest
```

### 2. 启动后端 (Python 3.10+)
```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

### 3. 启动前端 (Node.js 18+)
```bash
cd frontend
pnpm install
pnpm dev
```

## 💻 Usage

1.  **准备阶段**: 确保后端运行在 `localhost:8000`。
2.  **开启冒险**: 在前端点击 **"Start Adventure"**。
3.  **专注时刻**: 观察倒计时，在 Merlin 的注视下完成你的任务。
4.  **状态查看**: 顶部会实时显示 `Server status: merlin`，代表你的魔法加持已生效。

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS 4.
- **Backend**: Python, FastAPI.
- **Design**: Minimalist Dark Mode.

---

<div align="center">
Created with ⚔️ by <a href="https://github.com/SaintFore">SaintFore</a>
</div>
