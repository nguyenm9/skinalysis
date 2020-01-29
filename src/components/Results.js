import React from 'react';
import Product from './Product';
import Ingredients from './Ingredients';

const Results = (props) => {
    //Making sure props and props.location exist
    //Might need more error handling 
    return (
        <div>
            This is from Results component.
            {props && props.location &&
                <Ingredients userInputIngredients={props.location.state.userInputIngredients} />
            }
            <Product />
        </div>
    )
}

export default Results;