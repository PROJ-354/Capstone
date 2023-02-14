import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import ViewChecklist, {
    checklistAction,
    checklistLoader,
} from './pages/student/checklist/ViewChecklist';
// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Login />} />
            <Route
                path="/checklist/:id"
                element={<ViewChecklist />}
                loader={checklistLoader}
                action={checklistAction}
            />
            <Route path="/signup" element={<Signup />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
