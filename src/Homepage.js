import fuji from "./images/Rectangle 77.png";
import gps from "./images/gps.png";

export default function Homepage({data}){
    return(
        data.map((item)=>{
            return(
                <div className="homepage-item" key={item.id}>
            <img src={`./images/${item.Picture}`} width="170"></img>

            <div className="detail-container">
                <div className="top-line">
                    <img className="move-right" src={gps} width="14" height="17"></img>
                    <p className="move-right">{ item.country }</p>
                    <a className="move-right" href={item.link}>View on Google Maps</a>
                </div>


                <h1>{ item.place }</h1>
                <p><strong>{ item.startData } - { item.endData }</strong></p>
                <p>{ item.discription }</p>
            </div>


        </div>
            )
        })
        
    )
}