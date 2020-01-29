import React, { Component } from 'react';
import axios from 'axios';
import { Loader, Dimmer, Item } from 'semantic-ui-react';

export default class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInputIngredients: props.userInputIngredients,
            ingredientsData: ""
        }
    }

    componentDidMount = () => {
        console.log("here in ingredients: " + this.state.userInputIngredients)
        //Grabbing userInputIngredients and substituing it in the query 
        const ingredientQuery = this.state.userInputIngredients
        axios.get(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=cosmetic-ingredient-database-ingredients-and-fragrance-inventory&q=${ingredientQuery}&facet=update_date&facet=restriction&facet=function`).then((res) => {
            this.setState({ 
                ingredientsData: res.data
            });
        }).then(() => {
            this.setState({
                refreshing: false
            });
        }).catch(e => {
            console.log(e);
        });
    }

    renderIngredients = () => {
        const { ingredientsData } = this.state;
        return (
            ( ingredientsData !== "" && ingredientsData !== null ) ? (
                ingredientsData.records.map((record, i) => {
                    return (
                        <div>
                            <li key={i}>{record.fields['inci_name']}</li>
                            <ul>
                                <li key={i}>{record.fields['function']}</li>
                            </ul>
                        </div>
                    )
                })
            ) : (
                <Dimmer active>
                    <Loader>Loading...</Loader>
                </Dimmer>
            )
        )
    }

    render () {
        return (
            <div>
                This is from Ingredients component!
                <ul>
                    {this.renderIngredients()}
                </ul>
            </div>
        )
    }
}
