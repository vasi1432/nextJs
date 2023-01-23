import Image from "next/image";
import Link from "next/link";
const Goals = () => {
  return (
    <div>
      <div className="flex flex-col gap-14 p-12 mt-20">
        <h1 className="text-2xl text-bold">Add goals you want to achieve</h1>
        <div className="flex flex-wrap gap-14 justify-center items-center">
          <div className="relative">
            <Image
              src="/trip.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/trip">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/married.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/married">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/wealth.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/wealth">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/vehicle.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/vehicle">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/retirement.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/retirement">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/childEd.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/childsEd">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/house.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/house">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/tax.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/tax">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/studies.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/studies">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/studies.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
              Add
            </button>
          </div>
          <div className="relative">
            <Image
              src="/special.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <Link href="goals/special">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
          <div className="relative w-56 h-56 bg-gray-200 rounded-3xl border-black	border-2 ">
            <span className="text-2xl text-bold absolute top-4 left-4">
              Create your <br /> own Goal
            </span>
            <Link href="goals/creatOwn">
              <button className="absolute bottom-4 left-4 bg-white text-base text-bold px-6 py-2 rounded-full text-pink-900 ">
                Add
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Goals;
