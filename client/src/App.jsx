import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
