import classes from './App.module.scss';
import {Navigation} from "./components/Navigation/Navigation";
import {Gallery} from "./components/Gallery/Gallery";
import {ModalWindow} from "./components/ModalWindow/ModalWindow";
import {useState} from "react";

function App() {
  const [isModalWindowOpened, setIsModalWindowOpened] = useState(false);
  const [currentFullImageUrl, setCurrentFullImageUrl] = useState('');
  const [dataList, setDataList] = useState([]);

  const onToggleModalWindow = (imageUrl) => {
    setCurrentFullImageUrl(imageUrl);
    setIsModalWindowOpened(!isModalWindowOpened);
  }

  return (
    <div className={classes.App}>
      <Navigation />
      <Gallery onToggleModalWindow={onToggleModalWindow} dataList={dataList} setDataList={setDataList}/>
      {
        isModalWindowOpened ? <ModalWindow imageUrl={currentFullImageUrl} setModalWindowState={setIsModalWindowOpened}/> : null
      }
    </div>
  );
}
export default App;
