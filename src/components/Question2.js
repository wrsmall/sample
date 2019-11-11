import React, { Component } from 'react';
import Card from './card';
import Form from './forms';
import Answer from './answers';
import Button from './buttons';


class Question2 extends Component {
    state = {
        data: '',
        jumble: 0,
        brokenword: {},
        answer: ''

    }
    componentDidMount = () => {
        this.setState({
            data: '',
            brokenword: {},
        })
    }

    Jumble = (word) => {
        console.log(word);
        console.log(this.state.jumble);
        const slice = word.slice(0, this.state.jumble)
        const ans = [];
        for (let i = this.state.jumble; i < word.length; i++) {
            ans.push(word[i]);
        }

        this.setState({
            answer: ans.concat(slice).join('').replace(",",'')

        }, () => {
            console.log(this.state.answer);

        });
    }


    handleInputChange = event => {
        console.log(this.state.data);
        const { name, value } = event.target;

        this.setState({
            [name]: value,

        }, () => {
            this.setState({
                brokenword: this.state.data.split("")
            })
        });
        console.log(this.state.data);
        console.log(`this is  stringy ${this.state.brokenword}`)
    }

    handleFormSubmit = () => {
        const word = this.state.brokenword;
        this.Jumble(word)
    }



    render() {
        return (
            <Card
                name="Question 2"
                question="Rotate the characters in a string by a given input and have 
                    the overflow appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.">
                    
                <Form
                    name="data"
                    placeholder="Enter a word you would like to jumble"
                    onChange={this.handleInputChange}
                    value={this.state.data}
                />
                <Form
                    name="jumble"
                    placeholder="How many would you like to jumble?"
                    onChange={this.handleInputChange}
                    value={this.state.jumble}
                />
                <Answer
                    header="The Jumbled Word is"
                    answer={this.state.answer}
                    cutoff={this.state.cutoff}
                />
                <Button
                    onClick={this.handleFormSubmit} />
            </Card>
        )
    }
}
export default Question2;