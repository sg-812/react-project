
import { Paper } from "@mui/material";
import '../../StyleModule/banner.css'

function CarouselItem(props) {
  console.log("props:",props);
  
  return (
    <Paper className="sliding">
      <img src={props.item.image} alt={props.item.caption1} />
      <div className="banner_text">
         <p className="banner_head">{props.item.caption1}</p>
         <p>{props.item.caption2}</p>
        </div>
    </Paper>
  );
}

export default CarouselItem