import { NavBar, Footer } from ".";

export function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
