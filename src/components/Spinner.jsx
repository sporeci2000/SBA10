export default function Spinner() {
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <div
                style={{
                    margin: "0 auto",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "6px solid #f3f3f3",     
                    borderTop: "6px solid #3498db",  
                }}
            />
            <p>Loading...</p>
        </div>
    );
}
