import * as React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  background-color: #1b1b5a;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const AddressBlock = styled.div`
  padding: 1rem;
`;

const AddressTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 0.5rem;

  address {
    font-family: "Montserrat", sans-serif;
    color: white;
    font-weight: 700;
    text-align: center;
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
  }
`;
const AddressIconContainer = styled.div`
  padding: 0.25rem;
`;
const AddressTextContainer = styled.div``;

const AddressBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  address {
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;

    padding: 0.2rem 0;

    a {
      color: white;
    }
  }
`;
const LeftHalf = styled.div``;
const Divider = styled.div`
  width: 2px;
  min-height: 45px;
  background-color: white;
  margin: 0 0.5rem;
`;
const RightHalf = styled.div``;

const SiteFooter = () => (
  <Footer id="footer">
    <AddressBlock>
      <AddressTop>
        <AddressTextContainer>
          <address>Сказка ждёт вас:</address>
          <address>г. Кокшетау, Ауэзова 191/1</address>
        </AddressTextContainer>
      </AddressTop>
      <AddressBottom>
        <LeftHalf>
          <address>пн-пт: 9:00 - 18:00</address>
          <address>сб-вс: выходной</address>
        </LeftHalf>
        <Divider />
        <RightHalf>
          <address>
            тел: <a href="tel:+7 7162 254545">25-45-45</a>
          </address>
          <address>
            <a href="tel:+7 (7162) 25-67-25">+7 (7162) 25-67-25</a>
          </address>
        </RightHalf>
      </AddressBottom>
    </AddressBlock>

    <AddressBlock>
      <AddressTop>
        <AddressTextContainer>
          <address>Сказка ждёт вас:</address>
          <address>г. Костанай, Карбышева 117</address>
        </AddressTextContainer>
      </AddressTop>
      <AddressBottom>
        <LeftHalf>
          <address>пн-пт: 9:00 - 18:00</address>
          <address>сб-вс: выходной</address>
        </LeftHalf>
        <Divider />
        <RightHalf>
          <address>
            тел: <a href="tel: +7 7142 392427">39-24-27</a>
          </address>
          <address>
            <a href="tel:+7 707 260 2362">+7 707 260 2362</a>
          </address>
        </RightHalf>
      </AddressBottom>
    </AddressBlock>
  </Footer>
);

export default SiteFooter;
