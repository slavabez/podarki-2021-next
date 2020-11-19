import { useRef, useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import data from "../../public/files/presents_data.json";
import { PresentGalleryItem } from "../components/GallerySection";

export const dissectPresentImages: (
  rawGraphqlData: any
) => PresentGalleryItem[] = (rawGraphqlData) => {
  // Create a map for storing the image data
  const presentsMap = new Map<string, PresentGalleryItem>();
  const rawJsonData = getPresentsData();
  for (const imageElement of rawGraphqlData) {
    // First, get the folder name
    const folderName = imageElement.relativePath.split(`/`)[0];
    const fileName = imageElement.relativePath.split(`/`)[1];
    if (presentsMap.has(folderName)) {
      // Add image to the map element, save image
      const existingElement: PresentGalleryItem = presentsMap.get(
        folderName
      ) || { number: -1 };
      let coverImage = undefined;
      let image = undefined;
      if (fileName === `1.jpg`) {
        coverImage = imageElement.childImageSharp;
      } else {
        image = imageElement.childImageSharp;
      }
      if (coverImage) existingElement.coverImage = coverImage;
      if (image) existingElement.images?.push(image);
    } else {
      // Create a new map element
      // Determine if the image is a cover image
      let coverImage = undefined;
      let image = undefined;
      if (fileName === `1.jpg`) {
        coverImage = imageElement.childImageSharp;
      } else {
        image = imageElement.childImageSharp;
      }
      const newElement: PresentGalleryItem = {
        relativePath: folderName,
        images: [],
        number: -1,
      };
      if (coverImage) newElement.coverImage = coverImage;
      if (image) newElement.images?.push(image);
      // Find and set the metadata (price, name, etc)
      const metaInfo = rawJsonData.find((i) => i.folder === folderName);
      newElement.name = metaInfo?.name;
      newElement.number = metaInfo?.number || -1;
      newElement.price = metaInfo?.price;
      newElement.weight = metaInfo?.weight;
      newElement.quantity = metaInfo?.quantity;
      presentsMap.set(folderName, newElement);
    }
  }
  const arr = Array.from(presentsMap.values());
  return arr.sort((a, b) => a.number - b.number);
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

export function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

export function useMeasure() {
  const ref = useRef<any>();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [{ ref }, bounds];
}
