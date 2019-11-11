import React, { Component } from 'react';
import Card from './card';
import Form from './forms';
import Answer from './answers';
import Button from './buttons';

class Question1 extends Component {
    state = {
        data: '',
        cutoff:0,
        stringy: {},
        numbersabove: {},
        numbersbellow: {}

    }
    componentDidMount=()=>{
        this.setState({
            data: '',
            stringy: {},
            numbersabove: {},
            numbersbellow: {}

        })
    }
    aboveBellow = (numbers) => {
        console.log(numbers);
        this.setState({
            numbersabove: numbers.filter(number => parseInt(number) >= this.state.cutoff),
            numbersbellow: numbers.filter(number => parseInt(number) < this.state.cutoff)
        },()=>{
        console.log(this.state.numbersabove);
        console.log(this.state.numbersbellow);
        });
    }

    handleInputChange = event => {
        console.log(this.state.data);
        const { name, value } = event.target;

       this.setState({
            [name]: value,
            
        },()=>{
            this.setState({
            stringy: this.state.data.split(" ")
            })
        });
        console.log(this.state.data);
        console.log(`this is  stringy ${this.state.stringy}`)
    }

    handleFormSubmit = () => {
        const numbers = this.state.stringy;
        this.aboveBellow(numbers)
    }



    render() {
        return (
            <Card
                name="Question 1"
                question="Print the number of integers in an array that are above the given input and the number 
                that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”."
                >
                <Form
                    name="data"
                    placeholder="Enter an array of numbers"
                    onChange={this.handleInputChange}
                    value={this.state.data}
                />
                <Form
                    name="cutoff"
                    placeholder="What is the cut off number?"
                    onChange={this.handleInputChange}
                    value={this.state.cutoff}
                />
                <Answer
                    header="Total Numbers Above"
                    answer={this.state.numbersabove.length}
                    cutoff={this.state.cutoff}
                />
                <Answer
                    header="Total Numbers Bellow"
                    answer={this.state.numbersbellow.length}
                    cutoff={this.state.cutoff}
                />
                <Button
                    onClick={this.handleFormSubmit} />
            </Card>
        )
    }
}
export default Question1;