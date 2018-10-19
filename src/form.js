import React, {Component} from 'react';



class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            product: '',
            cost: ''
        };

        this.state = this.initialState;
    }


    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        
    }

    render() {
        const { name, cost, anzahl } = this.state; 

        return (
            <form>
                <label>Anzahl</label>
                <input 
                    type="number" 
                    name="anzahl" 
                    value={anzahl} 
                    onChange={this.handleChange}
                 />
                <label>Produkt</label>
                <input 
                    type="text" 
                    name="product" 
                    value={name} 
                    onChange={this.handleChange} />

                <label>Kosten</label>
                <input 
                    type="text" 
                    name="cost" 
                    value={cost} 
                    onChange={this.handleChange}/>

                <input 
                    type="button" 
                    value="Zum Warenkorb hinzufügen" 
                    onClick={this.submitForm} />
                    <br></br>
                    
                <button 
                    class="btn btn-primary"
                    placeholder="Test"
                    onClick={this.wertUebergeben}
                    >Bestellung 1</button>
                <br></br>
                <br></br>
                <button 
                    class="btn btn-primary"
                    placeholder="Test"
                    onClick={this.wertUebergeben}
                    >Bestellung 2</button>
                <br></br>
                <br></br>
                <button 
                    class="btn btn-primary"
                    placeholder="Test"
                    onClick={this.wertUebergeben}
                    >Bestellung 3</button>
            </form>
        );
    }
}

export default Form;