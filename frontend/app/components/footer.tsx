import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-center text-sm text-muted-foreground">
            Made with <Heart className="inline-block w-4 h-4 text-red-500" /> by
            <Link href="https://github.com/amitalokbera"> Amit Bera</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
