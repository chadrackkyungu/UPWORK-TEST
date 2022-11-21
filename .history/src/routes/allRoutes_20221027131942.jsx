import React from "react"
import { Redirect } from "react-router-dom"

import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import VerifiedEmail from "../pages/Authentication/VerifiedEmail"


import Dashboard from "../pages/Dashboard/index"
import Layout from '../pages/Layout';
import UserProfile from "../pages/Account/Index"
import Properties from "../pages/Properties/Index"
import Team from "../pages/My Team/Index"
import NoneVerifyUser from "../pages/Account/NoneVerifyUser"
import HouseDetails from "../pages/Properties/HouseDetails"

const userRoutes = [
  // { path: "/dashboard", exact: true, component: Dashboard },
  { path: "/my-account", exact: true, component: Layout },
  { path: "/profile", exact: true, component: UserProfile },
  { path: "/properties", exact: true, component: Properties },
  { path: "/my-team", exact: true, component: Team },
  { path: "/non-verify-user", exact: true, component: NoneVerifyUser },
  { path: "/house-details/:id", exact: true, component: HouseDetails },
  // { path: "*", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "*", exact: true, component: () => <Redirect to="/profile" /> },
]

const authRoutes = [
  { path: "/login", exact: true, component: Login },
  { path: "/forgot-password", exact: true, component: ForgetPwd },
  { path: "/register", exact: true, component: Register },
  { path: "/resetPassword/:token", exact: true, component: ResetPassword },
  { path: "/verify/:userId/:token", exact: true, component: VerifiedEmail },
]

export { userRoutes, authRoutes }
