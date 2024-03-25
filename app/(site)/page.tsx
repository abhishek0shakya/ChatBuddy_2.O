import Image from "next/image";
import AuthForm from "./components/AuthForm";
// import { FaAutoprefixer } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="48"
          width="48"
          className="mx-auto w-28"
          src="/images/logo.gif"
          alt="Logo"
        />
        <h2
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent
          "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
