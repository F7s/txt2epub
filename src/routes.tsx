import { lazy, Suspense, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const Converter = lazy(() => import('./pages/Converter'));
const History = lazy(() => import('./pages/History'));

function RouteFallback() {
  return (
    <div className="container py-10 text-sm text-muted-foreground">
      正在加载页面...
    </div>
  );
}

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '首页',
    path: '/',
    element: <Navigate to="/converter" replace />,
    visible: false
  },
  {
    name: '文件转换',
    path: '/converter',
    element: (
      <Suspense fallback={<RouteFallback />}>
        <Converter />
      </Suspense>
    ),
    visible: true
  },
  {
    name: '转换历史',
    path: '/history',
    element: (
      <Suspense fallback={<RouteFallback />}>
        <History />
      </Suspense>
    ),
    visible: true
  }
];

export default routes;
