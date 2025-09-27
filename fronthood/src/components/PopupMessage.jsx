export function PopupMessage({ message }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#b1b0b06c] z-10000">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm mx-auto">
                <p className="text-lg font-semibold">{message}</p>
            </div>
        </div>
    );
}
