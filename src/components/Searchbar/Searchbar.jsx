import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import { FaSearch } from "react-icons/fa";
import {
  SearchbarWrap,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from "./Searchbar.styled";

export class Searchbar extends Component {
  state = {
    inputName: "",
  };

  handleChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ inputName: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputName.trim() === "") {
      toast.warn("🦄 Please enter something");
      return;
    }
    this.props.onSubmit(this.state.inputName.toLocaleLowerCase());
    this.reset();
  };

  reset = () => {
    this.setState({ inputName: "" });
  };

  render() {
    return (
      <>
        <SearchbarWrap>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <SearchFormButtonLabel>
                <FaSearch />
              </SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              type="text"
              autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
              value={this.state.inputName}
              onChange={this.handleChange}
            />
          </SearchForm>
        </SearchbarWrap>
      </>
    );
  }
}
