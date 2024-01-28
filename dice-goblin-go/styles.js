import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202025',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    fontFamily: "monospace, 'Courier New', Courier",
    fontSize: "16px",
    letterSpacing: "2px",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#65e6f7",
    backgroundColor: "#110e35",
    cursor: "pointer",
    border: "2px solid",
    padding: "0.25em 0.5em",
    boxShadow: "1px 1px 0px 0px #110e35, 2px 2px 0px 0px #110e35, 3px 3px 0px 0px #110e35, 4px 4px 0px 0px #110e35, 5px 5px 0px 0px",
  }
});

export default styles