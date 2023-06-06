import React, { useEffect } from 'react'
import './getBookData.css';
import { getAllBook, deleteBook } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';

export const GetBookData = () => {
    const dispatch = useDispatch()

    const allData = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(getAllBook())
    }, [])


    return (
        <div className='bookdata'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book</th>
                        <th scope="col">Author</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allData?.map((item, index) => (
                        <tr key={item._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.bookname}</td>
                            <td>{item.author}</td>
                            <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button></td>
                            <td><button className="btn btn-danger" onClick={() => { dispatch(deleteBook(item._id)) }}>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>


            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
