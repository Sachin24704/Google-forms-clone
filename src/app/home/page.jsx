"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

const Home = () => {
  const router = useRouter();
  const { isLoading, authUser, signout } = useAuth();
  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/Login");
    }
  }, [authUser, isLoading]);
  return !authUser ? (
    <Loader />
  ) : (
    <div>
      <h1>hellos {authUser.email}</h1>
      <button onClick={signout}>logout</button>
    </div>
  );
};

export default Home;
