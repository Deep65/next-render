import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full p-4 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Name */}
        <h1 className="text-xl font-bold">3D Next.js</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
