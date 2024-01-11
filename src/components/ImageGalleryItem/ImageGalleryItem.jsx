import s from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <li
      className={s.ImageGalleryItem}
      id={id}
      key={id}
      onClick={() => openModal(largeImageURL)}
      style={{ flexBasis: '20%' }}
    >
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItem_image} />
    </li>
  );
};
