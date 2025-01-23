import { useContext } from "react";
import { TextContext } from "../context/TextContext";

const TextItem = ({ text }) => {
    const { dispatch } = useContext(TextContext);

    const handleDelete = () => {
        dispatch({ type: "DELETE_TEXT", payload: text.id });
    };

    return (
        <div style={{ ...styles.item, ...text.style }}>
            <p>{text.content}</p>
            <button onClick={handleDelete} style={styles.button}>
                Delete
            </button>
        </div>
    );
};

const styles = {
    item: { marginBottom: "10px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" },
    button: { marginLeft: "10px", padding: "5px 10px", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default TextItem;