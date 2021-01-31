import React, { useState } from 'react';
import allAnswers from '../data/dataAnswers'
import "./Accordion2.css"
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Accordion2 = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
          //if clicked question is already active, then close it
          return setClicked(null);
        }
    
        setClicked(index);
      };
    
      return (
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
            <section id="accordionSec">
                <h2>Accordion with hooks and data</h2>
                <article id="container">
                {allAnswers.map((item, index) => {
                    return (
                        <div>
                            <div className="wrap" onClick={() => toggle(index)} key={index}>
                                <h3>{item.question}</h3>
                                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                            </div>
                            {clicked === index ? (
                                <div className="dropdown wrap" >
                                    <p>{item.answer}</p>
                                </div>
                            ) : null}
                            
                        </div>
                    );
                })}
                </article>
            </section>

        </IconContext.Provider>
      )
};

export default Accordion2;