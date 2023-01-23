import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const payment = () => {
  const [result, setResult] = useState(0);
  const [result01, setResult01] = useState(0);
  const [showForm, setShowForm] = useState("");
  const query = useRouter();
  console.log(showForm);

  const handleEmiCalculationFD = () => {
    let a = query.query.amount;
    let b = query.query.months;

    let makeMyTripDiscount = 10000;
    let principal = a - makeMyTripDiscount;
    let sum = 0;
    localStorage.setItem("months", JSON.stringify(b));
    for (let i = 1; i <= b; i++) {
      sum += Math.pow(1 + 0.07 / query.query.months, (b * i) / 12);
    }

    let result = principal / sum;
    setResult(result);
    if (showForm === "Monthky") {
      localStorage.setItem("result", JSON.stringify(result));
    } else {
      localStorage.setItem("result", JSON.stringify(result01));
    }
  };

  const handleEmiCalculationRD = () => {
    let a = query.query.amount;
    let b = query.query.months;
    let c = (a * 0.9) / (1 + ((b / 12) * 7) / 100);
    setResult01(c);
    if (showForm === "Monthly") {
      localStorage.setItem("result", JSON.stringify(result01));
    } else {
      localStorage.setItem("result", JSON.stringify(result));
    }
  };

  useEffect(() => {
    handleEmiCalculationFD();
    handleEmiCalculationRD();
  }, []);

  return (
    <div className="relative flex flex-col  gap4  ">
      <div className="flex  justify-around ">
        <div className="flex items-center gap-8 ">
          <div className="flex flex-col justify-center items-center w-44 gap-4 bg-gray-200  rounded py-8">
            <Image
              src="/MMYT.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <span className="font-bold	text-xs">MakeMyTrip Contributes</span>
            <span className="font-bold	text-xl text-red-900">10%</span>
          </div>
          <div className="text-7xl font-bold">+</div>
          <div className="flex flex-col justify-center items-center w-44 gap-4 bg-gray-200  rounded py-8">
            <Image
              src="/bank.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <span className="font-bold	text-xs">Your Investment Earns</span>
            <span className="font-bold	text-xl text-blue-400">7%</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 m-4">
          <div className="cursor-pointer text-m border-2 border-slate-500 rounded px-4 py-2 ">
            Maldives Gold Package
          </div>
          <div>
            <Image
              src="/pic3.jpeg"
              alt="Picture of the author"
              width={330}
              height={330}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div
          className="flex justify-center gap-32 "
          onChange={(e) => {
            setShowForm(e.target.value);
          }}
        >
          <div className=" flex gap-2">
            <input
              onClick={handleEmiCalculationRD}
              type="radio"
              id="Monthly"
              name="vasi"
              value="Monthly"
            ></input>
            <label className="font-bold 	text-l" for="html">
              Monthly
            </label>
          </div>
          <div className="flex gap-2">
            <input
              onClick={handleEmiCalculationFD}
              type="radio"
              id="All at Once"
              name="vasi"
              value="All at Once"
            ></input>
            <label className="font-bold	text-l" for="css">
              All at Once
            </label>
          </div>
        </div>
        {showForm === "Monthly" ? (
          <div className="gap-4 flex flex-col w-full justify-center items-center">
            <div className="relative font-bold bg-slate-200 w-1/2 p-2 flex justify-between">
              <div className="text-xs text-gray-500 absolute top-3 right-24 ">
                {Math.floor(result)}₹/Month
              </div>
              <span>You Invest :</span>
              <span>{Math.floor(result * query.query.months)}₹</span>
            </div>
            <div className="font-bold bg-slate-200 w-1/2 p-2 flex justify-between">
              <span> MakeMyTrip Contributes :</span>
              <span>{query.query.amount * 0.1}₹</span>
            </div>
            <div className="font-bold bg-slate-200 w-1/2 p-2 flex justify-between">
              <span>You Earn : </span>
              <span>
                {Math.floor(
                  query.query.amount -
                    query.query.amount * 0.1 -
                    result * query.query.months
                )}
                ₹
              </span>
            </div>
            <div className="font-bold text-green-700 bg-green-200 w-1/2 p-2 flex justify-between">
              <span>You Get :</span>
              <span>{query.query.amount}₹</span>
            </div>
            <div className="flex justify-between text-green-700 w-1/2 font-bold">
              <span>Withdraw money anytime</span>
              <span>No compulsion to purchase from brand</span>
            </div>
            <div className="w-1/2 border rounded p-2 ">
              On goal completion, you can buy the package through the MakeMyTrip
              website using a unique voucher code
            </div>
          </div>
        ) : (
          <div className="gap-4 flex flex-col w-full justify-center items-center">
            <div className="font-bold bg-slate-200 w-1/2 p-2 flex justify-between">
              <span>You Invest :</span>
              <span>{Math.floor(result01)}₹</span>
            </div>
            <div className="font-bold bg-slate-200 w-1/2 p-2 flex justify-between">
              <span> MakeMyTrip Contributes :</span>
              <span>{Math.floor(query.query.amount * 0.1)}₹</span>
            </div>
            <div className="font-bold bg-slate-200 w-1/2 p-2 flex justify-between">
              <span>You Earn : </span>
              <span>
                {Math.floor(
                  query.query.amount - query.query.amount * 0.1 - result01
                )}
                ₹
              </span>
            </div>
            <div className="font-bold text-green-700 bg-green-200 w-1/2 p-2 flex justify-between">
              <span>You Get :</span>
              <span>{query.query.amount}₹</span>
            </div>
            <div className="flex justify-between text-green-700 w-1/2 font-bold">
              <span>Withdraw money anytime</span>
              <span>No compulsion to purchase from brand</span>
            </div>
            <div className="w-1/2 border rounded p-2 ">
              On goal completion, you can buy the package through the MakeMyTrip
              website using a unique voucher code
            </div>
          </div>
        )}
      </div>
      <div className="flex w-full justify-center mt-8 mb-8">
        <Link
          href={{
            pathname: `${
              showForm === "Monthly"
                ? "/goals/trip/maldives/payment/summary"
                : "/goals/trip/maldives/payment/summary01"
            } `,
          }}
        >
          <button className="  bg-pink-900 text-base text-bold w-40  h-10 rounded-md text-white ">
            Take me to Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default payment;
