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
      <Container>
        <Row>
          <Column>
            <p>craftedskinbar@gmail.com</p>
            <p>(801) 921-1224</p>
          </Column>
          {/* <Image href='#' /> */}
          <Column>
            <FooterLink
              href="https://instagram.com/craftedskinbar"
              target="blank"
            >
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Follow me on Instagram!
                </span>
              </i>
            </FooterLink>
            <FooterLink
              href="https://www.google.com/maps/place/2268+E+Williams+Field+Rd,+Gilbert,+AZ+85295/@33.3107693,-111.7426649,18z/data=!4m5!3m4!1s0x872bad7c1e8a1a35:0x2f4763993b111fe2!8m2!3d33.3107859!4d-111.7416778"
              target="blank"
            >
              2268 E Williams Field Road Gilbert, Arizona 85295 Suite 2
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
