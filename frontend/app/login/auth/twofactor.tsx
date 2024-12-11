"use client";
import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TwoFactorAuth() {
  const [pin, setPin] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length === 6) {
      // TODO: Add verification logic here
      console.log("2FA PIN submitted:", pin);
      router.push("/dashboard");
    } else {
      alert("Please enter a 6-digit PIN.");
    }
  };

  return (
    <Card className="flex flex-col h-full p-4">
      <CardHeader className="flex flex-col gap-3 text-center">
        <h1 className="text-2xl font-bold">Two-Factor Authentication</h1>
        <p className="text-sm text-default-500">
          Enter the 6-digit PIN sent to your device.
        </p>
      </CardHeader>
      <CardBody className="mb-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Authentication PIN"
            placeholder="Enter your 6-digit PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
            maxLength={6}
            pattern="\d{6}"
            inputMode="numeric"
            autoFocus
          />
          <Button color="primary" type="submit">
            Verify
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
