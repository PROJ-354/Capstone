import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

//Layouts
import RootLayout from './layouts/RootLayout';
import ViewChecklist, {
    checklistAction,
    checklistLoader,
} from './pages/student/checklist/ViewChecklist';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<ViewChecklist />} />
            <Route
                path=":id"
                element={<ViewChecklist />}
                loader={checklistLoader}
                action={checklistAction}
            />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
