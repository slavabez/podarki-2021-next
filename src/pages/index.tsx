import React from "react";
import styled from "styled-components";

import GallerySection from "../components/GallerySection";
import parsedData from "../../public/files/presents_parsed.json";

const PageHeader = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Home() {
  return (
    <>
      <PageHeader>Онлайн каталог</PageHeader>
      <GallerySection imageData={parsedData} />
    </>
  );
}
