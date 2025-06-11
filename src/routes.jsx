import App from "./App";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "profile/:name",
      // The colon (:) turns the path section after it into a “dynamic segment”. 
      // These can also be called “URL params” or “params” in short. 
    element: <Profile />,
    // children: [
    //   { index: true, element: <DefaultProfile /> },
    //   { path: "spinach", element: <Spinach /> },
    //   { path: "popeye", element: <Popeye /> },
    // ]
  },
];

export default routes;