export default function Card() {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                class="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-lFmAvBcHv3lfofE0-RN_AmzZboq4IXLGA&s"
                alt="Sunset in the mountains"
            ></img>
            <div class="px-6 py-4">
                <div class="text-center font-bold text-xl mb-2">
                    Dirty Athens
                </div>
                <p class="text-gray-700 text-base">
                    Dirty streets and trash everywhere. Let's clean up the city!
                </p>
            </div>
            <div class="px-6 pb-2 text-center">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Petroupoli
                </span>
            </div>
        </div>
    );
}
