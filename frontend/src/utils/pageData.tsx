import { IRouterType } from '../types/types';
import { lazy } from "react";

const Layout = lazy(() => import("../components/Layout"));
const Home = lazy(() => import("../pages/Feed"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const VideoDetail = lazy(() => import("../pages/VideoDetail"));
const ChannelDetail = lazy(() => import("../pages/ChannelDetail"));
const SearchFeed = lazy(() => import("../pages/SearchFeed"));

export const PAGE_DATA: IRouterType[] = [
  {
    title: 'Login',
    path: "/login",
    element: <Login />
  },
  {
    title: 'Signup',
    path: "/signup",
    element: <Signup />
  },
  {
    title: 'Video detail',
    path: "/video/:id",
    element: <VideoDetail />
  },
  {
    title: 'Channel detail',
    path: "/channel/:id",
    element: <ChannelDetail />
  },
  {
    title: "Layout",
    element: <Layout />,
    children: [
      {
        title: "Home",
        path: "/",
        element: <Home />,
      },
      {
        title: "Search Page",
        path: "/search/:searchTerm",
        element: <SearchFeed />,
      },
    ],
  },
];
