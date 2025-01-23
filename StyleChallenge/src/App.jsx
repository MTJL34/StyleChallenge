import Form from "./components/Form";
import TextList from "./components/TextList";

const App = () => {
    return (
        <div>
            <h1 style={styles.header}>Gestion des Textes</h1>
            <Form />
            <TextList />
        </div>
    );
};

const styles = {
    header: { textAlign: "center", color: "#333", margin: "20px 0" },
};

export default App;