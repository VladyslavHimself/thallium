import classes from './Image.module.scss';
import locale from "../../common/locales/en-US.js";

export const Image = ({
  id,
  thumbnailUrl,
  albumId,
  imageUrl,
  onToggleModalWindow,
  onDeleteHandler
}) => (
  <div className={classes.image}>
    <img src={thumbnailUrl} alt={locale.photo} onClick={() => {onToggleModalWindow(imageUrl); }} />
    <div className={classes.image__info}>
      <p>{locale.id}: {id}</p>
      <p>{locale.albumId}: {albumId}</p>
      <button className={classes.image__button} onClick={ onDeleteHandler }>X</button>
    </div>
  </div>
);
