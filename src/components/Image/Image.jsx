import classes from "./Image.module.scss";

export const Image = ({ id, thumbnailUrl,  albumId, imageUrl, ...props}) => {

  return (
      <div className={classes.image}>
        <img src={thumbnailUrl} alt="photo" onClick={() => {props.onToggleModalWindow(imageUrl)}}/>
        <div className={classes.image__info}>
          <p>id: {id}</p>
          <p>albumId: {albumId}</p>
          <button className={classes.image__button} onClick={props.onDeleteHandler}>X</button>
        </div>
      </div>
    )
  }
