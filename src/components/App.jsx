import { ToastContainer } from "react-toastify";
import { Component } from "react";
import { fetchImages } from "../services/api";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { AppWrap, IdleStatus, NoImageWrap } from "./App.styled";
import { ImagesErrorView } from "./ImagesErrorView";
import { ImagesPendingView } from "./ImagesPendingView";
import noImage from "./no_image.jpeg";

export class App extends Component {
  state = {
    query: "",
    images: [],
    // loading: false,
    page: 1,
    error: null,
    status: "idle",
    selectedImageUrl: "",
    tags: "",
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: "pending" });
      this.getImages();
    }
  }

  getImages = () => {
    const { query, page, images } = this.state;
    this.setState({ loading: true });

    fetchImages(query, page)
      .then((res) =>
        this.setState((prevState) => {
          return {
            images: [...images, ...res.hits],
            totalHits: res.totalHits,
            status: "resolved",
          };
        })
      )
      .catch((error) => this.setState({ error, status: "rejected" }))
      .finally(() => this.setState({ loading: false }));
  };

  onLoadMore = async () => {
    await this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  openModal = (largeImageURL, tags) => {
    this.setState({ selectedImageUrl: largeImageURL, tags });
  };

  onCloseModal = () => {
    this.setState({ selectedImageUrl: "" });
  };

  onSubmitForm = (inputName) => {
    if (inputName !== this.state.query) {
      this.setState({
        query: inputName,
        images: [],
        page: 1,
      });
    }
  };

  render() {
    const { images, error, status, selectedImageUrl, page, totalHits, tags } =
      this.state;
    let isBtnLoadMore = false;
    let countPages = Math.ceil(totalHits / 12);

    if (totalHits && images.length && page < countPages) {
      isBtnLoadMore = true;
    }

    return (
      <AppWrap>
        <Searchbar onSubmit={this.onSubmitForm} />
        {status === "idle" && (
          <IdleStatus>
            There are no images here yet...
            <NoImageWrap src={noImage} width="240" alt="saddog" />
          </IdleStatus>
        )}
        {status === "pending" && <ImagesPendingView />}

        {status === "rejected" && <ImagesErrorView message={error.message} />}

        {(status === "resolved" && images.length !== 0) && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {isBtnLoadMore && (
          <Button
            page={page}
            onLoadMore={this.onLoadMore}
            countPages={countPages}
          />
        )}
        {selectedImageUrl && (
          <Modal
            selectedImageUrl={selectedImageUrl}
            tags={tags}
            onCloseModal={this.onCloseModal}
          />
        )}
        <ToastContainer autoClose={3000} />
      </AppWrap>
    );
  }
}
