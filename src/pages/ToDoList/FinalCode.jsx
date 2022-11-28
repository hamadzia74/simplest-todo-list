import { useState, useEffect } from "react";

import { Row, Col, Card, Divider, Button, Checkbox } from "antd";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { Footer } from "antd/lib/layout/layout";
// import { useForm } from "react-hook-form";
import Header from "./Header";

const checkBoxItems = [
  {
    key: "1",
    text: "Learn JavaScript",
  },
  {
    key: "2",
    text: "Learn React",
  },
  {
    key: "3",
    text: "Build a React App",
  },
];

function ToDoList() {
  const [selectedActivity, setSelectedActivity] = useState(true);

  const handlePlusClick = () => {
    setSelectedActivity(true);
  };
  const handleSearchClick = () => {
    setSelectedActivity(false);
  };

  // const [todos, setTodos] = useState([]);

  const [todos, setTodos] = useState(checkBoxItems);

  // const [lineThrough, setlineThrough] = useState(false);

  const [active, setActive] = useState(1);
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };
    setTodos([todo, ...todos]);
  };
  // const itemsCount = todos;
  const itemsCount = todos.length;

  const addToProgress = (id) => {
    const item = todos.find((x) => x.id === id);
    setInprogress([item, ...inprogress]);
    // const filterarray = todos.filter((x) => x.id !== id);
    // setInprogress(filterarray);
  };
  // const deleteTodo = (id) => {
  //   const filterarray = todos.filter(x => x.id !== id);
  //   setTodos(filterarray);
  // }

  const addToCompleted = (id) => {
    debugger; // eslint-disable-line no-debugger
    const item = todos.find((x) => x.id === id);

    setCompleted([item, ...completed]);
    // const filterarray = inprogress.filter((x) => x.id !== id);
    // setInprogress(filterarray);
  };

  // useEffect(() => {

  // }, [todos, inprogress, completed]);

  useEffect(() => {
    debugger; // eslint-disable-line no-debugger
    // console.log(searchInput);
    if (searchInput?.length === 0) {
      // console.log(todos)
      setTodos(todos.map((item) => item));

    } else {
      setTodos(
        todos.filter((item) =>
          item.text.toLowerCase().includes(searchInput && searchInput)
        )
      );
    }
  }, [searchInput]);

  //
  // const styleCheck = {
  //   textDecoration: "line-through",
  //   color: "red",
  //   fontWeight: "bold",
  // };

  // function onkeypressed(evt, input) {
  //   const code = evt.charCode || evt.keyCode;
  //   if (code === 27) {
  //     input.value = "";
  //   }
  // }

  // const searchbtn = () => {
  //   setAddBtn(false);
  //   setSearchBtn((current) => !current);
  // };
  // const [searchInput, setSearchInput] = useState([]);

  // const filterBySearch = (e) => {
  //   setSearchValue(true);
  //   setItems(false);
  //   setSearchInput(
  //     users.filter((item) => item.task.toLowerCase().includes(e.target.value))
  //   );
  // };

  // const [searchInput, setSearchInput] = useState([]);

  // const filterBySearch = (e) => {
  //   debugger; // eslint-disable-line no-debugger
  //   // setSelectedActivity(true);
  //   // setSearchValue(true);
  //   // setItems(false);
  //   setInput(e.target.value);
  // };

  return (
    <div className="todo-list">
      <Row gutter={24} className="m-0 mt-4 d-flex justify-content-center">
        <Col span={24} xs={24} sm={24} md={11} lg={11} xl={11}>
          <Card bordered={false}>
            <Header />
            <div className="container px-5">
              <form onSubmit={(e) => e.preventDefault(e)}>
                {selectedActivity ? (
                  <div>
                    <input
                      // name="addnew"
                      // ref={register}
                      className="w-100"
                      placeholder="Add New"
                      onChange={(e) => {
                        debugger; // eslint-disable-line no-debugger
                        setInput(e.target.value);
                      }}
                      name="text"
                    />
                    <input
                      type="submit"
                      onClick={() => addTodo()}
                      style={{ display: "none" }}
                    />
                  </div>
                ) : (
                  <input
                    name="search"
                    className="w-100"
                    placeholder="Search"
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Backspace") {
                        debugger; // eslint-disable-line no-debugger 
                        setSearchInput(e.target.value)
                        console.log("Backspace key pressed ");
                      }
                    }}
                  />
                )}

                {/* {checkBoxItems.map((item) => (
                  <div>
                    <Checkbox>{item.text}</Checkbox>
                    <span>
                      <Divider />
                    </span>
                  </div>
                ))} */}
              </form>
              {/* <div>
{{'backgroundColor': status === 'approved' ? 'blue' : status === 'pending' ? 'black' : 'red'}}
{filteredList.map}
              </div> */}
              {/* {filteredList.map((item) => (
                <div key={item.id}>
                  <Checkbox>{item}</Checkbox>
                  <Divider />
                </div>
              ))} */}
              {active === 1 &&
                todos?.map((item) => (
                  <div key={item.id}>
                    <Checkbox
                      // onClick={() => setlineThrough(!lineThrough)}
                      // className={`${lineThrough === true ? "strike" : " "}`}
                      // onClick={() => addToProgress(item.id)}
                      onClick={() => addToCompleted(item.id)}
                    >
                      {item.text}
                    </Checkbox>
                    <Divider />
                  </div>
                ))}
              {active === 2 &&
                inprogress?.map((item) => (
                  <div key={item.id}>
                    <Checkbox
                      // onClick={() => setlineThrough(!lineThrough)}
                      // className={`${lineThrough === true ? "strike" : " "}`}
                      // onClick={() => addToProgress(item.id)}
                      onClick={() => addToProgress(item.id)}
                    >
                      {item.text}
                    </Checkbox>
                    <Divider />
                  </div>
                ))}
              {active === 3 &&
                completed?.map((item) => (
                  <div key={item.id}>
                    <Checkbox
                    // onClick={() => setlineThrough(!lineThrough)}
                    // className={`${lineThrough === true ? "strike" : " "}`}
                    // onClick={() => addToProgress(item.id)}
                    >
                      {item.text}
                    </Checkbox>
                    <Divider />
                  </div>
                ))}
            </div>

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
                <Button
                  className="footer-btn active-action"
                  size="small"
                  status="All"
                  onClick={() => setActive(1)}
                >
                  All
                </Button>
                <Button
                  className="footer-btn active-action"
                  size="small"
                  status="Active"
                  onClick={() => setActive(2)}
                >
                  Active
                </Button>
                <Button
                  className="footer-btn active-action"
                  size="small"
                  onClick={() => setActive(3)}
                  // onClick={() => addtoCompleted()}
                  status="Completed"
                >
                  Completed
                  {/* {completed.map((item) => (
                    <div key={item.id}>
                      <p>{item.text}</p>
                    </div>
                  ))} */}
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
export default ToDoList;
