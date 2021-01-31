import React, { Component } from 'react';
// import Answers from '../data/dataAnswers'
// import Accordion from '../components/Accordion'


class Accordion extends Component {

    state = { 
        isVisible: false,
        isVisible2: false
     }

     handleIsVisible = () => {
         this.setState({ isVisible: !this.state.isVisible });
     }
     handleIsVisible2 = () => {
        this.setState({ isVisible2: !this.state.isVisible2 });
     }
    render() { 
        return (
            <article>
                <div className="question">
                    <h3>{this.props.question}</h3>
                    {/* //versión 2:
                    <h3>{this.props.faq.question}</h3> */}
                    <button onClick={this.handleIsVisible}>+</button>
                </div>

                <hr style={{display: this.state.isVisible ? "block" : "none"}}/>
                
                <div className="question" style={{display: this.state.isVisible ? "block" : "none"}}>
                    <div className="answer1">
                        <h4>{this.props.answerShort}</h4>
                        <button onClick={this.handleIsVisible2}>+</button>
                    </div>
                </div>

                <div className="question">
                    <h4 style={{display: this.state.isVisible2 ? "block" : "none"}}>{this.props.answerLong}
                    </h4>
                </div>
            </article>
          );
    }
}
 
export default Accordion;