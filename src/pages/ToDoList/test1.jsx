import { Form, Input, Row, Col, Card, Divider, Button, Checkbox } from "antd";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { Footer } from "antd/lib/layout/layout";
import { useState } from "react";
import Header from "./Header";

const checkboxItems = [
  {
    key: "1",
    label: (
      <div>
        <Checkbox>Learn JavaScript</Checkbox>
        <Divider />
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div>
        <Checkbox>Learn React</Checkbox>
        <Divider />
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div>
        <Checkbox>Build a React App</Checkbox>
      </div>
    ),
  },
];

function TodoList() {
  const [selectedActivity, setSelectedActivity] = useState(true);

  const [submitted, setSubmitted] = useState();
  const [checkBox, setCheckBox] = useState(checkboxItems);
  const addUser = () => {
    setCheckBox([...checkBox, submitted]);
  };
  const handlePlusClick = () => {
    setSelectedActivity(true);
  };
  const handleSearchClick = () => {
    setSelectedActivity(false);
  };

  
  const itemsCount = checkboxItems.length;

  function handleChange(e) {
    // console.log("e.current.target.value",e.bubbles);
    const { name, value } = e.target;
    setSubmitted({ ...submitted, [name]: value });
  }

  // function handleChange(e) {
  //   setSubmitted(e.current.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault(e);
    addUser(submitted);
  }

  // const styleCheck = {
  //   textDecoration: "line-through",
  // };

  return (
    <div className="todo-list">
      <Row gutter={24} className="m-0 mt-4 d-flex justify-content-center">
        <Col span={24} xs={24} sm={24} md={11} lg={11} xl={11}>
          <Card bordered={false}>
            <Header />
            <Form onSubmit={(e) => handleSubmit(e)}>
              {selectedActivity === true ? (
                <Form.Item>
                  <Input
                    name="submitted"
                    // value={submitted}

                    onChange={(e) => handleChange(e)}
                    placeholder="Add New"
                  />
                  <Button
                    type="submit"
                    value={submitted}
                    style={{ display: "none" }}
                  />
                </Form.Item>
              ) : (
                <Form.Item>
                  <Input
                    // onChange={(e) => handleSubmit(e)}
                    placeholder="Search"
                  />
                </Form.Item>
              )}
              {checkBox.map((item) => (
                <div>
                  <Form.Item>{item.label}</Form.Item>
                </div>
              ))}
            </Form>
            {/* <ul className="list-group">
            {checkBox.map((item, index) => (
              <li
                className="list-group-item"
                style={completed[index] ? styleCheck : null}
              >
                <input
                  id="chk"
                  onChange={() => handleCheck(index)}
                  type="checkbox"
                />{" "}
                {item.label}
              </li>
            ))}
          </ul> */}
            <Footer className="footer d-flex justify-content-between">
              <div className="d-flex align-items-end mx-3">
                <AiOutlinePlus
                  size={22}
                  onClick={handlePlusClick}
                  className="mr-2"
                />
                <AiOutlineSearch
                  size={20}
                  onClick={handleSearchClick}
                  className="icon-btn"
                />
                <Divider
                  type="vertical"
                  className="ml-3"
                  style={{ background: "#455560" }}
                />
                <span> {itemsCount} items left</span>
              </div>
              <div>
                <Button className="footer-btn active-action" size="small">
                  All
                </Button>
                <Button className="footer-btn active-action" size="small">
                  Active
                </Button>
                <Button className="footer-btn active-action" size="small">
                  Completed
                </Button>
              </div>
            </Footer>
          </Card>
          <div>
            <p className="text-center mt-3">Press `Esc` to cancel.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default TodoList;


