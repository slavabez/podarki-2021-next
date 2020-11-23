import data from "../../public/files/presents_data.json";
import { PresentGalleryItem } from "../components/GallerySection";

export const extractPresentsData: () => PresentGalleryItem[] = () => {
  // Create a map for storing the image data
  const rawJsonData = getPresentsData();
  const extracted: PresentGalleryItem[] = rawJsonData.map((orig: any) => {
    // Fill up image array with image file names
    const totalImages = Number.parseInt(orig.quantity) || 1;
    let fileNames: string[] = [];
    for (let i = 2; i <= totalImages; i++) {
      fileNames.push(`${i}.jpg`);
    }
    return {
      ...orig,
      images: fileNames,
    };
  });
  return extracted.sort((a, b) => a.price - b.price);
};

interface JsonPresentItem {
  number: number;
  name: string;
  weight: number;
  price: number;
  quantity: number;
  folder: string;
}

export const getPresentsData: () => JsonPresentItem[] = () => {
  return data;
};
