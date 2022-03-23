import styles from './banner.module.css'

const Banner = (props) => {
   
  return (
    <div className={styles.container}>
      <h1 style={{textTransform: 'capitalize'}}>
        <span style={{ color: "green" }}>The pursuit of</span>{" "}
        <span style={{ color: "6f4e37" }}>fine Coffee</span>{" "}
        <span style={{ color: "red" }}>and </span>
        <span style={{ color: "yellow" }}>happiness</span>{" "}
      </h1>
      <p>Dicover your favorite coffee shop</p>
      <button className={styles.button} onClick={props.handleOnClick} >{props.buttonText}</button>
    </div>
  );
}

export default Banner