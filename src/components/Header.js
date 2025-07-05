export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ReadNest</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/bookStore" className="hover:underline">Book Store</a></li>
            <li><a href="/discoverCommunity" className="hover:underline">Community</a></li>
            <li><a href="/loginAndSignups" className="hover:underline">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
