import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { login } from "../../Redux/Action/userAction";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login_api_result = useSelector((state)=>state.userReducer.login_data);
    // console.log(33333333,login_api_result);
    const onSubmit = (data) => { 
        let object = { user : data} 
        dispatch(login(object));
        if(login_api_result.status){
            alert(`${login_api_result.data.message}`);
            window.location.href = "/dashboard";
        }
    };

    return (
        <>
            <Container>
                <div className="page-heading">
                    {/* <h1>Home Component</h1> */}
                </div>
                <div className="login-form">
                    <div className="form-heading">
                        {/* <h4>Login form</h4> */}
                    </div>
                    <div className="form-section">
                        <div className="form">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-field">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="email"
                                        {...register("email", {
                                            required: true,
                                        })} />
                                </Form.Group>
                                {errors?.email?.type === "required" && <p className="error">required*</p>}
                                </div>
                                <div className="form-field">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password"
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                {errors?.password?.type === "required" && <p className="error">required*</p>}
                                </div>
                                <div className="form-field">
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                                <span>Not Register Please <a href="registration" >SignUp </a></span>
                                </div> 
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Home;