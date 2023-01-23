import Image from "next/image";

import { useRouter } from "next/router";
const Home = () => {
  let router = useRouter();
  const handleRedirectGoals = () => {
    router.push("/goals");
  };
  return (
    <div className="flex justify-center w-screen h-screen items-center">
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
    </div>
  );
};

export default Home;
