export default function ErrorMessage({ message }) {
    return (
        <p style={{
            color: "red",
            textAlign: "center",
            padding: "1rem",
            fontWeight: "bold",
        }}>
            {message}
        </p>
    );
}