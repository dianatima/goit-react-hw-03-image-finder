import {
    ImageGalleryWrap,
    IdleStatus,
    NoImageWrap,
  } from "./ImageGallery.styled";
  import { ImageGalleryItem } from "../ImageGalleryItem";
  import { ImagesErrorView } from "./ImagesErrorView";
  import { ImagesPendingView } from "./ImagesPendingView";
  import noImage from "./no_image.jpeg";
  
  export const ImageGallery = ({ images, status, error, openModal }) => {
    if (status === "idle") {
      return (
        <IdleStatus>
          There are no images here yet...
          <NoImageWrap src={noImage} width="240" alt="saddog" />
        </IdleStatus>
      );
    }
  
    if (status === "pending") {
      return <ImagesPendingView />;
    }
  
    if (status === "rejected") {
      return <ImagesErrorView message={error.message} />;
    }
  
    if (status === "resolved" && images.length !== 0) {
      return (
        <ImageGalleryWrap>
          {images.map((item) => (
            <ImageGalleryItem key={item.id} image={item} openModal={openModal} />
          ))}
        </ImageGalleryWrap>
      );
    }
  };
  