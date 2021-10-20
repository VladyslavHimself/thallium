import classes from './ModalWindow.module.scss';

export const ModalWindow = ({ setModalWindowState, ...props}) => {

  return (
    <div className={classes.modalWindow}>
      <img src={props.imageUrl} alt="fullPhoto"/>
      <button onClick={() => setModalWindowState(false)}>Close</button>
    </div>
  );
};