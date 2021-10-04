/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import InternetBundles from "components/Bundles/InternetBundles";
import Form1 from "views/Form1";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/internet/bundles",
    name: "Internet Bundles",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: InternetBundles,
    layout: "/admin",
    hide: true,
  },
  {
    path: "/form1",
    name: "Form",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Form1,
    layout: "/admin",
    hide: true,
  },
  {
    path: "/user",
    name: "My Application",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Active Bundles",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    layout: "/admin",
  },
];

export default dashboardRoutes;
