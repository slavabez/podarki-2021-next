import styled from "styled-components";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Сказка - Новогодние подарки и кульки 2021</title>
        <meta
          name="title"
          content="Сказка - Новогодние подарки и кульки 2021"
        />
        <meta
          name="description"
          content="Детские новогодние подарки, новогодние кульки со сладостями в г. Кокшетау, г. Костанай и г. Петропавловск. Новогодние кульки с конфетами и шоколадом из Казахстана и России"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skazka-podarki.kz/" />
        <meta
          property="og:title"
          content="Сказка - Новогодние подарки и кульки 2021"
        />
        <meta
          property="og:description"
          content="Детские новогодние подарки, новогодние кульки со сладостями в г. Кокшетау, г. Костанай и г. Петропавловск. Новогодние кульки с конфетами и шоколадом из Казахстана и России"
        />
        <meta
          property="og:image"
          content="https://skazka-podarki.kz/share_image_wide.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://skazka-podarki.kz/" />
        <meta
          property="twitter:title"
          content="Сказка - Новогодние подарки и кульки 2021"
        />
        <meta
          property="twitter:description"
          content="Детские новогодние подарки, новогодние кульки со сладостями в г. Кокшетау, г. Костанай и г. Петропавловск. Новогодние кульки с конфетами и шоколадом из Казахстана и России"
        />
        <meta
          property="twitter:image"
          content="https://skazka-podarki.kz/share_image_wide.png"
        />
      </Helmet>
      <GallerySection imageData={[]} />
    </Layout>
  );
}
