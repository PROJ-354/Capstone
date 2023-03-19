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
import Request from './pages/Request';
import Reset from './pages/Reset';
import NotFound from './pages/NotFound';

//Preceptor Pages
import PreceptorHome from './pages/preceptor/PreceptorHome';
import PreceptorEvaluate from './pages/preceptor/PreceptorEvaluate';
import ViewEvaluation from './pages/preceptor/ViewEvaluation';

//Preceptor Actions/Loaders
import { evaluateAction, evaluateLoader } from './pages/preceptor/PreceptorEvaluate';
import {
    editEvaluationAction,
    viewEvaluationLoader,
} from './pages/preceptor/ViewEvaluation';
import { evalsLoader } from './pages/preceptor/PreceptorHome';
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
            <Route path="/request" element={<Request />} />
            <Route path="/reset/:id" element={<Reset />} />
            <Route path="/preceptor">
                <Route index element={<PreceptorHome />} loader={evalsLoader} />
                <Route
                    path="eval"
                    element={<PreceptorEvaluate />}
                    action={evaluateAction}
                    loader={evaluateLoader}
                />
                <Route
                    path=":evalId"
                    element={<ViewEvaluation />}
                    action={editEvaluationAction}
                    loader={viewEvaluationLoader}
                />
            </Route>
            <Route path="/student/schedules" element={<ViewSchedule />} />
            <Route path="/preceptor/schedules" element={<ViewSchedule />} />
            <Route path="/instructors/schedules" element={<ViewSchedule />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
