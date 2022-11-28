/** @format */
import { Link } from "react-router-dom";
import IMAGES from "../../../assets/images";
import PATH from "../../../utils/path";

const CORPORATE_MENU = [
  {
    key: PATH.CORPORATE_DASHBOARD,
    icon: (
      <img
        src={IMAGES.DASHBOARD_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="primary-blue-color" to={PATH.CORPORATE_DASHBOARD}>
        Dashboard
      </Link>
    ),
  },
  {
    key: PATH.PROJECT_LIST,
    icon: (
      <img
        src={IMAGES.PROJECT_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="primary-blue-color" to={PATH.PROJECT_LIST}>
        Projects
      </Link>
    ),
  },
  {
    key: "setting",
    icon: (
      <img
        src={IMAGES.SETTING_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: <div>Settings</div>,
    children: [
      {
        key: PATH.USER_MANAGEMENT_LIST,
        // icon: <MdDashboard size={20} fill="white" />,
        label: (
          <Link className="primary-blue-color" to={PATH.USER_MANAGEMENT_LIST}>
            User Management
          </Link>
        ),
      },
      {
        key: "Parameter",
        // icon: <MdDashboard size={20} fill="white" />,
        label: (
          <Link
            className="primary-blue-color"
            to={PATH.CORPORATE_AND_INDIVIDUAL_USER_MANAGEMENT}
          >
            Defaults/Parameter
          </Link>
        ),
      },
    ],
  },
];

const INDIVIDUAL_MENU = [
  {
    key: PATH.INDIVIDUAL_DASHBOARD,
    icon: (
      <img
        src={IMAGES.DASHBOARD_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="primary-blue-color" to={PATH.INDIVIDUAL_DASHBOARD}>
        Dashboard
      </Link>
    ),
  },
  {
    key: PATH.PROJECT_LIST,
    icon: (
      <img
        src={IMAGES.PROJECT_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="primary-blue-color" to={PATH.PROJECT_LIST}>
        Projects
      </Link>
    ),
  },
  {
    key: "setting",
    icon: (
      <img
        src={IMAGES.SETTING_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: <div>Settings</div>,
    children: [
      // {
      //   key: PATH.CORPORATE_AND_INDIVIDUAL_USER_MANAGEMENT,
      //   // icon: <MdDashboard size={20} fill="white" />,
      //   label: (
      //     <Link className="primary-blue-color" to={PATH.CORPORATE_AND_INDIVIDUAL_USER_MANAGEMENT}>
      //       User Management
      //     </Link>
      //   ),
      // },
      {
        key: "Parameter",
        // icon: <MdDashboard size={20} fill="white" />,
        label: (
          <Link
            className="primary-blue-color"
            to={PATH.CORPORATE_AND_INDIVIDUAL_USER_MANAGEMENT}
          >
            Defaults/Parameter
          </Link>
        ),
      },
    ],
  },
];
const ADMIN_MENU = [
  {
    key: PATH.ADMIN_DASHBOARD,
    icon: (
      <img
        src={IMAGES.DASHBOARD_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="primary-blue-color" to={PATH.ADMIN_DASHBOARD}>
        Dashboard
      </Link>
    ),
  },
  {
    key: PATH.ADMIN_ACTIVITY_LOG,
    icon: (
      <img
        src={IMAGES.ACTIVITY_LOG_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="primary-blue-color" to={PATH.ADMIN_ACTIVITY_LOG}>
        Activity Log
      </Link>
    ),
  },
  {
    key: PATH.ADMIN_REPORTS,
    icon: (
      <img
        src={IMAGES.REPORT_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="primary-blue-color" to={PATH.ADMIN_REPORTS}>
        Reports
      </Link>
    ),
  },
  {
    key: PATH.ADMIN_PARAMETERS,
    icon: (
      <img
        src={IMAGES.PARAMETER_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="primary-blue-color" to={PATH.ADMIN_PARAMETERS}>
        Parameters
      </Link>
    ),
  },
  {
    key: PATH.USER_MANAGEMENT_LIST,
    icon: (
      <img
        src={IMAGES.USER_MANAGEMENT_ICON}
        alt="page-icon"
        className="side-menu-icon"
      />
    ),
    label: (
      <Link className="primary-blue-color" to={PATH.USER_MANAGEMENT_LIST}>
        User Management
      </Link>
    ),
  },
];

const SIDE_MENU_LIST = {
  CORPORATE: CORPORATE_MENU,
  INDIVIDUAL: INDIVIDUAL_MENU,
  ADMIN: ADMIN_MENU,
};

export default SIDE_MENU_LIST;
