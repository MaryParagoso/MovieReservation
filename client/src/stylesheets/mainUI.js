const overlayColor = "rgba(0, 0, 0, 0.5)";
const backgroundImageUrl =
  "https://c1.wallpaperflare.com/preview/977/573/114/red-seat-cinema-theatre.jpg";

const design = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const sectionTitle = {
  fontSize: "28px",
  color: "#000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: "0 50px",
  color: "white",
  background: `linear-gradient(${overlayColor}, ${overlayColor}), url("${backgroundImageUrl}")`,
  boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.5)",
};

const commonStyle = {
  color: "white",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 0, 0, 0.5)",
};

const headerStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  width: "100%",
  padding: "20px",
  height: "90px",
  display: "flex",
  fontSize: "30px",
  ...commonStyle,
};

const footerStyle = {
  width: "100%",
  position: "fixed",
  bottom: "0",
  left: "0",
  right: "0",
  height: "40px",
  display: "flex",
  fontSize: "15px",
  textAlign: "center",
  padding: "15px",
  ...commonStyle,
};

const formStyle = {
  width: "600px",
  margin: "auto",
  boxShadow: "0 4px 8px rgba(255, 255, 255, 255, 0.1)",
  padding: "20px 40px 40px",
  borderRadius: "15px",
  backgroundColor: "rgba(90, 90, 90, 0.95)",
  border: "1px solid red",
};

const formItem = {
  textAlign: "right",
};

const inputStyle = {
  width: "350px",
  textAlign: "left",
};

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
};

const buttonLogin = {
  width: "150px",
  color: "#b20710",
  borderColor: "#b20710",
  background: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(8px)",
};

const buttonLoginR = {
  width: "150px",
  marginRight: "50px",
  color: "#b20710",
  borderColor: "#b20710",
  background: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(8px)",
};

const buttonSignup = {
  width: "150px",
  marginRight: "50px",
  borderColor: "#b20710",
  backgroundColor: "#b20710",
  background: "rgba(255, 0, 0, 0.5)",
  backdropFilter: "blur(5px)",
};

const buttonSignupR = {
  width: "150px",
  borderColor: "#b20710",
  backgroundColor: "#b20710",
  background: "rgba(255, 0, 0, 0.5)",
  backdropFilter: "blur(5px)",
};

export {
  design,
  sectionTitle,
  contentStyle,
  overlayColor,
  headerStyle,
  footerStyle,
  formStyle,
  inputStyle,
  formItem,
  buttonStyle,
  buttonLogin,
  buttonSignup,
  buttonLoginR,
  buttonSignupR,
};
