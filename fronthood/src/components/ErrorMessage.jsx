export default function ErrorMessage({ message = "Something went wrong!" }) {
    return (
        <div className="flex items-center justify-center h-fulltext-center py-20">
            {message}
        </div>
    );
}
