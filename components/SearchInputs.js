import styles from "../styles/SearchInputs.module.scss";

const SearchInputs = ({ search, setSearch }) => {
  return (
    <thead>
      <tr>
        <th></th>
        <th>
          <input
            type="text"
            placeholder="by price from"
            value={search.priceFrom}
            onChange={(e) =>
              setSearch({ ...search, priceFrom: e.target.value })
            }
            className={styles.input}
          />
        </th>
        <th>
          <input
            type="text"
            placeholder="search by brand"
            value={search.brand}
            onChange={(e) => setSearch({ ...search, brand: e.target.value })}
            className={styles.input}
          />
        </th>
        <th>
          <input
            type="text"
            placeholder="by model"
            value={search.model}
            onChange={(e) => setSearch({ ...search, model: e.target.value })}
            className={styles.input}
          />
        </th>
        <th>
          <input
            type="text"
            placeholder="by year"
            value={search.productionYear}
            onChange={(e) =>
              setSearch({ ...search, productionYear: e.target.value })
            }
            className={styles.input}
          />
        </th>
        <th>
          <input
            type="text"
            placeholder="search by body"
            value={search.body}
            onChange={(e) => setSearch({ ...search, body: e.target.value })}
            className={styles.input}
          />
        </th>
        <th>
          <input
            type="text"
            placeholder="by mileage from"
            value={search.mileageFrom}
            onChange={(e) =>
              setSearch({ ...search, mileageFrom: e.target.value })
            }
            className={styles.input}
          />
        </th>
      </tr>
      <tr>
        <th></th>
        <th>
          <input
            type="text"
            placeholder="by price to"
            value={search.priceTo}
            onChange={(e) => setSearch({ ...search, priceTo: e.target.value })}
            className={styles.input}
          />
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>
          <input
            type="text"
            placeholder="by mileage to"
            value={search.mileageTo}
            onChange={(e) =>
              setSearch({ ...search, mileageTo: e.target.value })
            }
            className={styles.input}
          />
        </th>
      </tr>
    </thead>
  );
};

export default SearchInputs;
