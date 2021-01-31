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

{/* Versión 2: en lugar de dar nombres a cada una de las Keys, lo haremos con el objecto Data entero. Además, como no nos dan id en el array, le damos el parámetro index entre los paréntesis: */}
// const Faq = () => {
//     return ( 
//         <section>
//             {allAnswers.map((question, index) => <Accordion
//             key={index}
//             faq ={question} //wie übergeben alles was in question ist, als ein Objekt
//             />)}
//         </section>
//      );
// }
export default Faq;