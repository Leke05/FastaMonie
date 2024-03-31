const Form = ({ item }) => {
  return (
    <div>
      {item?.value === "1." ? (
        <div
          className="bg-light"
          style={{
            borderRadius: "1rem",
            boxShadow: "0 4px 10px #ccccccfa",
            padding: "1rem",
          }}
        >
          <div className="d-flex justify-content-between p-3">
            <div className="d-flex gap-3">
              <p className="text-primary">{item?.value}</p>
              <h6 style={{ textTransform: "uppercase" }}>
                <span>{item?.heading}</span>
              </h6>
            </div>
            <i
              class="fa fa-minus"
              aria-hidden="true"
              style={{ color: "blue" }}
            ></i>
          </div>
          <p
            style={{
              textAlign: "center",
            }}
          >
            {item?.text}
          </p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#93939c",
            borderRadius: "0.8rem",
            boxShadow: "0 4px 10px #f2f4f8",
            padding: "1rem",
          }}
        >
          <div className="d-flex justify-content-between p-3">
            <div className="d-flex gap-3">
              <p className="text-primary">{item?.value}</p>
              <h6 style={{ textTransform: "uppercase" }}>
                <span>{item?.heading}</span>
              </h6>
            </div>
            <div>
              <i
                class="fa fa-plus"
                aria-hidden="true"
                style={{ color: "blue", flex: "1" }}
              ></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
