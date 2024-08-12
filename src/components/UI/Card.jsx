const Card = (props) => {
    const classes = "rounded-lg  shadow-md bg-[#FFFFFF] " + props.className;
    
    return <div className={classes}>{ props.children }</div>;
}

export default Card;
