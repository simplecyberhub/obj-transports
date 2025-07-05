export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OBJ Transports</h3>
            <p className="text-gray-300">
              Your trusted partner in transportation, logistics, and supply chain management services in Nigeria.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="text-gray-300 not-italic">
              <p>Lagos, Nigeria</p>
              <p>Phone: +234 XXX XXX XXXX</p>
              <p>Email: info@objtransports.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p className="text-gray-300">
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 3:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Obiajulu Executive Transport Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
