import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import GalleryView from "./GalleryView";
import { useEffect } from "react";

export interface PresentGalleryItem {
  folder?: string;
  images?: any[];
  number: number;
  name?: string;
  weight?: number;
  price?: number;
  quantity?: number;
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FilterButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }

  button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    padding: 0.5rem;
    border: 3px solid #e181fa;
    border-radius: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    background-color: transparent;
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #e181fa;
  border-radius: 2rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const FilterTitle = styled.button`
  font-family: "Roboto", sans-serif;
  margin: 0;
  font-weight: 400;
  font-size: 0.9rem;
  padding: 0.5rem;
  text-align: center;
  background-color: transparent;
  border: none;
  width: 100%;
`;

const FilterBoxWrapper = styled.div`
  width: 100%;
  border-top: 2px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterCheckbox = styled.div`
  padding: 5px;
  display: flex;
  width: 150px;
  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

interface FilterOptions {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
}

interface Limit {
  from: number;
  to: number;
}

const setLimits: { [name: string]: Limit } = {
  first: {
    from: 0,
    to: 800,
  },
  second: {
    from: 800,
    to: 1500,
  },
  third: {
    from: 1500,
    to: 2500,
  },
  fourth: {
    from: 2500,
    to: 99999,
  },
};

const SettingsSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
  }
`;

const BannerImage = styled.div`
  width: 200px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const BannerAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const GallerySection: React.FC<{
  imageData: PresentGalleryItem[];
}> = ({ imageData }) => {
  let initialBrowserWidth = 0;
  if (typeof window !== "undefined") {
    initialBrowserWidth = window.innerWidth;
  }
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [options, setOptions] = React.useState<FilterOptions>({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const [sort, setSort] = React.useState(`none`);

  useEffect(() => {
    if (initialBrowserWidth >= 768) {
      setIsFilterOpen(true);
    }
  }, []);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const calculateFilter: (
    imageData: PresentGalleryItem[],
    options: FilterOptions,
    sort: string
  ) => PresentGalleryItem[] = (imageData, options, sort) => {
    // Create the limits
    let activeLimits: Limit[] = [];
    // Determine which limits are currently active
    Object.entries(options).forEach(([key, value]) => {
      if (value) activeLimits.push(setLimits[key]);
    });

    // If no active filters are selected, don't filter
    if (activeLimits.length === 0) activeLimits.push({ from: 0, to: 99999 });

    // Filter out products based on the limits
    let items = imageData.filter((value) => {
      // For each limit, check if current value satisfies at least one
      for (const limit of activeLimits) {
        if (
          value.price &&
          value.price >= limit.from &&
          value.price <= limit.to
        ) {
          return true;
        }
      }
      return false;
    });

    // Now sort, if needed
    if (sort === `cheap`) {
      return items.sort((a, b) => {
        if (a.price && b.price) {
          return a.price - b.price;
        } else {
          return -1;
        }
      });
    } else if (sort === `expensive`) {
      return items.sort((a, b) => {
        if (a.price && b.price) {
          return b.price - a.price;
        } else {
          return -1;
        }
      });
    }

    return items;
  };

  const presentsToShow = React.useMemo(
    () => calculateFilter(imageData, options, sort),
    [imageData, options, sort]
  );

  const handleInputChange = (e: any) => {
    setOptions({ ...options, [e.target.name]: e.target.checked });
  };

  return (
    <Section>
      <SettingsSection>
        <FilterSection>
          <FilterTitle onClick={toggleFilter}>Фильтр по цене</FilterTitle>
          {isFilterOpen ? (
            <FilterBoxWrapper>
              <FilterCheckbox>
                <label>
                  <input
                    name="first"
                    checked={options.first}
                    onChange={handleInputChange}
                    type="checkbox"
                  />
                  250 - 800₸
                </label>
              </FilterCheckbox>
              <FilterCheckbox>
                <label>
                  <input
                    name="second"
                    checked={options.second}
                    onChange={handleInputChange}
                    type="checkbox"
                  />
                  800 - 1500₸
                </label>
              </FilterCheckbox>
              <FilterCheckbox>
                <label>
                  <input
                    name="third"
                    checked={options.third}
                    onChange={handleInputChange}
                    type="checkbox"
                  />
                  1500 - 2500₸
                </label>
              </FilterCheckbox>
              <FilterCheckbox>
                <label>
                  <input
                    name="fourth"
                    checked={options.fourth}
                    onChange={handleInputChange}
                    type="checkbox"
                  />
                  2500₸+
                </label>
              </FilterCheckbox>
            </FilterBoxWrapper>
          ) : null}
        </FilterSection>
        <BannerAndButtons>
          <BannerImage>
            <Image
              src="/images/2021_image.png"
              alt="Промо баннер подарки 2021"
              width={200}
              height={200}
            />
          </BannerImage>
          <FilterButtons>
            <button
              onClick={() => {
                setSort(`cheap`);
              }}
            >
              Сначала дешевле
            </button>
            <button
              onClick={() => {
                setSort(`expensive`);
              }}
            >
              Сначала дороже
            </button>
          </FilterButtons>
        </BannerAndButtons>
      </SettingsSection>

      <GalleryView presentsToShow={presentsToShow} />
    </Section>
  );
};

export default GallerySection;
