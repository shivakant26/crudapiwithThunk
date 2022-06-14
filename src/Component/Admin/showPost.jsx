import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { deletePost, list, single_post } from "../../Redux/Action/userAction";
import { Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const ShowPost = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const post_list = useSelector((state)=>state?.userReducer?.list?.data?.posts);
    // console.log("post list",post_list);

    const edit_post = (id) =>{
        navigate(`../create-post/${id}`);
        dispatch(single_post(id));

    }
    const delete_post = (id) =>{
        dispatch(deletePost(id))
    }
    useEffect(()=>{
        dispatch(list())
    },[])
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
                    post_list.map((item,id)=>
                    <tr key={id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>
                            <button onClick={()=>edit_post(item.id)}>Edit</button>
                            <button onClick={()=>delete_post(item.id)}>Delete</button>
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