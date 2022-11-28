import { Col, Form, Row, Button } from "react-bootstrap";
import { useState } from "react";

export default function Todo() {
  const [users, setUsers] = useState([]);
  const initialFormState = { id: null, task: "", status: "active" };
  const [taskObj, setTask] = useState(initialFormState);
  const [mode, setMode] = useState("all");

  const addTask = (newTask) => {
    newTask.id = users.length + 1;
    setUsers(() => [...users, newTask]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...taskObj, [name]: value });
  };

  const handleClick = (selectedTask) => {
    if (selectedTask.status === "completed") {
      setUsers((current) =>
        current.map((obj) => {
          if (obj.id === selectedTask.id) {
            return { ...obj, status: "active" };
          }
          return obj;
        })
      );
    }
    if (selectedTask.status === "active") {
      setUsers((current) =>
        current.map((obj) => {
          if (obj.id === selectedTask.id) {
            return { ...obj, status: "completed" };
          }
          return obj;
        })
      );
    }
  };
  const [items, setItems] = useState(true);
  const [searchValue, setSearchValue] = useState(false);

  const completeClick = () => {
    setMode("completed");
    setSearchValue(false);
    setItems(true);
  };

  const activeClick = () => {
    setMode("active");
    setSearchValue(false);
    setItems(true);
  };

  const allClick = () => {
    setMode("all");
    setSearchValue(false);
    setItems(true);
  };

  const checkStatus = (task) => {
    if (mode === "all") return true;
    return task.status === mode;
  };
  const [addBtn, setAddBtn] = useState(true); //done
  const [searchBtn, setSearchBtn] = useState(false);  //done

  const addbtn = () => { //done  handlePlusClick
    setAddBtn((current) => !current);
    setSearchBtn(false);
  };
  const searchbtn = () => { //done handleSearchClick
    setAddBtn(false);
    setSearchBtn((current) => !current);
  };
  const [searchInput, setSearchInput] = useState([]); //done same

  const handleSearch = (e) => {
    setSearchValue(true);
    setItems(false);
    setSearchInput(
      users.filter((item) => item.task.toLowerCase().includes(e.target.value))
    );
  };
  return (
    <div className="container-fluid">
      <Row className="justify-content-center">
        <Col sm={5} lg={5} md={5} className="px-0 bg-white border border-1">
          <div className="px-3  ">
            <h2 className="text-center">THINGS TO DO</h2>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                if (!taskObj.task) return;
                addTask(taskObj);
                setTask(initialFormState);
              }}
            >
              {addBtn && (
                <Form.Control
                  type="text"
                  placeholder="Add New"
                  value={taskObj.task}
                  onChange={handleInputChange}
                  name="task"
                />
              )}
              {searchBtn && (
                <Form.Control
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                  name="search"
                />
              )}
            </Form>

            {searchValue && (
              <div>
                <h4 className="text-center pt-2">Search reasult</h4>

                {searchInput.map((val) => (
                  <div className="mb-3" key={val.id}>
                    <hr />
                    <div className="d-flex">
                      <Form.Check
                        type="checkbox"
                        checked={val.status === "completed"}
                        className="me-3"
                        onClick={() => handleClick(val)}
                      />
                      <span
                        style={{
                          textDecorationLine:
                            val.status === "completed" ? "line-through" : "",
                        }}
                      >
                        {val.task}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div>
              {users.filter(checkStatus).length === 0 && (
                <div
                  className="py-3 my-2 ps-3 "
                  style={{ backgroundColor: "#F2F1F0", color: "#A39D92" }}
                >
                  There are no Tasks
                </div>
              )}
            </div>

            {items && (
              <div>
                {users.filter(checkStatus).map((val) => (
                  <div className="mb-3" key={val.id}>
                    <hr />
                    <div className="d-flex">
                      <Form.Check
                        type="checkbox"
                        checked={val.status === "completed"}
                        className="me-3"
                        onClick={() => handleClick(val)}
                      />
                      <span
                        style={{
                          textDecorationLine:
                            val.status === "completed" ? "line-through" : "",
                        }}
                      >
                        {val.task}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border-top py-2">
            <a
              onClick={addbtn}
              className="text-decoration-none text-dark px-2 ms-2"
              href
            >
              <i className="fs-5 bi bi-plus-lg " />
            </a>
            <a
              onClick={searchbtn}
              className="text-decoration-none text-dark border-right border-1 me-3"
              href
            >
              <i className="fs-5 bi bi-search me-3 " />
            </a>
            <span>{users.length} items left</span>
            <span className="float-right me-3">
              <Button
                onClick={allClick}
                className="shadow-none bg-white text-dark action-btn"
              >
                All
              </Button>
              <Button
                onClick={activeClick}
                className="shadow-none bg-white text-dark mx-2 action-btn"
              >
                Active
              </Button>
              <Button
                onClick={completeClick}
                className="shadow-none bg-white text-dark action-btn"
              >
                Completed
              </Button>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}