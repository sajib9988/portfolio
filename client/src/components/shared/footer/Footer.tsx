'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
 function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 py-8 px-4 lg:px-0 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">About Me</h3> */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I am Sajib Biswas, a passionate developer focused on creating modern and high-performing applications. Let&apos;s build something amazing together.
            </p>
            <div className="mt-4 flex space-x-4 text-gray-600 dark:text-gray-400">
              <a          href="https://www.facebook.com/share/166AU8Umhj/" target="_blank" className="hover:text-cyan-400 duration-300"> <FaFacebookF className="w-7 h-7" /></a>
            
              <a   href="https://www.linkedin.com/in/sajibbiswas22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-cyan-400 duration-300"> <FaLinkedinIn className="w-7 h-7" /></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/projects" className="hover:text-gray-700 dark:hover:text-white">Projects</Link>
              <Link href="blog" className="hover:text-gray-700 dark:hover:text-white">Blog</Link>
              <Link href="/contact" className="hover:text-gray-700 dark:hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400">
              <li className="mb-2">Based in Narayanganj, Dhaka</li>
              <li className="mb-2">Phone: (+880) 19165-20032</li>
              <li>Email: <a href="mailto:rakibmia.dev@gmail.com" className="hover:text-gray-700 dark:hover:text-white">sajib.biswas9988@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Sajib Biswas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function FooterWrapper() {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/dashboard"); 
  return !hideFooter ? <Footer /> : null;
}
