import { createBrowserRouter, useRouteError } from "react-router-dom"
import { Post } from "./components/Post"
import App from "./App"

const ErrorBoundary = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <h2>{error.statusText}</h2>
            <h3>{error.error.message}</h3>
            <h3>No existe la pagina web</h3>
        </div>
    );

}

const ClientBondary = () => {
    return <h1>CLIENTS</h1>
}

const GroupBondary = () => {
    return <h1>GROUPS</h1>
}

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: '/post',
                element: <Post />                
            },
            {
                path: '/clients',
                element: <ClientBondary />                
            },
            {
                path: '/groups',
                element: <GroupBondary />                
            }
        ]
    }
])