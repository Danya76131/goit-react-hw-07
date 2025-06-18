import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, setNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
