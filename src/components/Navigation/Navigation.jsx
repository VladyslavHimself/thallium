import classes from "./Navigation.module.scss";
import {SearchBar} from "../SearchBar/SearchBar";
import locale from "../../common/locales/en-US.js";

export const Navigation = ({ dataList, setDataList, filteredList, setFilteredList }) => (
  <nav className={classes.nav}>
    <h1>{locale.pageTitle}</h1>
    <SearchBar
      dataList={dataList}
      setDataList={setDataList}
      filteredList={filteredList}
      setFilteredList={setFilteredList}
    />
  </nav>
);