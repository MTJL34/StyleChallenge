import { useState, useContext } from "react";
import { TextContext } from "../context/TextContext";

const Form = () => {
    const [text, setText] = useState("");
    const [color, setColor] = useState("palevioletred");
    const [size, setSize] = useState(15);
    const { dispatch } = useContext(TextContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            const newText = {
                id: Date.now(),
                content: text,
                style: { color, fontSize: `${size}px` },
            };
            dispatch({ type: "ADD_TEXT", payload: newText });
            setText(""); // Réinitialiser le champ
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="Saisir le texte"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={styles.input}
            />
            <select value={color} onChange={(e) => setColor(e.target.value)} style={styles.select}>
                <option value="palevioletred">palevioletred</option>
                <option value="tomato">tomato</option>
            </select>
            <select value={size} onChange={(e) => setSize(Number(e.target.value))} style={styles.select}>
                {[15, 16, 17, 18, 19, 20].map((s) => (
                    <option key={s} value={s}>
                        {s}px
                    </option>
                ))}
            </select>
            <button type="submit" style={styles.button}>
                Valider
            </button>
        </form>
    );
};

const styles = {
    form: { display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "20px auto" },
    input: { padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" },
    select: { padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" },
    button: { padding: "10px", fontSize: "16px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default Form;