import { Navigate, useRoutes } from "react-router-dom";
import { 
    CRMPage, KanbanPage, LayoutPage, LoginPage, SignUpPage, 
    ScriptBuilderPage, DashboardPage 
} from "./elements";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: (
                <LayoutPage />
            ),
            children: [
                // { element: <Navigate to={ } replace />, index: true },
                {
                    path: 'login',
                    element: (
                        <LoginPage />
                    ),
                },
                {
                    path: 'signup',
                    element: (
                        <SignUpPage />
                    ),
                },
                {
                    path: 'crm',
                    element: (
                        <CRMPage />
                    ),
                },
                {
                    path: 'kanban',
                    element: (
                        <KanbanPage />
                    ),
                },
                {
                    path: 'builder',
                    element: (
                        <ScriptBuilderPage />
                    ),
                },
                {
                    path: 'dashboard',
                    element: (
                        <DashboardPage />
                    ),
                },
            ]
        }
    ])
}