"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/footer";
import Header from "../components/header";
import { Tab, Tabs } from "@nextui-org/react";
import SignIn from "./signin";
import SignUp from "./signup";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", email, password);
    router.push("/dashboard");
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up with:", name, email, password);
    router.push("/dashboard");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-200px)] p-4">
        <div className="w-full max-w-md min-h-[400px]">
          <Tabs fullWidth size="lg">
            <Tab key="login" title="Login">
              <SignIn
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            </Tab>
            <Tab key="sign-up" title="Sign Up">
              <SignUp
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSignUp={handleSignUp}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
}
