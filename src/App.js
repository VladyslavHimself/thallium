import classes from './App.module.scss';
import {Navigation} from "./components/Navigation/Navigation";
import {Gallery} from "./components/Gallery/Gallery";
import {ModalWindow} from "./components/ModalWindow/ModalWindow";
import {useState} from "react";

function App() {
  const [isModalWindowOpened, setIsModalWindowOpened] = useState(false);
  const [currentFullImageUrl, setCurrentFullImageUrl] = useState('');
  const [dataList, setDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const onToggleModalWindow = (imageUrl) => {
    setCurrentFullImageUrl(imageUrl);
    setIsModalWindowOpened(!isModalWindowOpened);
  }

  return (
    <div className={classes.App}>
      <Navigation
        dataList={dataList}
        setDataList={setDataList}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      {
        filteredList.length === 0 ? <Gallery
          onToggleModalWindow={onToggleModalWindow}
          dataList={dataList}
          setDataList={setDataList}
        /> : <Gallery
          onToggleModalWindow={onToggleModalWindow}
          dataList={filteredList}
          setDataList={setFilteredList}
        />
      }
      {
        isModalWindowOpened ? <ModalWindow imageUrl={currentFullImageUrl} setModalWindowState={setIsModalWindowOpened}/> : null
      }
    </div>
  );
}
export default App;
