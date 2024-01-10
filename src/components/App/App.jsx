import React from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends React.Component {
  state = {
    searchText: '',
  };
  handleFormSubmit = searchText => {
    this.setState({ searchText });
  };
  // handleSearch = searchText => {
  //   this.setState({ searchText });
  // };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery />
      </>
    );
  }
}
