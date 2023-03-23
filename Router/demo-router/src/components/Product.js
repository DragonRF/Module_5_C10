import {useLocation, useParams} from "react-router-dom";

function Product() {
    let { state } = useLocation();
    return (
        <div>
            <h3>Id selected {state.categoryId} </h3>
        </div>
    );
}
export default Product;