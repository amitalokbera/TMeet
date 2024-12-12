"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Card, CardHeader, CardBody } from "@nextui-org/react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot password for:", email);
    // TODO: Add forgot password logic here
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center p-4 min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-md">
        <Card className="flex flex-col h-full">
          <CardHeader className="flex flex-col gap-3 text-center">
            <h1 className="text-2xl font-bold">Forgot Password</h1>
            <p className="text-sm text-default-500">
              Enter your email to reset your password
            </p>
          </CardHeader>
          <CardBody className="flex flex-col justify-between mb-4">
            <form
              onSubmit={handleForgotPassword}
              className="flex flex-col gap-4"
            >
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button color="primary" type="submit">
                Reset Password
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
