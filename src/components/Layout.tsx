import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import SiteFooter from "./SiteFooter";

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

const Header = styled.header`
  background-color: #1b1b5a;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const SiteTitle = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: white;
  text-decoration: none;

  @media (min-width: 500px) {
    font-size: 3rem;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderLink = styled.a`
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media (min-width: 768px) {
    margin: 0.5rem 1rem;
  }
`;

const HeaderLinkIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const HeaderLinkText = styled.span`
  margin-left: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  color: white;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  width: calc(100% - 2rem);
  max-width: 800px;
  align-self: center;
`;

const Layout: React.FC = (props) => {
  return (
    <SiteWrapper>
      <Header>
        <Link href="/" passHref>
          <SiteTitle>Сказка</SiteTitle>
        </Link>
        <HeaderLinks>
          <HeaderLink href="/files/skazka-podarki-2022.pdf">
            <HeaderLinkText>Каталог</HeaderLinkText>
          </HeaderLink>
          <HeaderLink href="#footer">
            <HeaderLinkText>Где Мы</HeaderLinkText>
          </HeaderLink>
        </HeaderLinks>
      </Header>

      <Main>{props.children}</Main>

      <SiteFooter />
    </SiteWrapper>
  );
};

export default Layout;
