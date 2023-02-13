import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path='/' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
