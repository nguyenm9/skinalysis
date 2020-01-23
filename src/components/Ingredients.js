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
        axios.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=cosmetic-ingredient-database-ingredients-and-fragrance-inventory&sort=update_date&facet=update_date&facet=function&facet=inci_name&facet=chem_iupac_name_description').then((res) => {
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
