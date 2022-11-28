import { Button } from "antd";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function IncDecCounter() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num >= 0) {
      setNum(Number(num) + 1);
    }
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <div className="counter-field d-flex align-items-center justify-content-between">
      <Button
        icon={<AiOutlineMinus />}
        onClick={decNum}
        className="dec-num-btn"
      />
      <p>{num}</p>
      <Button
        icon={<AiOutlinePlus />}
        onClick={incNum}
        className="inc-num-btn"
      />
    </div>
  );
}

export default IncDecCounter;
