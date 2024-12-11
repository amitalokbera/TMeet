import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  handleSignUp,
}: {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSignUp: (e: React.FormEvent) => void;
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-col gap-3 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-sm text-default-500">
          Sign up for TMeet to start collaborating
        </p>
      </CardHeader>
      <CardBody className="min-h-[380px]">
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button color="primary" type="submit">
            Sign Up
          </Button>
        </form>
        <div className="relative flex items-center justify-center text-xs uppercase mt-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center mt-4 w-full">
          <Button variant="solid" onClick={() => {}} className="w-full">
            <FcGoogle className="mr-2 h-4 w-4" /> Sign up with Google
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
