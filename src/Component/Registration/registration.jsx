import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch ,useSelector } from "react-redux";
import { SignUp } from "../../Redux/Action/userAction";
import { useNavigate } from "react-router-dom";
const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.userReducer.data);
    console.log("result",result.data.message[0])
    const onSubmit = (data) => {
        let object = { user : data}
        dispatch(SignUp(object));
        if(result.status === 200){
            alert(`${result.data.message[0]}`)
            navigate("/");
        }
        
    };

    return (
        <>
            <Container>
                <div className="page-heading">
                    {/* <h1>H</h1> */}
                </div>
                <div className="login-form">
                    <div className="form-heading">
                        <h4>Register here....</h4>
                    </div>
                    <div className="form-section">
                        <div className="form">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-field">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="test236@gmail.com"
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
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Confirm_Password"
                                        {...register("confirm_password", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                {errors?.confirm_password?.type === "required" && <p className="error">required*</p>}
                                </div>
                                <div className="form-field">
                                <Button variant="primary" type="submit">
                                    SignUp
                                </Button>
                                <span> if already register<a href="/" >login</a></span>
                                </div> 
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Registration;
