import React, { Component } from 'react';
import Card from './card';
import Paragraph from './paragraph';


class Question3 extends Component {
   

    render() {
        return (
            <Card
                name="Question 3"
                question="If you could change 1 thing about your favorite framework/language/platform (pick one),
                 what would it be?"
                >
                <Paragraph/>
            </Card>
        )
    }
}
export default Question3;