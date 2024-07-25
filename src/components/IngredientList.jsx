// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return <ul>
        {props.availableIngredients.map((ingredient) => {
            return (
                <>
                <li key={ingredient.name} style={{backgroundColor:ingredient.color}}>
                    {ingredient.name}
                    <button>+</button>
                </li>
                
                </>
            )
        })}
    </ul>;
};


export default IngredientList;

