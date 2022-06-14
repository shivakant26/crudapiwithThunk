import React, { useEffect ,useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { deletePost, list, single_post } from "../../Redux/Action/userAction";
import { Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
const ShowPost = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    const post_list = useSelector((state)=>state?.userReducer?.list?.data?.posts);
    
    

    const edit_post = (id) =>{
        navigate(`../create-post/${id}`);
        dispatch(single_post(id));

    }
    const delete_post = (id) =>{
        dispatch(deletePost(id))
    }
   
    useEffect(()=>{
        dispatch(list());
    },[]);
    useEffect(()=>{

    },[post_list])

    return(
        <div>
            <h2>Show Post</h2>
            {
                post_list ? <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {
                    post_list?.map((item,id)=>
                    <tr key={id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>
                            <button className="edit" onClick={()=>edit_post(item.id)}><FaEdit /></button>
                            <button className="trash" onClick={()=>delete_post(item.id)}><RiDeleteBin5Fill /></button>
                        </td>
                    </tr>
                    )
                 }
                </tbody>
              </Table>
               :
               <p>data loading....</p> 
            }
        </div>
    )
}

export default ShowPost;