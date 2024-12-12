"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tab, Tabs } from "@nextui-org/react";
import SignIn from "./signin";
import SignUp from "./signup";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [activeTab, setActiveTab] = useState("login");
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
    <div className="flex items-center justify-center p-4 min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-md">
        <Tabs
          fullWidth
          size="lg"
          aria-label="Login and Sign Up"
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key.toString())}
        >
          <Tab key="login" title="Login">
            <SignIn
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              switchTab={() => setActiveTab("sign-up")}
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
  );
}
