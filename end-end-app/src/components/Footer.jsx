const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Todo Application. Built with React, Firebase & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
