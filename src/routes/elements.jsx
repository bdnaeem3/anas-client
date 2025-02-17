import { Suspense, lazy } from "react"
import { Triangle } from "react-loader-spinner"


const Loadable = (Component) => (props) =>
(
  <Suspense fallback={
    <div className="flex justify-items-center content-center">
      <Triangle />
    </div>
  }>
    <Component {...props} />
  </Suspense>
);

export const LayoutPage = Loadable(lazy(() => import('../layout/Layout')))
export const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')))
export const SignUpPage = Loadable(lazy(() => import('../pages/SignUpPage')))
export const CRMPage = Loadable(lazy(() => import('../pages/CRMPage')))
export const KanbanPage = Loadable(lazy(() => import('../pages/KanbanPage')))
export const ScriptBuilderPage = Loadable(lazy(() => import('../pages/ScriptBuilder')))
export const DashboardPage = Loadable(lazy(() => import('../pages/Dashboard')))