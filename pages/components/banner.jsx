import styles from './banner.module.css'

const Banner = (props) => {
   
  return (
    <div className={styles.container}>
      <h1 style={{ textTransform: "capitalize" }}>
        <span style={{ color: "#66ff00" }}>The pursuit of</span>{" "}
        <span style={{ color: "3b2f2f" }}>fine Coffee</span>{" "}
        <span style={{ color: "red" }}>and </span>
        <span style={{ color: "yellow" }}>happiness</span>{" "}
      </h1>
      <p>Dicover your favorite coffee shop</p>
      <div className={styles.buttonWrapper}></div>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
}

export default Banner