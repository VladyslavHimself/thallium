import React, { useState } from 'react';
import classes from './App.module.scss';
import { Navigation } from './components/Navigation/Navigation';
import { ModalWindow } from './components/ModalWindow/ModalWindow';

const Gallery = React.lazy(() => import('./components/Gallery/Gallery'));

const App = () => {
  const [isModalWindowOpened, setIsModalWindowOpened] = useState(false);
  const [currentFullImageUrl, setCurrentFullImageUrl] = useState('');
  const [dataList, setDataList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const onToggleModalWindow = (imageUrl) => {
    setCurrentFullImageUrl(imageUrl);
    setIsModalWindowOpened(!isModalWindowOpened);
  };

  return (
    <div className={classes.app}>
      <Navigation
        dataList={dataList}
        setDataList={setDataList}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
        {
          filteredList.length === 0 ? (
            <React.Suspense fallback={<h4>Loading...</h4>}>
              <Gallery
                onToggleModalWindow={onToggleModalWindow}
                dataList={dataList}
                setDataList={setDataList}
              />
            </React.Suspense>
          ) : (
            <Gallery
              onToggleModalWindow={onToggleModalWindow}
              dataList={filteredList}
              setDataList={setFilteredList}
            />
          )
        }
      {
        isModalWindowOpened && (
          <ModalWindow
            imageUrl={currentFullImageUrl}
            setModalWindowState={setIsModalWindowOpened}
          />
        )
      }
    </div>
  );
}
export default App;
