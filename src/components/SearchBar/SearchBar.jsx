import classes from './SearchBar.module.scss';
import {useState} from "react";

export const SearchBar = ({ dataList, setDataList, filteredList, setFilteredList }) => {

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

    console.log(filteredData);
  };

  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        className={classes.searchBar__input}
        placeholder={'Enter album id'}
        onChange={e => onChangeInputHandler(e.target.value)}
      />
      <button className={classes.searchBar__button} onClick={onClickSearchHandler}>Search</button>
    </div>
  );
};