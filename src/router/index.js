// router/index.js

import Home from '@/container/Home'
import Data from '@/container/Data'
import User from '@/container/User'
import Login from '@/container/Login'

const routes = [
  {
    path: "/my-cost",
    component: Home
  },
  {
    path: "/my-cost/data",
    component: Data
  },
  {
    path: "/my-cost/user",
    component: User
  },
  {
    path: "/my-cost/login",
    component: Login
  },
];

export default routes