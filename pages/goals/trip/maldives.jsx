import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Maldives = () => {
  const [months, setMonths] = useState(1);
  const [amount, setAmount] = useState(60000);
  const [city, setCity] = useState("");
  const query = useRouter();

  useEffect(() => {
    let a = query.route.split("/");
    let b = a.pop();
    setCity(b);
  }, []);

  const handleSetLocalData = () => {
    localStorage.setItem("months", JSON.stringify(months));
    localStorage.setItem("amount", JSON.stringify(amount));
    localStorage.setItem("city", JSON.stringify(city));
  };

  return (
    <div className="flex flex-col gap-12 bg-gray-200">
      <div class="w-full items-center flex flex-col justify-center  m-8">
        <div class="flex flex-col w-1/2 mb-4">
          <label class="mb-2 text-gray-700 text-xl font-bold ">
            Enter Duration :
          </label>

          <input
            class="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            placeholder="Enter duration in months"
            onChange={(e) => {
              setMonths(e.target.value);
            }}
            value={months}
          ></input>
        </div>
        <div class="flex flex-col w-1/2 mb-4">
          <label class="mb-2 text-gray-700 text-xl font-bold ">
            Enter Goal Amount :
          </label>

          <input
            class="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            placeholder="Enter goal amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          ></input>
        </div>
        <div class="flex flex-col w-1/2 mb-4">
          <input
            type="range"
            min="60000"
            max="200000"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          ></input>
          <div className="flex justify-between">
            <span>60,000</span>
            <span>2,00,000</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mx-16 gap-8 justify-center bg-gray-200 mb-10 ">
        <Link
          href={{
            pathname: "/goals/trip/maldives/payment",
            query: { months, amount, city },
          }}
        >
          <div
            onClick={handleSetLocalData}
            className="cursor-pointer relative flex flex-col  items-center justify-center hover:bg-white  hover:cursor-pointer hover:rounded"
          >
            <div className="bg-red-700 rounded text-xs px-2 py-1 text-white absolute top-2 left-2">
              Recommended
            </div>
            <div className="absolute top-2 right-2">
              <Image
                src="/MMYT.png"
                alt="Picture of the author"
                width={30}
                height={30}
              />
            </div>

            <Image
              src="/pic3.jpeg"
              alt="Picture of the author"
              width={330}
              height={330}
            />
            <div className="p-4 flex justify-between w-full ">
              <div className="font-bold bg-white px-2 rounded ">1,00,000</div>
              <div className="font-bold text-xl text-orange-300	">Gold</div>
            </div>
            <div className="p-4 flex flex-col gap-2 items-baseline w-full">
              <div>Day 1 : Island Resort Snorkelling</div>
              <div>Day 2 : Paradise Resort Jet King</div>
              <div>Day 3 : Sheraton Maldives Night Market</div>
            </div>
          </div>
        </Link>

        <div className=" relative flex flex-col  items-center justify-center hover:bg-white  hover:cursor-pointer hover:rounded">
          <div className="absolute top-0 right-0">
            <Image
              src="/kesari.png"
              alt="Picture of the author"
              width={60}
              height={60}
            />
          </div>

          <Image
            src="/pic5.jpeg"
            alt="Picture of the author"
            width={330}
            height={330}
          />
          <div className="p-4 flex justify-between w-full ">
            <div className="font-bold bg-white px-2 rounded ">1,50,000</div>
            <div className="font-bold text-xl text-slate-400	">Silver</div>
          </div>
          <div className="p-4 flex flex-col gap-2 items-baseline w-full">
            <div>Day 1 : Sun Shivam Resort Snorkelling</div>
            <div>Day 2 : Trump Hotel Jet Skiing</div>
            <div>Day 3 : Hilton Maldives Night Market</div>
          </div>
        </div>

        <div className=" relative flex flex-col  items-center justify-center hover:bg-white  hover:cursor-pointer hover:rounded">
          <div className="absolute top-2 right-2">
            <Image
              src="/MMYT.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </div>

          <Image
            src="/pic6.jpeg"
            alt="Picture of the author"
            width={330}
            height={330}
          />
          <div className="p-4 flex justify-between w-full ">
            <div className="font-bold bg-white px-2 rounded ">70,000</div>
            <div className="font-bold text-xl">Bronze</div>
          </div>
          <div className="p-4 flex flex-col gap-2 items-baseline w-full">
            <div>Day 1 : Island Resort Snorkelling</div>
            <div>Day 2 : Paradise Resort Jet King</div>
            <div>Day 3 : Sheraton Maldives Night Market</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Maldives;
