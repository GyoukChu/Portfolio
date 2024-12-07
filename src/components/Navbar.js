import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal"; // Blog 임시 준비를 위한 Modal import
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false); // Blog 임시 준비를 위한 Modal 상태 추가

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleCloseModal = () => setShowModal(false); // Blog 임시 준비를 위한 Modal 닫기 함수
  const handleShowModal = () => setShowModal(true); // Blog 임시 준비를 위한 Modal 열기 함수

  return (
    <> {/*Blog 임시 준비를 위한 <>임 */}
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>

              {/* 원래 해두었던 거 <Nav.Item>
                <Nav.Link
                  href="https://soumyajitblogs.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                </Nav.Link>
              </Nav.Item> */}

              <Nav.Item>
                <Nav.Link onClick={handleShowModal}> {/* Blog 임시 준비를 위한 onClick 이벤트 추가 */}
                  <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        {/*Blog 임시 준비를 위한 Modal 추가 */}
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body>The link for my blog is coming soon!</Modal.Body>
      </Modal>
    {/*Blog 임시 준비를 위한 </>임*/}</> 
  );
}

export default NavBar;
