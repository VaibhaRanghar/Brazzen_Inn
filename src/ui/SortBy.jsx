import { useSearchParams } from "react-router-dom";
import Select from "./Select";

// eslint-disable-next-line react/prop-types
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  function handleOnChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      onChange={handleOnChange}
      type="white"
      value={sortBy}
    />
  );
}
export default SortBy;
