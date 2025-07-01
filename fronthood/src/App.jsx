import "./App.css";
import hoodService from "./services/HoodService";

function App() {
    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => hoodService.searchHoods()}>
                    Get Hoods
                </button>
            </div>
        </>
    );
}

export default App;
