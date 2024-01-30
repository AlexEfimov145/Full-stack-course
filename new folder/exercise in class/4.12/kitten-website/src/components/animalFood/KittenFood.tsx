import "./KittenFood.css";
import CatFoodImg from "../../assets/img/download.jpeg"

function KittenFood():JSX.Element {
    return (
        <div>
            <h1>Kitten Food</h1>
            <img src={CatFoodImg}/>
            <pre>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quisquam tempore harum officia
                 explicabo assumenda, molestias doloremque nulla, quia mollitia quis 
                 cupiditate ipsam commodi minima odio fuga non
                  itaque perferendis.</pre>
            <p>Price:50$</p>
        </div>
    )
}
export default KittenFood;