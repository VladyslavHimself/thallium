import classes from './SearchBar.module.scss';
import {useState} from "react";
import locale from "../../common/locales/en-US.js";

export const SearchBar = ({ dataList, setFilteredList }) => {

  const [searchInputValue, setSearchInputValue] = useState('');

  const onChangeInputHandler = (inputValue) => {
    setSearchInputValue(inputValue);
  };

  const onClickSearchHandler = () => {

    const filteredData = [];

    dataList.map((e) => {
      if (e.albumId === parseInt(searchInputValue)) {
        filteredData.push(e);
      }
    });

    setFilteredList(filteredData);
  };

  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        className={classes.searchBar__input}
        placeholder={locale.enterAlbumId}
        onChange={e => onChangeInputHandler(e.target.value)}
      />
      <button className={classes.searchBar__button} onClick={onClickSearchHandler}>Search</button>
    </div>
  );
};