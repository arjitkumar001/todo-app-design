import React, { useState } from 'react'
// import Form from './Form'
// import Hover from './Hover'
function TopBar() {
    const [toggle, setToggle] = useState()
    const [show, setShow] = useState()

    const [allValue, setAllValue] = useState([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    

    const addTask = () => {
        if (title && description) {
            const newTask = {
                id: new Date().getTime(),
                title,
                description
            }
            setAllValue([...allValue, newTask]);
            setTitle("");
            setDescription("");
        }
    }
    // console.log(allValue);

    // delete 
    const deleteItem = (id) => {
        const deletedTask = allValue.filter((task) => task.id !== id);
        setAllValue(deletedTask);
    }

    // edit
    const editItem = (id) => {
        const selecteditem = allValue.find((task) => task.id === id);
        setTitle(selecteditem.title);
        setDescription(selecteditem.description);
        deleteItem(id);
        };

    return (
        <>
            <section>
                <div className="todo">
                    <div className="topbar">
                        <div className="logo">
                            <h1>todo</h1>
                        </div>
                        <div className="plusIcon">
                            <h1 onClick={() => {
                                setToggle(!toggle);
                                setShow("")
                            }}>+</h1>
                            {
                                toggle && (

                                    <div className="form">
                                        <form onSubmit={((e) => e.preventDefault())}>
                                            <div className="btn-sec">
                                                <div> <button className='btn-cancle' onClick={(() => setToggle(''))}>Cancel</button></div>
                                                <div>  <button className='btn-add' onClick={() => {
                                                    setToggle('');
                                                    addTask()
                                                }

                                                }
                                                >Add</button>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="input-sec">
                                                <label>Title:</label>
                                                <br />
                                                <input type="text" name="" id="" placeholder='add title........' onChange={(e) => setTitle(e.target.value)} value={title} />
                                                <label>Description:</label>
                                                <br />
                                                <textarea name="discription" id="" cols="30" rows="4" placeholder='discription.......' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                                            </div>
                                            <div className="tags">
                                                <h2>Tags</h2>
                                                <div className="tags-items">
                                                    <div className="work"><p ></p><a href="#">work</a> </div>
                                                    <div className="study"><p ></p><a href="#">study</a> </div>
                                                    <div className="entertainment"><p ></p> <a href="#">entertainment</a></div>
                                                    <div className="family"><p ></p><a href="#">family</a> </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                    <div className="content-section">
                        <div className="list-section">
                            <div className="work"><p ></p><a href="#">work</a> </div>
                            <div className="study"><p ></p><a href="#">study</a> </div>
                            <div className="entertainment"><p ></p> <a href="#">entertainment</a></div>
                            <div className="family"><p ></p><a href="#">family</a> </div>
                            <div className='checkbox'><input type="checkbox" name="" id="" className='hide-checkbox' /><span>Hide Done Tasks</span></div>
                        </div>
                        <div className="task-section" >
                            {
                                allValue.map((task) => {
                                    return (

                                        <div className="task-section-1" key={task.id}>
                                            <div className="task-1" >
                                                <div className="task-top1">
                                                    <h3>{task.title}</h3>
                                                    <h3 className='hover-effect' onClick={() => { setShow(!show) }} >...</h3>
                                                    {
                                                        show && (
                                                            <div className="hover">
                                                                <div className="edit"><p onClick={() => {
                                                                    setToggle(!toggle)
                                                                    editItem(task.id);
                                                                    setShow("");
                                                                }}>Edit...</p></div>
                                                                <hr />
                                                                <div className="delete"><p onClick={() => {
                                                                    deleteItem(task.id);
                                                                    setShow("")

                                                                }
                                                                }>Delete...</p></div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div className="task-txt-1">
                                                    <p>{task.description}</p>
                                                </div>
                                                <div className="task-bootom-1">
                                                    <div className="bottom-left-1">
                                                        <p className='p1'></p>
                                                        <p className='p2'></p>
                                                        <p className='p3'></p>
                                                    </div>
                                                    <div className="check"><input type="checkbox" name="" id="" /><span>Done</span></div>
                                                </div>
                                            </div>
                                        </div>


                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TopBar
