import classes from "./Navigation.module.scss";
import {SearchBar} from "../SearchBar/SearchBar";

export const Navigation = ({ dataList, setDataList, filteredList, setFilteredList }) => (
  <nav className={classes.nav}>
    <h1>Thallium task</h1>
    <SearchBar
      dataList={dataList}
      setDataList={setDataList}
      filteredList={filteredList}
      setFilteredList={setFilteredList}
    />
  </nav>
);