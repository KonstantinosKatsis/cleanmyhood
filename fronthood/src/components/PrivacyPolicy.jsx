export function PrivacyPolicy() {
    return (
        <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="mb-2">
                ⚠️ To submit a valid cleaning, please allow access to your
                <strong> location</strong>. Your location is used only to verify
                the area cleaned and will{" "}
                <strong>not be stored or shared</strong> for any other purpose.
            </p>
            <p>
                We comply with the GDPR, and you can read more about how we
                protect your data in our{" "}
                <a
                    href="https://cleanmyhood.gr/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline hover:text-green-900"
                >
                    Privacy Policy
                </a>
                .
            </p>
        </div>
    );
}
