import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

// route protection utility
import PrivateRoute from './utility/PrivateRoute';

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
import InstructorHome, { instructorHomeLoader } from './pages/instructor/InstructorHome';
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
import RequestPreceptorEvaluation, { evaluationRequestAction, preceptorListLoader } from './pages/student/RequestPreceptorEvaluation';
import PreceptorSchedulePage from './pages/preceptor/PreceptorSchedulePage';
import InstructorSchedulePage from './pages/instructor/InstructorSchedulePage';
import PreceptorViewChecklist, {
    preceptorSaveChecklistAction,
} from './pages/preceptor/PreceptorViewChecklist';
import InstructorViewPeval, { instructorEvaluationLoader } from './pages/instructor/InstructorViewPeval';
import ViewStudentDocs, { studentDocsLoader } from './pages/instructor/ViewStudentDocs';

// import PrivateRoute from '../../server/src/utilities/PrivateRoute'; why was this here?

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
                <Route index element={<InstructorHome />} loader={instructorHomeLoader} />
                <Route path="/instructor/manageJoinCode" element={<ManageJoinCode />} />
                <Route path="/instructor/:studentId" element={<ViewStudentDocs />} loader={studentDocsLoader}/>
                <Route path="/instructor/:studentId/peval/:id" element={<InstructorViewPeval />} loader={instructorEvaluationLoader}/>
            </Route>


            {/* Preceptors */}
            <Route path="preceptor">
                <Route
                    path="home/:userId"
                    element={<PreceptorHome />}
                    loader={evalsLoader}
                />

                <Route
                    path="home/:userId/:id"
                    element={<PreceptorViewChecklist />}
                    loader={checklistLoader}
                    action={preceptorSaveChecklistAction}
                />

                {/* <Route
                    path="eval"
                    element={<PreceptorEvaluate />}
                    action={evaluateAction}
                    loader={evaluateLoader}
                /> */}

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
            <Route path="/student/schedules" element={
                <PrivateRoute roles={['student']}>
                    <ViewSchedule />
                </PrivateRoute>
            } />

            <Route path="/preceptor/schedules" element={
                <PrivateRoute roles={['preceptor']}>
                    <PreceptorSchedulePage />
                </PrivateRoute>
            } />

            <Route path="/instructor/schedules" element={
                <PrivateRoute roles={['instructor']}>
                    <InstructorSchedulePage />
                </PrivateRoute>
            } />


            {/* Student page for requesting an evaluation from a preceptor */}
             <Route
                path="requestpreceptorevaluation"
                element={<RequestPreceptorEvaluation />}
                loader={preceptorListLoader}
                action={evaluationRequestAction}
            /> 

            {/* Other Pages */}
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
