"use client";

import { useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import loginSchema from "@/schema/loginSchema";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [userData, setData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const Login = async (formResponse) => {
    try {
      const response = await axios
        .post("http://localhost:5000/api/auth/login", formResponse)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
      console.log(userData);
      if (userData.token) {
        localStorage.setItem("userToken", JSON.stringify(userData.token));
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <!-- component --> */}
      <section className="min-h-screen flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form
              classNameName="text-center"
              onSubmit={handleSubmit((response) => Login(response))}
            >
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Sign in
              </h1>
              <div className="py-2 text-left">
                <input
                  {...register("email")}
                  className="block w-full py-2 px-4 rounded-lg "
                  placeholder="Email"
                />
                {errors ? (
                  <p classNameName="text-xs text-red-400">
                    {errors?.email?.message}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="py-2 text-left">
                <input
                  {...register("password")}
                  type="password"
                  className="block w-full py-2 px-4 rounded-lg"
                  placeholder="Password"
                />
                {errors ? (
                  <p className="text-xs text-red-400">
                    {errors?.password?.message}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="py-2">
                <button
                  type="submit"
                  className="border-2 border-gray-100 outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg hover:bg-purple-700 focus:bg-purple-800"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center" title="Forgot Password">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="text-center mt-12">
              <span>Don't have an account?</span>
              <Link href={"/signup"} replace={true}>
                <div
                  href=" "
                  className="font-light text-md text-indigo-600 underline hover:text-indigo-800"
                >
                  Create One
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
