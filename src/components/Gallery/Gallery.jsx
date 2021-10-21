import classes from "./Gallery.module.scss";
import axios from 'axios';
import {useEffect} from "react";
import {Image} from "../Image/Image";
import locale from "../../common/locales/en-US.js";

const Gallery = ({ dataList, setDataList, onToggleModalWindow }) => {

  const getDataFromServer = async () => {
    try {
      return await axios.get(process.env.REACT_APP_DB_PHOTOS).then((data) => data.data);
    } catch (e) {
      throw new Error(locale.dataNotFound);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getDataFromServer();
      await setDataList(response);
    }
    fetchData();
  }, [setDataList]);

  const onDeleteHandler = (idx) => {
    setDataList(dataList.filter((item) => item.id !== idx));
  };

  return (
    <div className={classes.gallery}>
      {
        dataList.map(e => {
          return (
            <Image
              key={e.id} id={e.id}
              thumbnailUrl={e.thumbnailUrl}
              albumId={e.albumId}
              imageUrl={e.url}
              onDeleteHandler={onDeleteHandler.bind(this, e.id)}
              onToggleModalWindow={onToggleModalWindow}
            />
          );
        })
      }
    </div>
  );
};

export default Gallery;
