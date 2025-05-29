import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-periwinkle-900 text-off-white-100 px-4">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">
              Contact Us
            </h3>
            <p className="mb-2">Email: hello@periwinkleperinatal.com</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Serving the Greater Seattle Area</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="hover:text-periwinkle-100 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-periwinkle-100 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-periwinkle-100 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">
              Stay Connected
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for pregnancy tips and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-white placeholder:text-periwinkle-500 outline-solid outline-white flex-grow"
              />
              <button
                type="submit"
                className="btn bg-white text-periwinkle-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-light-purple-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Periwinkle Perinatal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
