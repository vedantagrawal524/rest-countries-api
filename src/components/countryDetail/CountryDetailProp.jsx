export default function CountryDetailProp(props) {
  let displayValue;

  if (
    props.value === undefined ||
    props.value === null ||
    (Array.isArray(props.value) && props.value.length === 0) ||
    (typeof props.value === "string" && props.value.trim().length === 0)
  ) {
    displayValue = "Undefined";
  } else {
    displayValue = Array.isArray(props.value)
      ? props.value.join(", ")
      : props.value;
  }

  return (
    <div className="text-lm-text-grey-950 dark:text-dm-text-white text-[1rem] leading-5 font-[600]">
      {props.property}:{" "}
      <span className="text-[0.95rem] font-[300] dark:opacity-90">
        {displayValue}
      </span>
    </div>
  );
}
