import classes from "./Gallery.module.scss";
import axios from 'axios';
import {useEffect} from "react";
import {Image} from "../Image/Image";


export const Gallery = ({ dataList, setDataList, onToggleModalWindow }) => {

  const getDataFromServer = async () => {
    try {
      return await axios.get(process.env.REACT_APP_DB_PHOTOS).then(data => data.data);
    } catch (e) {
      throw new Error('Data not found!');
    }

  }

  useEffect(() => {
    async function fetchData() {
      let response = await getDataFromServer();
      await setDataList(response);
    }
    fetchData();
  }, []);


  const onDeleteHandler = (idx) => {
    setDataList(dataList.filter(item => {
      return item.id !== idx;
    }));
  }

  return (
    <div className={classes.gallery}>
      {
        dataList.map(e => {
          return <Image
            key={e.id} id={e.id}
            thumbnailUrl={e.thumbnailUrl}
            albumId={e.albumId}
            imageUrl={e.url}
            onDeleteHandler={onDeleteHandler.bind(this, e.id)}
            onToggleModalWindow={onToggleModalWindow}
          />
        })
      }
    </div>
  );
};