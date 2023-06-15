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
        { id: 2, title: "All Headmaster", link: "/principal" },
        { id: 3, title: "Teacher's Information", link: "/teacher" },
        { id: 4, title: "Others Staff", link: "/satff" },
        { id: 5, title: "All student Information", link: "/student" },
        { id: 5, title: "Rules And Regulation", link: "/rules" },
      ],
    },
    {
      id: 3,
      title: "Academic",
      dropdown: [
        { id: 1, title: "All Success student Information", link: "/history" },
      ],
    },
    {
      id: 4,
      title: "Result",
      dropdown: [
        { id: 1, title: "Result Download", link: "/history" },
        { id: 2, title: "Grand Final", link: "/history" },
        { id: 3, title: "Combined Result", link: "/history" },
      ],
    },
    {
      id: 5,
      title: "Admission",
      dropdown: [
        { id: 1, title: "Apply Online", link: "/history" },
        { id: 2, title: "Payment", link: "/history" },
        { id: 3, title: "Admit Card", link: "/history" },
      ],
    },
    {
      id: 6,
      title: "Instruction from Institute",
    },
    {
      id: 7,
      title: "Informaton ",
    },
    {
      id: 8,
      title: "Contact",
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
