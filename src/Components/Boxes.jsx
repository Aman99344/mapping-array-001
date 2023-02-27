 import './Boxes.css'
function Boxes( props){
    return(
        <div className="Boxes" style={{backgroundColor:props.color}}>
        <h1>{props.num}</h1>
        </div>
    )
}

export default Boxes;