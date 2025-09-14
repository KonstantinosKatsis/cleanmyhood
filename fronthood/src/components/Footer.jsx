export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} CleanMyHood. All rights
                    reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                    <a
                        href="/about"
                        className="hover:text-green-600 transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="hover:text-green-600 transition-colors"
                    >
                        Contact
                    </a>
                    <a
                        href="/privacy"
                        className="hover:text-green-600 transition-colors"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}
