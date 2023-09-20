import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-[#06081d] p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <span className="text-white text-lg font-semibold"></span>
      </div>

      {/* Center Buttons */}
      <div className="space-x-4 flex">
        <Link href="/Round1">
          <div className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity"> 
            Analytical Arena
          </div>
        </Link>

        <Link href="/Round2">
          <div className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
            Labyrinthine Odessey
          </div>
        </Link>

        <Link href="/Round3">
          <div className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
            The Enigma
          </div>
        </Link>
      </div>

      {/* Right Corner Login Button */}
      <button className="bg-white text- hover:bg-blue-100 text-sm px-4 py-2 rounded-full">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
