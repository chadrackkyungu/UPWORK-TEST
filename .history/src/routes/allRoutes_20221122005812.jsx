import React from "react"
import { Redirect } from "react-router-dom"

import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import VerifiedEmail from "../pages/Authentication/VerifiedEmail"

import Layout from '../pages/Layout';
import UserProfile from "../pages/Account/Index"
import Properties from "../pages/Properties/Index"

const userRoutes = [
  { path: "/my-account", exact: true, component: Layout },
  { path: "/profile", exact: true, component: UserProfile },
  { path: "/dashboard", exact: true, component: Properties },
  { path: "*", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/login", exact: true, component: Login },
]
export { userRoutes, authRoutes }
