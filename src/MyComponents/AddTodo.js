import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const titleValue = (e) => {
        settitle(e.target.value)
    }
    const descValue = (e) => {
        setdesc(e.target.value)
    }

    const submited = (e) => {
        if (!title || !desc) {
            alert("Title and desc can not be blank")
        }
        else {
            props.addTodo(title, desc)
            // settitle = ('')
            // setdesc = ('')
        }

    }
    return (
        <div className='container my-3'>
            <h2>Add a Todo</h2>
            <form onSubmit={submited}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} className="form-control" onChange={titleValue} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea type="textarea" value={desc} className="form-control" onChange={descValue} id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {/* <button className="btn btn-primary mx-2" onClick={props.allClear}>All Clear</button> */}
        </div>
    )
}

export default AddTodo
