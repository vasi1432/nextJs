import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-4   items-center text-white bg-pink-900 w-full h-16">
      <div className=" flex gap-14">
        <Link href="/home">
          <span className="cursor-pointer">Home</span>
        </Link>
        <Link href="/goals">
          <span className="cursor-pointer"> Dashboard</span>
        </Link>
      </div>
      <span>Lakshya : Save now buy later</span>
      <span className="bg-gray-300 w-8 text-center text-black h-8 flex justify-center items-center rounded-full">
        A
      </span>
    </div>
  );
};
export default Header;
