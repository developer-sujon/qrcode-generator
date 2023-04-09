import React, {Component, Fragment} from 'react';
import './masterLayout.css'
import {Button, Container, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {
    AiOutlineCloudServer, AiOutlineHome, AiOutlineShop,
    BiImport,
    BsArrowsFullscreen,
    BsShieldLock,
    FaBars,
    FaKeyboard,
    FaRegUser,
    FaTools,
    FiGlobe, GrDeliver, GrLicense,
    GrResources, IoAppsSharp, IoLogoBuffer, MdDeviceHub,
    MdDevices, MdDevicesOther, MdQrCode,
    RiDashboardFill,
    RiDatabase2Fill, RiShieldKeyholeLine,
    RiShoppingBag3Line, VscKey
} from "react-icons/all";
import  sidebarLogo from './sidebarLogo.svg'


class MasterLayout extends Component {

    constructor() {
        super();
        this.state={
            isFullScreen:false,
        }
    }


    MenuBarClickHandler=()=>{
        let  sideNav=this.sideNav
        let  content=this.content
        let  topNav=this.topNav
        if(sideNav.classList.contains("side-nav-open")){

            sideNav.classList.add("side-nav-close")
            sideNav.classList.remove("side-nav-open")

            content.classList.add("content-expand")
            content.classList.remove("content")

            topNav.classList.add("top-navbar-expand")
            topNav.classList.remove("top-navbar")
        }
        else {
            sideNav.classList.remove("side-nav-close")
            sideNav.classList.add("side-nav-open")

            content.classList.remove("content-expand")
            content.classList.add("content")

            topNav.classList.remove("top-navbar-expand")
            topNav.classList.add("top-navbar")
        }
    }

    FullScreen=()=>{
        if(this.state.isFullScreen===true){
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
            this.setState({isFullScreen:false})
        }
        else {
            let elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
            this.setState({isFullScreen:true})
        }
    }



    render() {
        return (
            <Fragment>
                <div>
                    <Navbar ref={(div)=>{this.topNav=div}} className=" fixed-top top-navbar ">
                        <Container fluid={true}>
                            <Navbar.Brand onClick={this.MenuBarClickHandler} >
                               <Button variant={"success"}> <FaBars/></Button>
                            </Navbar.Brand>
                            <Button onClick={this.FullScreen} variant={"success"}> <BsArrowsFullscreen/></Button>
                        </Container>
                    </Navbar>

                    <div ref={(div)=>{this.sideNav=div}} className="side-nav-open  ">



                        <div className="side-nav-top text-center bg-light ">
                            <Link to="/" className="text-center">
                                <img alt="" className="side-nav-logo" src={sidebarLogo}/>
                            </Link>
                        </div>

                        <NavLink exact={true} activeClassName="side-bar-item-active" to="/"  className="side-bar-item">
                            <AiOutlineHome className="side-bar-item-icon"/>
                            <span className="side-bar-item-caption">Home</span>
                        </NavLink>

                        <NavLink exact={true} activeClassName="side-bar-item-active" to="/SingleQR"  className="side-bar-item">
                            <MdQrCode className="side-bar-item-icon"/>
                            <span className="side-bar-item-caption">Single Bar code</span>
                        </NavLink>




                        <span className="d-flex m-2">
                            <label className="side-bar-group-label">Settings</label>
                            <hr className="bg-secondary w-75 m-auto"/>
                        </span>

                    </div>
                    <div ref={(div)=>{this.content=div}} className="content">
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MasterLayout;