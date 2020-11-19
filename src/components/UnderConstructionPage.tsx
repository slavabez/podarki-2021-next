import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const UnderConstructionNotice = styled.div`
  background: #b8b5b9;
  border: 3px solid #b8b5b9;
  box-sizing: border-box;
  border-radius: 29px;

  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3rem;

  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;

const BannerContainer = styled.div`
  width: 90%;
  max-width: 300px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ButtonLink = styled.a`
  padding: 1rem;
  border: 3px solid #9c9afd;
  border-radius: 3rem;
  text-align: center;
  margin-bottom: 1rem;
`;

interface Catalogue {
  name: string;
  size: string;
  url: string;
}

interface UCPProps {
  cats: Catalogue[];
  bannerImage?: any;
}

const UnderConstructionPage: React.FC<UCPProps> = ({ cats, bannerImage }) => {
  return (
    <>
      <BannerContainer>
        <Img fluid={bannerImage} />
      </BannerContainer>
      <UnderConstructionNotice>
        <span>Сайт в разработке</span>
      </UnderConstructionNotice>
      <LinkContainer>
        {cats.map((c) => {
          return (
            <ButtonLink key={c.name} href={c.url}>
              {c.name} - {c.size}
            </ButtonLink>
          );
        })}
      </LinkContainer>
    </>
  );
};

export default UnderConstructionPage;
