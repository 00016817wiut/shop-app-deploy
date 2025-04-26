import './SearchFilter.css';

const SearchFilter = ({ sortChange }) => {
  return (
    <div className="search_filter">
      <label htmlFor="sort">Сортировать по: </label>
      <select
        name="sort"
        id="sort"
        onChange={(e) => sortChange(e.target.value)}
      >
        <option value="title">Названию</option>
        <option value="price">Цене</option>
        <option value="stock">Наличию</option>
      </select>
    </div>
  );
};

export default SearchFilter;
