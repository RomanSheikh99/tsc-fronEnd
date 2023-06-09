import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

const SiteNav = () => {
  const navLinks = [
    { id: 1, title: "Home", link: "/home" },
    {
      id: 2,
      title: "About",
      dropdown: [
        { id: 1, title: "History", link: "/history" },
        { id: 2, title: "Principal", link: "/principal" },
        { id: 3, title: "Teacher", link: "/teacher" },
        { id: 4, title: "Staff", link: "/satff" },
        { id: 5, title: "Student", link: "/student" },
      ],
    },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand
          style={{ borderRight: "1px dotted #333", paddingRight: "5px" }}
          href="#"
        >
          <FaHome />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((navLink) => {
              if (!navLink.dropdown) {
                return (
                  <Nav.Link
                    key={navLink.id}
                    style={{ borderRight: "1px dotted #333" }}
                    href={navLink.link}
                  >
                    {navLink.title}
                  </Nav.Link>
                );
              } else {
                return (
                  <NavDropdown
                    style={{ borderRight: "1px dotted #333" }}
                    title={navLink.title}
                    key={navLink.id}
                    id="collasible-nav-dropdown"
                  >
                    {navLink.dropdown.map((link) => {
                      return (
                        <NavDropdown.Item key={link.id} href={link.link}>
                          {link.title}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNav;
