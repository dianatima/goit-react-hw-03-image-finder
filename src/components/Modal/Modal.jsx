import { Overlay, ModalWrap } from "./Modal.styled";
import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) this.props.onCloseModal();
  };

  render() {
    const { selectedImageUrl, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWrap>
          <img src={selectedImageUrl} alt={tags} />
        </ModalWrap>
      </Overlay>,
      modalRoot
    );
  }
}
