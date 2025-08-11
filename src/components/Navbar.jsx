import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    //Handle search form submit
    function handleSubmit(e) {
        e.preventDefault();
        if (searchTerm.trim()) {
            
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm(""); //clear input
        }
    }

    return (
        <nav
            style={{
                padding: "1rem",
                backgroundColor: "#333",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
            }}
        >
            {/* Links */}
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
            </Link>
            <Link to="/favorites" style={{ color: "white", textDecoration: "none" }}>
                Favorites
            </Link>

            {/* Spacer */}
            <div style={{ flexGrow: 1 }}></div>

            {/* Search form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: "0.3rem", borderRadius: "4px", border: "none" }}
                />
                <button
                    type="submit"
                    style={{
                        marginLeft: "0.5rem",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Search
                </button>
            </form>
        </nav>
    );
}
