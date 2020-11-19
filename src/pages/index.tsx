import React from "react";
import GallerySection from "../components/GallerySection";
import { extractPresentsData } from "../utils/helpers";

export default function Home() {
  const imageData = extractPresentsData();
  return <GallerySection imageData={imageData} />;
}
