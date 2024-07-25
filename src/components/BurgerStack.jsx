// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (<ul>
        {props.stack.map((stackItem) => {
            <li key={stackItem.name} style={{ backgroundColor: stackItem.color }}>
                {stackItem.name}
                <button>-</button>
            </li>})
        }
    </ul>)
};

export default BurgerStack;
