import { asClasses } from "@/utils";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Spin from "../Spin/Spin";

const overlayStyle = asClasses([
  "fixed",
  "left-0",
  "top-0",
  "z-50",
  "flex",
  "h-full",
  "w-full",
  "items-center",
  "justify-center",
  "bg-black",
  "bg-opacity-10",
]);

function SpinOverlay() {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return createPortal(
    <div className={overlayStyle} data-testid="spin-overlay">
      <Spin />
    </div>,
    document.body
  );
}

export default SpinOverlay;
