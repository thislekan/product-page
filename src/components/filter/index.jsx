import { ReactComponent as ChevronDown } from "../../images/chevron.svg";
import { DropDowns } from "../reusabales";

const FilterComponent = ({ filterValue, setValue }) => {
  return (
    <div className="filter">
      <div className="filter__content">
        <h3>All Products</h3>
        <p>A 360&#176; look at Lumin</p>
      </div>
      <div className="filter__dropdown">
        <DropDowns
          name="filter"
          value={filterValue}
          classProps="filter__dropdown__select"
          valueFunc={setValue}
          initialValue="Filter by"
          data={["All Products", "Foo", "Doo"]}
        />
        <span>
          <ChevronDown height="15px" />
        </span>
      </div>
    </div>
  );
};

export default FilterComponent;
