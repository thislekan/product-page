import {ReactComponent as ChevronDown} from '../../images/chevron.svg';

const FilterComponent = ({filterValue, setValue}) => {
  return  (
    <div className="filter">
      <div className="filter__content">
        <h3>All Products</h3>
        <p>A 360&#176; look at Lumin</p>
      </div>
      <div className="filter__dropdown">
        <select
          name="filter"
          value={filterValue}
          className="filter__dropdown__select"
          onChange={setValue}
        >
          <option value="" disabled defaultValue>Filter by</option>
          <option value="">All products</option>
          <option value="">Foo</option>
          <option value="">Doo</option>
        </select>
        <span>
          <ChevronDown height='15px' />
        </span>
      </div>
    </div>
  )
}

export default FilterComponent;