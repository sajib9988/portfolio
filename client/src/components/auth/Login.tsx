import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const LoginButton = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {/* Accessible Title (Visually Hidden if not needed) */}
        <DialogTitle>
          <VisuallyHidden>Login</VisuallyHidden>
        </DialogTitle>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-2xl font-semibold mb-4">Sign in</h2>

            <button
              onClick={() => signIn("google",{
                callbackUrl:"https://blog-portfolio-black.vercel.app/"
              })}
              className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg mb-3 hover:bg-red-600 transition"
            >
              <FaGoogle className="text-xl" /> Sign in with Google
            </button>

            <button
              onClick={() => signIn("github",{
                callbackUrl:"https://blog-portfolio-black.vercel.app/"
              })}
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <FaGithub className="text-xl" /> Sign in with GitHub
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginButton;
