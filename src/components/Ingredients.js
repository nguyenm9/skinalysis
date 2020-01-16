import React, { Component } from 'react';
import axios from 'axios';

export default class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientsData: ""
        }

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

    render () {
        return (
            <div>
                This is from Ingredients component.
                <ul>
                    <li>{this.state.ingredientsData.name}</li>
                </ul>
            </div>
        )
    }
}
