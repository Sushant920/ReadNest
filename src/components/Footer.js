export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 p-4 mt-8">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} ReadNest. All rights reserved.
      </div>
    </footer>
  );
}
