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
import ViewSchedule from './pages/student/schedule/ViewSchedule';

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

            <Route path='/student/schedules' element={<ViewSchedule/>}/>
            <Route path='/preceptor/schedules' element={<ViewSchedule/>}/>
            <Route path='/instructors/schedules' element={<ViewSchedule/>}/>
<<<<<<< HEAD
=======

>>>>>>> 87c3b9fdbb54f2fb9edc7b95b43b7888e2b38aa5
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
