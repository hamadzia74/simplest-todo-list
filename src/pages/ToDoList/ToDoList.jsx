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
  const [active, setActive] = useState(1);
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);

  // const [users, setUsers] = useState([]);
  // const defaultState = { id: null, text: "", status: "active" };
  // const [textObj, setText] = useState(defaultState);
  // const [mode, setMode] = useState("all");

  const handlePlusClick = () => {
    setSelectedActivity(true);
  };
  const handleSearchClick = () => {
    setSelectedActivity(false);
  };

  // const addText = (newText) => {
  //   newText.id = users.length + 1;
  //   setUsers(() => [...users, newText]);
  // };

  // const handleInput = (event) => {
  //   const { name, value } = event.target;
  //   setText({ ...textObj, [name]: value });
  // };

  // const handleClick = (selectedTask) => {
  //   if (selectedTask.status === "completed") {
  //     setUsers((current) =>
  //       current.map((obj) => {
  //         if (obj.id === selectedTask.id) {
  //           return { ...obj, status: "active" };
  //         }
  //         return obj;
  //       })
  //     );
  //   }
  //   if (selectedTask.status === "active") {
  //     setUsers((current) =>
  //       current.map((obj) => {
  //         if (obj.id === selectedTask.id) {
  //           return { ...obj, status: "completed" };
  //         }
  //         return obj;
  //       })
  //     );
  //   }
  // };
  // const [items, setItems] = useState(true);
  // const [searchValue, setSearchValue] = useState(false);

  // const completeClick = () => {
  //   setMode("completed");
  //   setSearchValue(false);
  //   setItems(true);
  // };

  // const activeClick = () => {
  //   setMode("active");
  //   setSearchValue(false);
  //   setItems(true);
  // };

  // const allClick = () => {
  //   setMode("all");
  //   setSearchValue(false);
  //   setItems(true);
  // };

  // const checkStatus = (task) => {
  //   if (mode === "all") return true;
  //   return task.status === mode;
  // };

  // const [addBtn, setAddBtn] = useState(true); //done
  // const [searchBtn, setSearchBtn] = useState(false);  //done

  // const addbtn = () => { //done  handlePlusClick
  //   setAddBtn((current) => !current);
  //   setSearchBtn(false);
  // };
  // const searchbtn = () => { //done handleSearchClick
  //   setAddBtn(false);
  //   setSearchBtn((current) => !current);
  // };
  // const [searchInput, setSearchInput] = useState([]); //done same

  // const handleSearch = (e) => {
  //   setSearchValue(true);
  //   setItems(false);
  //   setSearchInput(
  //     users.filter((item) => item.text.toLowerCase().includes(e.target.value))
  //   );

  // const [todos, setTodos] = useState([]);

  const [todos, setTodos] = useState(checkBoxItems);

  const [lineThrough, setlineThrough] = useState(false);
  
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
    debugger; // eslint-disable-line no-debugger
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
    setlineThrough(!lineThrough)
    // const filterarray = inprogress.filter((x) => x.id !== id);
    // setInprogress(filterarray);
  };

  // useEffect(() => {

  // }, [todos, inprogress, completed]);

  useEffect(() => {
    debugger; // eslint-disable-line no-debugger
    // console.log(searchInput);
    if (searchInput?.length === 0) {
      console.log(todos)
      setTodos(checkBoxItems);
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
              <form
                onSubmit={(e) => e.preventDefault(e)}

                // onSubmit={(event) => {
                //   event.preventDefault();
                //   if (!textObj.text) return;
                //   addText(textObj);
                //   setText(defaultState);
                // }}
              >
                {selectedActivity ? (
                  <div>
                    <input
                      // name="addnew"
                      // ref={register}
                      className="w-100"
                      placeholder="Add New"
                      onChange={(e) => {
                        // debugger; // eslint-disable-line no-debugger
                        setInput(e.target.value);
                      }}
                      // onChange={handleInput} 
                      // value={textObj.text} 
                      // name="task" 
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
                        setSearchInput(e.target.value);
                        console.log("Backspace key pressed");
                      }
                    }}
                    // type="text"
                    // onChange={handleSearch}
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
                      className={`${lineThrough === true ? "strike" : " "}`}
                      // onClick={() => addToProgress(item.id)}
                      onClick={() => addToCompleted(item.id)}
                    >

                      {item.text}
                    </Checkbox>
                    <Divider />
                  </div>
                ))}
              {active === 2 &&
                todos?.map((item) => (
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

              {/* {searchValue && (
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
              )} */}
            </div>

            <Footer className="footer d-flex justify-content-between">
              <div className="d-flex align-items-end mx-3">
                <AiOutlinePlus
                  size={22}
                  onClick={handlePlusClick}
                  // onClick={addbtn}
                  className="mr-2"
                />
                <AiOutlineSearch
                  size={20}
                  onClick={handleSearchClick}
                  // onClick={searchbtn}
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




// import { Col, Form, Row, Button } from "react-bootstrap";
// import { useState } from "react";

// export default function ToDoList() {
//   const [users, setUsers] = useState([]);
//   const initialFormState = { id: null, task: "", status: "active" };
//   const [taskObj, setTask] = useState(initialFormState);
//   const [mode, setMode] = useState("all");

//   const addTask = (newTask) => {
//     newTask.id = users.length + 1;
//     setUsers(() => [...users, newTask]);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setTask({ ...taskObj, [name]: value });
//   };

//   const handleClick = (selectedTask) => {
//     if (selectedTask.status === "completed") {
//       setUsers((current) =>
//         current.map((obj) => {
//           if (obj.id === selectedTask.id) {
//             return { ...obj, status: "active" };
//           }
//           return obj;
//         })
//       );
//     }
//     if (selectedTask.status === "active") {
//       setUsers((current) =>
//         current.map((obj) => {
//           if (obj.id === selectedTask.id) {
//             return { ...obj, status: "completed" };
//           }
//           return obj;
//         })
//       );
//     }
//   };
//   const [items, setItems] = useState(true);
//   const [searchValue, setSearchValue] = useState(false);

//   const completeClick = () => {
//     setMode("completed");
//     setSearchValue(false);
//     setItems(true);
//   };

//   const activeClick = () => {
//     setMode("active");
//     setSearchValue(false);
//     setItems(true);
//   };

//   const allClick = () => {
//     setMode("all");
//     setSearchValue(false);
//     setItems(true);
//   };

//   const checkStatus = (task) => {
//     if (mode === "all") return true;
//     return task.status === mode;
//   };
//   const [addBtn, setAddBtn] = useState(true); 
//   const [searchBtn, setSearchBtn] = useState(false);  

//   const addbtn = () => { 
//     setAddBtn((current) => !current);
//     setSearchBtn(false);
//   };
//   const searchbtn = () => { 
//     setAddBtn(false);
//     setSearchBtn((current) => !current);
//   };
//   const [searchInput, setSearchInput] = useState([]); 

//   const handleSearch = (e) => {
//     setSearchValue(true);
//     setItems(false);
//     setSearchInput(
//       users.filter((item) => item.task.toLowerCase().includes(e.target.value))
//     );
//   };
//   return (
//     <div className="container-fluid">
//       <Row className="justify-content-center">
//         <Col sm={5} lg={5} md={5} className="px-0 bg-white border border-1">
//           <div className="px-3  ">
//             <h2 className="text-center">THINGS TO DO</h2>
//             <Form
//               onSubmit={(event) => {
//                 event.preventDefault();
//                 if (!taskObj.task) return;
//                 addTask(taskObj);
//                 setTask(initialFormState);
//               }}
//             >
//               {addBtn && (
//                 <Form.Control
//                   type="text"
//                   placeholder="Add New"
//                   value={taskObj.task}
//                   onChange={handleInputChange}
//                   name="task"
//                 />
//               )}
//               {searchBtn && (
//                 <Form.Control
//                   type="text"
//                   placeholder="Search"
//                   onChange={handleSearch}
//                   name="search"
//                 />
//               )}
//             </Form>

//             {searchValue && (
//               <div>
//                 <h4 className="text-center pt-2">Search reasult</h4>

//                 {searchInput.map((val) => (
//                   <div className="mb-3" key={val.id}>
//                     <hr />
//                     <div className="d-flex">
//                       <Form.Check
//                         type="checkbox"
//                         checked={val.status === "completed"}
//                         className="me-3"
//                         onClick={() => handleClick(val)}
//                       />
//                       <span
//                         style={{
//                           textDecorationLine:
//                             val.status === "completed" ? "line-through" : "",
//                         }}
//                       >
//                         {val.task}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div>
//               {users.filter(checkStatus).length === 0 && (
//                 <div
//                   className="py-3 my-2 ps-3 "
//                   style={{ backgroundColor: "#F2F1F0", color: "#A39D92" }}
//                 >
//                   There are no Tasks
//                 </div>
//               )}
//             </div>

//             {items && (
//               <div>
//                 {users.filter(checkStatus).map((val) => (
//                   <div className="mb-3" key={val.id}>
//                     <hr />
//                     <div className="d-flex">
//                       <Form.Check
//                         type="checkbox"
//                         checked={val.status === "completed"}
//                         className="me-3"
//                         onClick={() => handleClick(val)}
//                       />
//                       <span
//                         style={{
//                           textDecorationLine:
//                             val.status === "completed" ? "line-through" : "",
//                         }}
//                       >
//                         {val.task}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div className="border-top py-2">
//             <a
//               onClick={addbtn}
//               className="text-decoration-none text-dark px-2 ms-2"
//               href
//             >
//               <i className="fs-5 bi bi-plus-lg " />
//             </a>
//             <a
//               onClick={searchbtn}
//               className="text-decoration-none text-dark border-right border-1 me-3"
//               href
//             >
//               <i className="fs-5 bi bi-search me-3 " />
//             </a>
//             <span>{users.length} items left</span>
//             <span className="float-right me-3">
//               <Button
//                 onClick={allClick}
//                 className="shadow-none bg-white text-dark action-btn"
//               >
//                 All
//               </Button>
//               <Button
//                 onClick={activeClick}
//                 className="shadow-none bg-white text-dark mx-2 action-btn"
//               >
//                 Active
//               </Button>
//               <Button
//                 onClick={completeClick}
//                 className="shadow-none bg-white text-dark action-btn"
//               >
//                 Completed
//               </Button>
//             </span>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }