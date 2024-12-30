import {  
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-24 bg-secondary px-8 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-base text-secondary-foreground">
              Lavet af TheFoodDude
            </p>
          </div>
          <div className="flex items-center space-x-4">          
            <Link
              href="https://www.instagram.com/thefooddude.dk/"
              className="text-secondary-foreground hover:text-primary"
            >
              <InstagramLogoIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
