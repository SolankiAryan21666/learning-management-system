import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Courses from "./pages/student/Courses.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />,
            <Courses />
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
