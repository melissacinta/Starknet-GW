import React from "react"
import DashboardPage from "../pages/dashboardPages/Dashboard"

interface Routes{
    path: string
    element: React.ReactNode
}

export const dashboardRoutes: Routes[] = [
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },
    // Add more routes here
    // Example:
    // {
    //     path: "/dashboard/settings",
    //     element: <DashboardSettings />,
    // },
]
