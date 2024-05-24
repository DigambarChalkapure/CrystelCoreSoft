  import { Home, Profile, SignIn, SignUp } from "@/pages";

  export const routes = [
    {
      name: "home",
      path: "/home",
      element: <Home />,
    },
    {
      name: "about",
      path: "/profile",
      element: <Profile />,
    },
    {
      name: "services",
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      name: "industries",
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      name: "case studies",
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      name: "contacts",
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      name: "discuss",
      path: "/sign-up",
      element: <SignUp />,
    },
    
  ];

  export default routes;
