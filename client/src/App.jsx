import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";

import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection.jsx";
import MyLearning from "./pages/student/MyLearning.jsx";
import Courses from "./pages/student/Courses.jsx";
import Profile from "./pages/student/Profile.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./pages/Sidebar.jsx";
import CourseTable from "./pages/admin/course/CourseTable.jsx";
import AddCourse from "./pages/admin/course/AddCourse.jsx";

// Centralized application route configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my-learning",
        element: <MyLearning />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      // Admin Routes
      {
        path: "admin",
        element: <Sidebar />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
          {
            path: "course/create",
            element: <AddCourse />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
};

export default App;
