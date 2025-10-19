import { Layout } from "../components";

export function PrivacyPolicy() {
    return (
        <Layout>
            <section className="max-w-3xl mx-auto px-6 py-10 text-gray-700 leading-relaxed">
                <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
                    Privacy Policy
                </h1>

                <p className="mb-6 text-lg">
                    This Privacy Policy explains how{" "}
                    <strong>CleanMyHood</strong> collects, uses, and protects
                    your information. The app is a personal, non-commercial
                    project created and maintained by a single developer. It is
                    completely free to use and does not include advertisements
                    or sell user data.
                </p>

                <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">
                    1. Who Operates CleanMyHood
                </h2>
                <p className="mb-6">
                    CleanMyHood is developed and managed by an independent
                    individual based in Greece. If you have any questions about
                    this policy or how your data is handled, you can reach out
                    at:
                    <br />
                    <strong>Email:</strong> katsis.k@outlook.com
                </p>

                <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">
                    2. What Data Is Collected
                </h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Location Data:</strong> When you submit a
                        cleaning report, the app requests your latitude and
                        longitude to mark the reported area on the map.
                    </li>
                    <li>
                        <strong>Uploaded Images:</strong> Photos you choose to
                        upload when reporting or marking a spot as cleaned.
                    </li>
                    <li>
                        <strong>Form Information:</strong> Such as your name or
                        description text when submitting a report.
                    </li>
                    <li>
                        <strong>Technical Data:</strong> The hosting provider
                        may automatically log basic technical details like IP
                        address, browser type, or timestamp for security and
                        server maintenance.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">
                    3. Why the Data Is Collected
                </h2>
                <p className="mb-6">
                    The data you provide is used solely to make the app
                    function:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>To display reported locations that need cleaning.</li>
                    <li>To allow admins to verify and approve reports.</li>
                    <li>To show cleaned locations once verified.</li>
                    <li>To improve the app’s reliability and prevent abuse.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">
                    4. Who Has Access to the Data
                </h2>
                <p className="mb-6">
                    Only the app’s creator (the single developer maintaining
                    CleanMyHood) has direct access to the stored data. No
                    third-party companies or advertisers receive or process your
                    personal data.
                </p>

                <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">
                    5. How Long Data Is Kept
                </h2>
                <p className="mb-6">
                    Cleaning reports and related images are stored only as long
                    as they are relevant for the project. You may request
                    removal of your submission or data at any time by contacting
                    the developer.
                </p>

                {/* ✅ Updated GDPR-Compliant Section */}
                <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">
                    6. Your Data Rights (Under GDPR)
                </h2>

                <p className="mb-6">
                    Although CleanMyHood does not require user accounts or store
                    personal profiles, the app may still collect limited
                    personal data such as location coordinates, uploaded images,
                    or text descriptions. Under the General Data Protection
                    Regulation (GDPR), you still have certain rights regarding
                    this information.
                </p>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Access:</strong> You can ask what information
                        (e.g., cleaning reports or uploaded photos) may have
                        been stored from your submissions.
                    </li>
                    <li>
                        <strong>Correction:</strong> If you notice a mistake in
                        a report you’ve submitted, you may request that it be
                        updated or replaced.
                    </li>
                    <li>
                        <strong>Deletion:</strong> You can ask for a report or
                        image you submitted to be removed from the app’s
                        database at any time.
                    </li>
                    <li>
                        <strong>Withdraw Consent:</strong> You are always free
                        to deny or disable location sharing. The app will never
                        collect location data without your consent.
                    </li>
                    <li>
                        <strong>Transparency:</strong> You can request
                        information about how and why your data is processed.
                    </li>
                </ul>

                <p className="mt-4 mb-6">
                    Since CleanMyHood is operated by a single developer, these
                    requests are handled manually. If you would like to access,
                    correct, or delete any data you’ve submitted, please contact
                    the developer directly via email:
                </p>

                <p className="mb-6">
                    <strong>Email:</strong> katsis.k@outlook.com
                </p>

                <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">
                    7. Data Security
                </h2>
                <p className="mb-6">
                    Reasonable technical measures are in place to keep your data
                    secure. However, since the app is hosted on third-party
                    infrastructure, no online service can guarantee absolute
                    security.
                </p>

                <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">
                    8. Changes to This Policy
                </h2>
                <p className="mb-6">
                    This Privacy Policy may be updated occasionally to reflect
                    improvements or legal requirements. The “Last Updated” date
                    will always be shown at the bottom of this page.
                </p>

                <p className="text-sm text-gray-500 mt-10 text-center">
                    Last Updated: October 2025
                </p>
            </section>
        </Layout>
    );
}
