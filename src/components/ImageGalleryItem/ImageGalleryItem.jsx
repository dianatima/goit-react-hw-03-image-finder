import {
  ImageGalleryItemWrap,
  ImageGalleryItemImage,
} from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({
  image: { tags, webformatURL, largeImageURL },
  openModal,
}) => {
  return (
    <ImageGalleryItemWrap>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(largeImageURL, tags)}
      />
    </ImageGalleryItemWrap>
  );
};
