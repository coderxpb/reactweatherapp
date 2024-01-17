import { useState } from "react";
import style from "./Searchbar.module.scss";
import SearchIcon from "../../assets/icons/search.svg";
const Searchbar = (props) => {
  const { onSearch, errorMsg, placeholder } = props;
  const [searchText, setSearchText] = useState("");

  return (
    <div style={{ marginTop: 8 }}>
      <div className={style.searchbar}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={style.searchInput}
          placeholder={placeholder}
        ></input>

        <div onClick={() => onSearch(searchText)} className={style.searchButton}>
          <img src={SearchIcon} />
        </div>
      </div>
      <p
        className={style.errorMsg}
        style={{ visibility: errorMsg ? "visible" : "hidden" }}
      >
        {errorMsg || "def"}
      </p>
    </div>
  );
};

export default Searchbar;
