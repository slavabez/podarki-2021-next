import { useRef, useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
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
  return extracted.sort((a, b) => a.number - b.number);
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
