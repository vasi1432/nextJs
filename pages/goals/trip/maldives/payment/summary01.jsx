import { useState, useEffect } from "react";
import Link from "next/link";
const Summary01 = () => {
  const [pay, setPay] = useState(0);
  const [months, setMonths] = useState(0);
  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("result"));
    let b = JSON.parse(localStorage.getItem("months"));
    setPay(a);
    setMonths(b);
  }, []);
  return (
    <div className="gap-4 mt-8 flex flex-col w-full justify-center items-center">
      <div className="font-bold bg-slate-200 w-1/2 p-2 flex justify-between">
        <span>You will pay all at once :</span>
        <span>{Math.floor(pay)} ₹</span>
      </div>

      <div className="font-bold bg-slate-200 w-1/2 p-2 flex justify-between">
        <span>From your bank account :</span>
        <span className="">Salary account XXXX1234</span>
      </div>
      <div className="flex w-full justify-center mt-8 ">
        <Link href=" /home ">
          <button className="  bg-pink-900 text-base text-bold px-2  h-10 rounded-md text-white ">
            Confirm & Pay First Installment
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Summary01;
