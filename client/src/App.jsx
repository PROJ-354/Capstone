import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

//Layouts
import RootLayout from './layouts/RootLayout';
import ViewChecklist from './pages/student/checklist/ViewChecklist';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<ViewChecklist />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
