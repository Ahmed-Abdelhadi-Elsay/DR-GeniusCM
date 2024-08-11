import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layout/MainLayout";
import ClassesComponentOne from "./Component/ClassesComponentOne";
import ClassesComponentTwo from "./Component/ClassComponentTwo";
import ClassesComponentThree from "./Component/ClassComponentThree";
import QuizPage from "./Pages/QuizPage";
import ResultPage from "./Pages/ResultPage";
import NotFoundpage from "./Pages/NotFoundPage";
import GoodStudent from "./Component/GoodStudent";
import SignUpPage from "./Pages/SignUpPage"; // استخدام SignUpPage كصفحة تسجيل الدخول

const isAuthenticated = () => {
    return sessionStorage.getItem('isLoggedIn') === 'true';
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={isAuthenticated() ? <Navigate to="/home" /> : <Navigate to="/signup" />} />
            <Route path="/signup" element={!isAuthenticated() ? <SignUpPage /> : <Navigate to="/home" />} />
            <Route path="/home" element={isAuthenticated() ? <HomePage /> : <Navigate to="/signup" />} />
            <Route path="/classOne" element={isAuthenticated() ? <ClassesComponentOne /> : <Navigate to="/signup" />} />
            <Route path="/classTwo" element={isAuthenticated() ? <ClassesComponentTwo /> : <Navigate to="/signup" />} />
            <Route path="/classThree" element={isAuthenticated() ? <ClassesComponentThree /> : <Navigate to="/signup" />} />
            <Route path="/quiz" element={isAuthenticated() ? <QuizPage /> : <Navigate to="/signup" />} />
            <Route path="/goodStudent" element={isAuthenticated() ? <GoodStudent /> : <Navigate to="/signup" />} />
            <Route path="/result" element={isAuthenticated() ? <ResultPage /> : <Navigate to="/signup" />} />
            <Route path="*" element={<NotFoundpage />} />
        </Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
