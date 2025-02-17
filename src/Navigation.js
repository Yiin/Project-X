import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class UserInfo extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toogle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                            Home
                        </NavLink>

                        <NavLink className="d-inline p-2 bg-dark text-white" to="UserInfo">
                            UserInfo
                        </NavLink>

                        <NavLink className="d-inline p-2 bg-dark text-white" to="UserRegistry">
                            UserRegistry
                        </NavLink>

                        <NavLink className="d-inline p-2 bg-dark text-white" to="ExplosiveSearchPage">
                            ExplosiveSearchPage
                        </NavLink>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}