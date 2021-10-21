import classes from './ModalWindow.module.scss';
import locale from "../../common/locales/en-US.js";

export const ModalWindow = ({ setModalWindowState, imageUrl}) => (
  <div className={classes.modalWindow}>
    <img src={imageUrl} alt="fullPhoto"/>
    <button onClick={() => setModalWindowState(false)}>{locale.close}</button>
  </div>
);