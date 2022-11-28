import { UserOutlined } from "@ant-design/icons";
import { BsBell } from "react-icons/bs";
import { Avatar, Dropdown, Layout, Menu, Space, Divider, Badge } from "antd";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IMAGES from "../../../assets/images";
import { logout } from "../../../app/features/authSlice/auth.slice.js";
import SIDE_MENU_LIST from "../SideMenu/SideMenuItems";

const { Header, Content, Sider } = Layout;
function AppLayout({ children }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);

  const logoutFun = () => {
    dispatch(logout());
  };

  let sideMenuItems = [];

  if (auth && auth.role && auth.role === "admin")
    sideMenuItems = [...SIDE_MENU_LIST.ADMIN, ...sideMenuItems];
  if (auth && auth.role && auth.role === "corporate")
    sideMenuItems = [...SIDE_MENU_LIST.CORPORATE, ...sideMenuItems];
  if (auth && auth.role && auth.role === "individual")
    sideMenuItems = [...SIDE_MENU_LIST.INDIVIDUAL, ...sideMenuItems];
  const profileDropdown = (
    <Menu
      items={[
        {
          key: "1",
          label: "Profile",
        },
        {
          key: "2",
          label: (
            <Link
              className="text-dark"
              to={location.pathname}
              onClick={logoutFun}
            >
              Logout
            </Link>
          ),
        },
      ]}
    />
  );
  const footerMenuItems = [
    {
      // key: PATH.ADMIN_DASHBOARD,
      icon: <img src={IMAGES.HELP_ICON} alt="" />,
      label: (
        <Link to={location.pathname} onClick={logoutFun}>
          Help
        </Link>
      ),
    },
    {
      // key: PATH.ADMIN_PROJECTS,
      icon: <img src={IMAGES.LOGOUT} alt="" />,
      label: (
        <Link to={location.pathname} onClick={logoutFun}>
          Logout
        </Link>
      ),
    },
  ];
  return (
    <Layout className="antd-custom-layout">
      <Sider
        breakpoint="lg"
        className="antd-custom-sidebar"
        collapsedWidth="0"
        width="235"
      >
        <div className="sidebar-inner-section">
          <div className="w-100">
            <div
              className="text-center user-info-section cursor-pointer"
              role="button"
              tabIndex="0"
            >
              {/* <Link to='#'> */}
              <img src={IMAGES.LOGO} alt="" /> {/* </Link> */}
              {/* <Avatar
              size={64}
              src={IMAGES.LOGO}
              className="custom-bordered-avatar"
            /> */}
            </div>
            <div className="custon-menu">
              <Menu
                className="mt-2 custom-antd-menu custom-scroll"
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["STUDENT_DASHBOARD"]}
                selectedKeys={[location.pathname]}
                items={sideMenuItems}
                defaultOpenKeys={[location?.pathname?.split("/")?.[2] || ""]}
              />
            </div>
          </div>
          <div className="footer-section">
            <Menu
              className="mt-2 custom-antd-menu custom-scroll"
              mode="inline"
              items={footerMenuItems}
            />
          </div>
          {/* <div className="footer-section text-center ml-2">
            <div className="d-flex justify-content-start align-items-center w-75 mx-auto pt-2">
              <img src={IMAGES.HELP_ICON} alt="" />
              <Link to={location.pathname} className="ml-3" onClick={logoutFun}>
                Help
              </Link>
            </div>
            <div className="d-flex align-items-center w-75 mx-auto pt-4 mt-2">
              <img src={IMAGES.LOGOUT} alt="" />
              <Link to={location.pathname} className="ml-3" onClick={logoutFun}>
                Logout
              </Link>
            </div>
          </div> */}
        </div>
      </Sider>
      <Layout>
        <div className="container p-0 w-100 h-100">
          <Header
            className="site-layout-sub-header-background custom-header d-flex align-items-center justify-content-between px-4"
            style={{
              padding: 0,
            }}
          >
            <h4 className="mb-0"> </h4>
            <div className="align-items-center d-flex">
              {/* <div className="search-box mt-1">
                <Button className="btn-search">
                  <FiSearch size={20} />
                </Button>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Type to Search..."
                />
              </div>
              <Divider type="vertical" /> */}

              <Badge dot fill="#FF3636">
                <BsBell size={20} className="cursor-pointer" />
              </Badge>

              <Divider type="vertical" />
              <Dropdown overlay={profileDropdown} trigger={["click"]}>
                <Space>
                  <Avatar
                    src={IMAGES.STUDENT_COMMUNITY_PROFILE}
                    size={35}
                    className="cursor-pointer"
                    icon={<UserOutlined />}
                  />
                  <h5 className="mb-0 font-weight-bold cursor-pointer">
                    Floyd Miles
                  </h5>
                  <IoIosArrowDown fill="black" className="cursor-pointer" />
                </Space>
              </Dropdown>
            </div>
          </Header>
          <Content>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {children}
            </div>
          </Content>
          {/* <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </div>
      </Layout>
    </Layout>
  );
}
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
