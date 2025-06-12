import App from "./App";
import Profile from "./components/Profile";
import Help from "./components/HelpSection";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "help",
    element: <Help />
  },
  {
    path: "profile/:name",
      // The colon (:) turns the path section after it into a “dynamic segment”. 
      // These can also be called “URL params” or “params” in short. 
    element: <Profile />,
    //OTHER WAY OF DOING IT WITH OUTLET:
    // children: [
    //   { index: true, element: <DefaultProfile /> },
    //   { path: "spinach", element: <Spinach /> },
    //   { path: "popeye", element: <Popeye /> },
    // ]
  },
];

export default routes;