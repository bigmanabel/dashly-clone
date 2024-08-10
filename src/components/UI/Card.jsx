function Card(props) {
    const classes = "rounded shadow-md " + props.className;
    
    return <div className={classes}>{ props.children }</div>;
}

export default Card;
