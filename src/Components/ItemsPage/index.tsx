import React, { useEffect, useState } from "react";
import styles from "./itemsPage.module.scss";
import Table from "../index";
import { columns } from "./constants";
import { CategoryItem } from "./types";
import Loading from "../Loading/Loading";

const ItemsPage = () => {
  const [data, setData] = useState<CategoryItem[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sumData, setSumData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      const res = await fetch(
        `https://api.dev.thedematerialised.com/api/nfts?limit=${limit}&offset=${offset}`
      );
      const categories = await res.json();
      setData(categories.list);
      setSumData(categories.amount);
      setIsLoading(true);
      console.log(categories);
    };
    fetchData();
  }, [offset, limit]);

  const next = () => {
    setOffset((prev) => {
      if (prev < sumData - limit) {
        return prev + limit;
      }
      return prev;
    });
  };

  const back = () => {
    if (offset > 0) {
      return setOffset((prev) => prev - limit);
    }
    return setOffset(0);
  };

  return (
    <div className={styles.itemsTable}>
      <span className={styles.header}>Items</span>

      {isLoading ? <Table data={data} columns={columns} /> : <Loading />}

      <div className={styles.navTable}>
        <span className={styles.infoPages}>
          Страница {1 + Math.floor(offset / limit)} из {Math.ceil(sumData / limit)}
        </span>
        <div className={styles.optionsTable}>
          <div className={styles.list}>
            <label>Строк на странице: </label>
            <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
          <div className={styles.button}>
            <button onClick={back}>{'< '}back</button>
            <button onClick={next}>next {' >'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
