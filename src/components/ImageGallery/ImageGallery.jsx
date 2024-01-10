import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
// import { getFotos } from 'components/service/api';

export class ImageGallery extends React.Component {
  //   state = {};
  //   componentDidUpdate(prevProps, prevState) {
  //     console.log(this.props);
  //     if (prevProps.searchText !== this.state.prevState) {
  //       getFotos();
  //     }
  //   }
  render() {
    return (
      <ul className={s.ImageGallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}
