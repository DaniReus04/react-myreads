//This is the loader I used for onChangeSearch and onChange

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        opacity: 0.86,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        fontSize: 25,
        color: "black",
      }}
    >
      ...loading
    </div>
  );
};

export default Loader;