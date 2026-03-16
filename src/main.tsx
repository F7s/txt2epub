import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";

// 防止缩放 - PWA 优化
function preventZoom() {
  // 阻止双击缩放
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // 阻止双指缩放
  document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
  });

  // 阻止键盘缩放 (Ctrl + +/-)
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=')) {
      event.preventDefault();
    }
  });

  // 阻止鼠标滚轮缩放 (Ctrl + 滚轮)
  document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  }, { passive: false });

  // 阻止右键菜单中的缩放选项
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
}

// 在 DOM 加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', preventZoom);
} else {
  preventZoom();
}

// 注册 PWA service worker
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('ServiceWorker 注册成功: ', registration.scope);
      },
      (err) => {
        console.log('ServiceWorker 注册失败: ', err);
      }
    );
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>
);
