import React from "react";
import TwoFactorAuth from "./twofactor";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const Auth = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-200px)] p-4">
        <div className="w-full max-w-md min-h-[400px]">
          <TwoFactorAuth />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
