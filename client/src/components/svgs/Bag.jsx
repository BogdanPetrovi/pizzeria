import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Bag () {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return(
    <div className="rounded-full bg-transparent border-2 border-[#f99a0c] h-[48px] w-[48px] flex justify-center items-center pointer" onClick={() => setIsCartOpen(!isCartOpen)}>
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        className="transparent"
        fill="#f99a0c"
      >
        <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z" />
      </svg>
    </div>
  )

}
export default Bag;