import { Layout } from "../components";

export function About() {
    return (
        <Layout>
            <section className="max-w-3xl mx-auto px-6 py-10 text-gray-700 leading-relaxed">
                <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
                    About CleanMyHood
                </h1>

                <p className="mb-6 text-lg">
                    <strong>CleanMyHood</strong> is a community-driven platform
                    created to inspire, organize, and celebrate cleaning efforts
                    across Greece. Our mission is simple — to make it easier for
                    people to identify areas that need attention, take action,
                    and keep their neighborhoods clean.
                </p>

                <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-3">
                    How It Works
                </h2>

                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <strong>Report a Spot:</strong> See an area that needs
                        cleaning? Upload a photo, share its location, and submit
                        it through CleanMyHood. Your report helps highlight
                        places that deserve care and attention.
                    </li>
                    <li>
                        <strong>Admin Review:</strong> Every submission is
                        reviewed by an admin to ensure accuracy and quality
                        before it appears publicly on the map.
                    </li>
                    <li>
                        <strong>Join a Cleanup:</strong> Once approved, your
                        reported “hood” becomes visible to others. Volunteers
                        can discover nearby cleaning events and team up to make
                        a difference.
                    </li>
                    <li>
                        <strong>Mark as Cleaned:</strong> After completing a
                        cleanup, upload a “cleaned” photo to show the
                        transformation. Once verified, the hood’s status is
                        updated to <strong>“Cleaned”</strong> — a small but
                        powerful symbol of community pride.
                    </li>
                </ol>

                <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-3">
                    Our Mission
                </h2>

                <p className="mb-6 text-lg">
                    CleanMyHood was built to empower local communities to act
                    collectively for a cleaner, greener environment. By turning
                    everyday citizens into active participants, we believe that
                    small, consistent efforts can create a lasting positive
                    impact — one hood at a time.
                </p>

                <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-3">
                    Join the Movement
                </h2>

                <p className="text-lg">
                    Whether you’re reporting a spot, joining a cleanup, or
                    simply spreading the word, you’re part of a growing movement
                    that values responsibility and collaboration. Together, we
                    can make our cities brighter, healthier, and cleaner for
                    everyone.
                </p>
            </section>
        </Layout>
    );
}
