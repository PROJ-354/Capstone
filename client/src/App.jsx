import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';

//Checklist Pages, Actions, & Loaders
import ViewChecklist, {
    saveChecklistAction,
    checklistLoader,
} from './pages/student/checklist/ViewChecklist';
import ViewAllChecklists, {
    viewAllChecklistsLoader,
} from './pages/student/checklist/ViewAllChecklists';

//Preceptor Pages, Actions & Loaders
import PreceptorHome, { evalsLoader } from './pages/preceptor/PreceptorHome';
import PreceptorEvaluate, {
    evaluateAction,
    evaluateLoader,
} from './pages/preceptor/PreceptorEvaluate';
import ViewEvaluation, {
    editEvaluationAction,
    viewEvaluationLoader,
} from './pages/preceptor/ViewEvaluation';

//Instructor Pages
import InstructorHome from './pages/instructor/InstructorHome';
import ManageJoinCode from './pages/instructor/ManageJoinCode';

//Admin Pages
import AdminHome from './pages/admin/AdminHome';
import AdminManageJoinCode from './pages/admin/AdminManageJoinCode';

//Schedule Pages, Actions & Loaders
import ViewSchedule from './pages/student/schedule/ViewSchedule';

//Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Request from './pages/Request';
import Reset from './pages/Reset';

//Other Pages
import NotFound from './pages/NotFound';
import PreceptorSchedulePage from './pages/preceptor/PreceptorSchedulePage';
import InstructorSchedulePage from './pages/instructor/InstructorSchedulePage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {/* Authentication */}
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/request" element={<Request />} />
            <Route path="/reset/:id" element={<Reset />} />

            {/* Checklists */}
            <Route path="checklist">
                <Route
                    index
                    element={<ViewAllChecklists />}
                    loader={viewAllChecklistsLoader}
                />
                <Route
                    path=":id"
                    element={<ViewChecklist />}
                    loader={checklistLoader}
                    action={saveChecklistAction}
                />
            </Route>

            {/* Admins */}
            <Route path="/admin">
                <Route index element={<AdminHome />} />
                <Route path="/admin/manageJoinCode" element={<AdminManageJoinCode />} />
            </Route>

            {/* Instructors */}
            <Route path="/instructor">
                <Route index element={<InstructorHome />} />
                <Route path="/instructor/manageJoinCode" element={<ManageJoinCode />} />
            </Route>

            {/* Preceptors */}
            <Route path="preceptor">
                <Route
                    path="home/:userId"
                    element={<PreceptorHome />}
                    loader={evalsLoader}
                />

                <Route
                    path="eval"
                    element={<PreceptorEvaluate />}
                    action={evaluateAction}
                    loader={evaluateLoader}
                />

                {/* <Route 
                path="checklist/:checklistId" 
                element={< PreceptorChecklist/>}
                action={checklistAction}
                loader={checklistLoader}
                /> */}

                <Route
                    path=":evalId"
                    element={<ViewEvaluation />}
                    action={editEvaluationAction}
                    loader={viewEvaluationLoader}
                />
            </Route>

            {/* Schedules */}
            <Route path="/student/schedules" element={<ViewSchedule />} />
            <Route path="/preceptor/schedules" element={<PreceptorSchedulePage />} />
            <Route path="/instructor/schedules" element={<InstructorSchedulePage />} />

            {/* Student page for requesting an evaluation from a preceptor */}
            {/* <Route
                path="requestpreceptorevaluation"
                element={<RequestPreceptorEvaluation />}
                loader={preceptorListLoader}
                action={evaluationRequestAction}
            /> */}

            {/* Other Pages */}
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
