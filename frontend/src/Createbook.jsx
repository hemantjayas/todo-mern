import React, { useState } from 'react'
import './createbook.css';
import { useDispatch } from 'react-redux';
import { addnewBook } from './redux/actions/action';

export const Createbook = () => {
  const dispatch = useDispatch()
  const [formdata, setFormdata] = useState({ bookname: "", author: "" })

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addnewBook(formdata))
    setFormdata({ bookname: "", author: "" })

  }

  return (
    <div >
      <form onSubmit={handleSubmit} className='form_style' >
        <label htmlFor=""><strong>Book</strong></label>
        <input type="text" name='bookname' value={formdata.bookname} onChange={handleChange} />

        <label htmlFor=""><strong>Author</strong></label>
        <input type="text" name='author' value={formdata.author} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>


    </div>
  )
}
