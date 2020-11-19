import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";
import { extractPresentsData } from "../utils/helpers";

export default function Home() {
  const imageData = extractPresentsData();
  return (
    <Layout>
      <Head>
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
      </Head>
      <GallerySection imageData={imageData} />
    </Layout>
  );
}
