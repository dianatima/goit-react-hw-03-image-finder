import errorImage from './error.jpeg';
import { ImagesErrorViewWrap } from './ImageGallery.styled';

export function ImagesErrorView({ message }) {
  return (
    <ImagesErrorViewWrap role="alert">
      <h2>{message}</h2>
      <img src={errorImage} width="240" alt="saddog" />
    </ImagesErrorViewWrap>
  );
}
