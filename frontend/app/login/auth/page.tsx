import TwoFactorAuth from "./twofactor";

export default function AuthPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <div className="w-full max-w-md min-h-[400px]">
        <TwoFactorAuth />
      </div>
    </div>
  );
}
