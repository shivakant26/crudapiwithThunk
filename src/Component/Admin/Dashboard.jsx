import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    const logout = () => {
        localStorage.removeItem('token');
    }
    return (
        <>
            <div className="admin-page">
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="dashboard-heading">
                                <h1>Admin Dashbord</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="logout">
                                <a href="/" onClick={logout}>logout</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="dashboard-section">
                <Row>
                    <Col sm={3}>
                        <div className="sidebar-section">
                            <div className="side-bar">
                                <ul>
                                    <li>
                                        <Link to="/dashboard/create-post">Create Post</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/show-post">Show Post</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/setting">Setting</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <div className="component-content">
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </div>



        </>
    )
}


export default Dashboard;