export function PrivacyPolicy() {
    return (
        <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="mb-2">
                ⚠️ To submit a valid cleaning, please allow access to your
                <strong> location</strong>. Your location is used only to verify
                the area and to display cleaning locations on the map for others
                to see.
            </p>
            <p className="mb-2">
                We do <strong>store</strong> the cleaning location data, but we
                do{" "}
                <strong>not collect or store any personal information</strong>
                (e.g., names, accounts, or device identifiers). Locations are
                stored anonymously and are not linked to any specific user.
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
