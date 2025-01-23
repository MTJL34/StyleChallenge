import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import TextItem from "./TextItem";

const TextList = () => {
    const { state } = useContext(TextContext);

    return (
        <div style={styles.container}>
            {state.texts.map((text) => (
                <TextItem key={text.id} text={text} />
            ))}
        </div>
    );
};

const styles = {
    container: { maxWidth: "600px", margin: "20px auto", padding: "10px", backgroundColor: "#f9f9f9" },
};

export default TextList;