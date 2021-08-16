export const DropDowns = (props) => (
  <select
    name={props?.name}
    value={props?.value || ""}
    className={props?.classProps}
    onChange={props?.valueFunc}
  >
    <option disabled defaultValue>
      {props?.initialValue}
    </option>
    {props?.data?.map((option, index) => (
      <option vlaue={option} key={index}>
        {option}
      </option>
    ))}
  </select>
);
