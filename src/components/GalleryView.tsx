import React from "react";
import Image from "next/image";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";
import { PresentGalleryItem } from "./GallerySection";

const GalleryWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const GalleryItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;

const CoverImageWrapper = styled.div`
  width: 220px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`;

const OtherImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 220px;
  grid-gap: 5px;
  padding: 10px 0;
`;

const MiniImageWrapper = styled.div`
  max-height: 70px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const MetadataContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Price = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  padding: 0.5rem 0;
`;

const Name = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  padding: 0.5rem 0;
`;

const Weight = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #969696;
  padding: 0.5rem 0;
`;

const TotalText = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

const GalleryView: React.FC<{ presentsToShow: PresentGalleryItem[] }> = ({
  presentsToShow,
}) => {
  return (
    <>
      <TotalText>Показано подарков: {presentsToShow.length}</TotalText>
      <GalleryWrapper>
        {presentsToShow.map((item) => {
          const description = `Новогодний подарок "${item.name}", ${item.weight}гр за ${item.price} тенге.`;
          return (
            <GalleryItemCard key={item.folder}>
              <SimpleReactLightbox>
                <SRLWrapper
                  options={{
                    caption: {
                      captionFontFamily: "Roboto, sans-serif",
                    },
                  }}
                >
                  <CoverImageWrapper>
                    <a
                      href={`/images/presents/${item.folder}/1.jpg`}
                      data-attribute="SRL"
                    >
                      <Image
                        key={item.folder}
                        src={`/images/presents/${item.folder}/thumb/1.jpg`}
                        width={220}
                        height={330}
                        alt={description}
                        loading="eager"
                      />
                    </a>
                  </CoverImageWrapper>
                  <OtherImageContainer>
                    {item?.images?.map((filename) => (
                      <MiniImageWrapper key={`${item.folder}-${filename}`}>
                        <a
                          href={`/images/presents/${item.folder}/${filename}`}
                          data-attribute="SRL"
                        >
                          <img
                            src={`/images/presents/${item.folder}/thumb/${filename}`}
                            width={70}
                            height={70}
                            alt={description}
                          />
                        </a>
                      </MiniImageWrapper>
                    ))}
                  </OtherImageContainer>
                  <MetadataContainer>
                    <Price>{item.price}₸</Price>
                    <Name>{item.name}</Name>
                    <Weight>{item.weight}г</Weight>
                  </MetadataContainer>
                </SRLWrapper>
              </SimpleReactLightbox>
            </GalleryItemCard>
          );
        })}
      </GalleryWrapper>
    </>
  );
};

export default GalleryView;