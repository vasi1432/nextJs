import Image from "next/image";
import Link from "next/link";
const Trip = () => {
  return (
    <div className="flex flex-col  bg-gray-200 h-screen ">
      <div className="flex justify-center  gap-8 p-6 ">
        <div className="flex gap-4 items-center">
          <Image
            src="/MMYT.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />

          <span className="font-bold	text-xl">Upto 10%</span>
        </div>
        <div className="flex gap-4 items-center ">
          <Image
            src="/kesari.png"
            alt="Picture of the author"
            width={90}
            height={90}
          />
          <span className="font-bold	text-xl">Upto 7%</span>
        </div>
        <div className="flex gap-4  items-center">
          <Image
            src="/tc.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <span className="font-bold text-xl">Upto 7%</span>
        </div>
      </div>
      <hr />
      <div className="flex mt-28 justify-center gap-32 ">
        <Link href="/goals/trip/maldives">
          <div className="flex flex-col gap-4 items-center hover:bg-white  hover:cursor-pointer hover:rounded">
            <Image
              src="/maldives.jpg"
              alt="Picture of the author"
              width={330}
              height={330}
            />
            <span>Maldives</span>
            <div className="flex justify-around w-full">
              <div className="flex items-center gap-2">
                <Image
                  src="/MMYT.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <span>Upto 10%</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/kesari.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
                <span>Upto 7%</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/goals/trip/dubai">
          <div className="flex flex-col gap-4 items-center  hover:bg-white  hover:cursor-pointer hover:rounded">
            <Image
              src="/dubai.jpg"
              alt="Picture of the author"
              width={330}
              height={330}
            />
            <span>Dubai</span>
            <div className="flex justify-around w-full">
              <div className="flex items-center gap-2">
                <Image
                  src="/MMYT.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <span>Upto 10%</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/kesari.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
                <span>Upto 7%</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/goals/trip/singapore">
          <div className="flex flex-col gap-4  items-center hover:bg-white  hover:cursor-pointer hover:rounded">
            <Image
              src="/singapore.jpg"
              alt="Picture of the author"
              width={330}
              height={330}
            />
            <span>Singapore</span>
            <div className="flex justify-around w-full">
              <div className="flex items-center gap-2">
                <Image
                  src="/MMYT.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <span>Upto 10%</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/kesari.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
                <span>Upto 7%</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Trip;
