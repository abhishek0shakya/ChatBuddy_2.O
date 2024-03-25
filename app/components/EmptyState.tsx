import Link from "next/link";
import Robot from "../../public/images/robot.gif";
import Image from "next/image";

const EmptyState: React.FC = () => {
  return (
    <div
      className="
          px-4 
          py-10 
          sm:px-6 
          lg:px-8 
          lg:py-6 
          h-full 
          flex 
          justify-center 
          items-center 
          bg-purple-300
        "
    >
      <div className="text-center items-center flex flex-col">
        <Image src={Robot} alt="Robot" />
        <h3 className="mt-2 text-2xl font-semibold text-gray-900">
          Select a chat or start a new conversation
        </h3>
        <p>
          Developed by{" "}
          <Link
            href="https://github.com/Abhishek2003Shakya"
            target="_blank"
            className="text-purple-700"
          >
            Abhishek Shakya
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
