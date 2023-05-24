import React, { useState } from 'react'
// import Form from './Form'
// import Hover from './Hover'
function TopBar() {
    const [toggle, setToggle] = useState()
    const [hover, setHover] = useState()
    const [title, setTitle] = useState("");
    const [title1, setTitle1] = useState([])
    const [description, setDescription] = useState("");
    const [description1, setDescription1] = useState([])


    return (
        <>
            <section>
                <div className="todo">
                    <div className="topbar">
                        <div className="logo">
                            <h1>todo</h1>
                        </div>
                        <div className="plusIcon">
                            <h1 onClick={() => setToggle(!toggle)}>+</h1>
                            {
                                toggle && (

                                    <div className="form">
                                        <form onSubmit={((e) => e.preventDefault())}>
                                            <div className="btn-sec">
                                                <div> <button className='btn-cancle' onClick={(() => setToggle(''))}>Cancel</button></div>
                                                <div>  <button className='btn-add' onClick={() => {
                                                    setToggle('')
                                                    setTitle1((t) => [...t, title]);
                                                    setDescription1((d) => [...d, description])
                                                    setTitle("")
                                                    setDescription("")

                                                }

                                                }
                                                >Add</button>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="input-sec">
                                                <label>Title:</label>
                                                <br />
                                                <input type="text" name="" id="" placeholder='add title' onChange={(e) => setTitle(e.target.value)} value={title} />
                                                <label>Description:</label>
                                                <br />
                                                <textarea name="discription" id="" cols="30" rows="4" placeholder='discription' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
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
                        {
                            (title1, description1).map(() => {
                                return (
                                    <div className="task-section" >
                                        <div className="task-section-1">
                                            <div className="task-1">
                                                <div className="task-top1">
                                                    <h3>{title1}</h3>
                                                    <h3 className='hover-effect' onClick={() => { setHover(!hover) }} >...</h3>
                                                    {
                                                        hover && (
                                                            <div className="hover">
                                                                <div className="edit"><p>Edit...</p></div>
                                                                <hr />
                                                                <div className="delete"><p >Delete...</p></div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div className="task-txt-1">
                                                    <p>{description1}</p>
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

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default TopBar
