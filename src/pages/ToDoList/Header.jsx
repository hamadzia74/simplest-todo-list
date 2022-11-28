import { Typography } from "antd";

function Header() {
  return (
    <div>
      <Typography.Title
        className="text-center text-uppercase pb-4 m-0"
        level={1}
      >
        things to do
      </Typography.Title>
    </div>
  );
}
export default Header;
