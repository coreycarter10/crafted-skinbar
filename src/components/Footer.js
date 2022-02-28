import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1> */}
      <Container>
        <Row>
          <Column>
            <FooterLink href="#">craftedskinbar@gmail.com</FooterLink>
            <FooterLink href="#">(801) 921-1224</FooterLink>
            <FooterLink href="#">
              Located at SanTan Village Marketplace inside The Collab 2268 E
              Williams Field Road Gilbert, Arizon 85295 Suite 2
            </FooterLink>
          </Column>
          {/* <Image href='#' /> */}
          <Column>
            <FooterLink
              href="https://instagram.com/craftedskinbar"
              target="blank"
            >
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Find me on Instagram!
                </span>
              </i>
            </FooterLink>
            <button>Book now!</button>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
