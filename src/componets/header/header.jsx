import React, { useRef } from "react";
import styles from "./header.module.css";
function Header({ onSearch }) {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const inputSearch = inputRef.current.value;
    inputSearch && onSearch(inputSearch);
    inputRef.current.value = "";
  };
  return (
    <header className={styles.header}>
      <a href="#">
        <i className={styles.logo} className="fab fa-youtube"></i>
        <span className={styles.title}>Youtube</span>
      </a>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          ref={inputRef}
          type="text"
          placeholder="검색"
        />
        <button className={styles.button}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
}

export default Header;
