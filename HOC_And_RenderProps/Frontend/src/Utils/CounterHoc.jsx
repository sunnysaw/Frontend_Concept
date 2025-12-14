import { useState } from "react";

const CounterHoc = (OldComponent) => {
  return function EnhanceComponent(props) {
    const [count, setCount] = useState(0);
    return (
      <OldComponent
        {...props}
        count={count}
        incrementCount={() => setCount(count + 1)
        }
        name = "muskan"
      />
    );
  };
};

export default CounterHoc;


