import allAnswers from '../data/dataAnswers'
import Accordion from './Accordion'

const Faq = () => {
    return ( 
        <section>
            {allAnswers.map(singleAnswer => <Accordion
            question ={singleAnswer.question}
            answerShort ={singleAnswer.answer}
            answerLong ={singleAnswer.answerLong}
            key={singleAnswer.id}
            />)}
        </section>
     );
}

export default Faq;