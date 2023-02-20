import { LoadMoreButton } from "./Button.styled";

export const Button = ({ onLoadMore, page, countPages }) => {
  return (
    <LoadMoreButton type="button" onClick={onLoadMore}>
      Load more ({page}/{countPages})
    </LoadMoreButton>
  );
};
