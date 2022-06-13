import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { create_post, single_post, update_post } from "../../Redux/Action/userAction";
import { useNavigate, useParams } from "react-router-dom";

const user_id = localStorage.getItem("userid");
const CreatePost = () => {
    const id = useParams();
    const navigate = useNavigate();
    console.log("current_id", id)
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const dispatch = useDispatch();
    const create_post_data = useSelector((state) => state?.userReducer?.create_post)
    const single_post_show = useSelector((state) => state?.userReducer?.single_post?.data?.post)
    console.log("single_post_Data", single_post_show);

    const onSubmit = (data) => {
        data["user_id"] = user_id;
        let object = { post: data }
        if (id) {
                dispatch(update_post(id,data))
        } else {

            dispatch(create_post(object));
            if (create_post_data.status === 200) {
                alert(`${create_post_data.data.message[0]}`);
            }
        }
        navigate("../show-post")
    }

    useEffect(() => {
        if (single_post_show) {
            setValue('title', single_post_show?.title)
            setValue('description', single_post_show?.description)
        }
    }, [single_post_show])
    return (
        <div>
            <Container>
                <div className="content-heading">
                    {
                        single_post_show ? <h3>Update post</h3> : <h3>Create post</h3>
                    }

                    <div className="create-post-form">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-field">
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Control type="text" placeholder="title"
                                        {...register("title", {
                                            required: true,
                                        })} />
                                </Form.Group>
                                {errors?.title?.type === "required" && <p className="error">required*</p>}
                            </div>
                            <div className="form-field">
                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Control type="text" placeholder="Description"
                                        {...register("description", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                {errors?.description?.type === "required" && <p className="error">required*</p>}
                            </div>
                            <div className="form-field">
                                <Button variant="primary" type="submit">
                                    {
                                        single_post_show ? "Update post" : "Create post"
                                    }

                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default CreatePost;