import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const Home = () => {
  const [months, setMonths] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  let router = useRouter();

  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("result"));
    let b = JSON.parse(localStorage.getItem("months"));

    setMonths(b);
  }, []);
  const handleRedirectGoals = () => {
    router.push("/goals");
  };
  const handleShowPopup = () => {
    if (showPopup) {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className="flex cursor  gap-8 flex-col relative top-32 justify-center w-screen h-screen items-center">
      <div className=" relative rounded bg-slate-100 border p-4 flex gap-4">
        <div
          onClick={handleShowPopup}
          className="absolute cursor-pointer right-2 top-2"
        >
          <Image
            src="/cross.png"
            alt="Picture of the author"
            width={15}
            height={15}
          />
        </div>

        <Image
          src="/pic3.jpeg"
          alt="Picture of the author"
          width={150}
          height={150}
        />
        <div className="flex flex-col gap-6">
          <div className=" text-2xl font-bold">Maldives Gold Package</div>
          <div className="text-gray-400 font-bold text-l flex gap-2">
            <div>Matures In </div>:<span>{months} Months</span>
          </div>
          <div className="text-gray-700 font-bold text-m   flex gap-2">
            <div>7% returns + 10% contribution by </div>
            <Image
              src="/MMYT.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </div>
        </div>

        <div>
          <Image
            src="/pichart.png"
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>
      </div>

      <Image
        src="/home-bg.png"
        alt="Picture of the author"
        width={450}
        height={200}
      />
      <button
        onClick={handleRedirectGoals}
        className=" absolute bg-white text-base text-bold w-40 h-10 rounded-md text-pink-900 "
      >
        Get Started
      </button>

      {showPopup ? (
        <div className="bg-white absolute flex flex-col gap-4 top-24 w-56 p-8">
          <span>
            You might lose 1% of interest as penalty on premature closure of
            this deposite as per bank,s policy
          </span>
          <span>You will also forego of MakeMyTrip</span>
          <span> Do you still want to go ahead</span>
          <div className="flex gap-2">
            <button
              onClick={() => setShowPopup(true)}
              className="border border-pink-900  bg-white text-base text-bold w-96  h-10 rounded-md text-pink-900 "
            >
              Yes
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="  text-white text-bold w-40 h-10 rounded-md  bg-pink-900 "
            >
              No
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
