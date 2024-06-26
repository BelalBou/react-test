import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  // let scaleType;
  // if (careType === "light") {
  //   scaleType = <img src={Sun} alt="sun-icon" />;
  // } else {
  //   scaleType = <img src={Water} alt="water-icon" />;
  // }

  return (
    <div>
      {range.map(
        (rangeElem) =>
          scaleValue >= rangeElem && (
            <span key={rangeElem.toString()}>{scaleType}</span>
          )
      )}
    </div>
  );
}

export default CareScale;
