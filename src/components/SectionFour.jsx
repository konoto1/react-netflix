import "./SectionFour.css";
import { useState } from "react";


export const SectionFour = () => {

    const [data, setData] = useState([
    {
      title: 'What is Netflix?',
      text: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!',
      status: 'hidden',
      icon: '+'
    },
    {
      title: 'How much does Netflix cost?',
      text: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts.',
      status: 'hidden',
      icon: '+'
    },
    {
      title: 'Where can I watch?',
      text: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app.Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.',
      status: 'hidden',
      icon: '+'
    },
    {
      title: 'How do I cancel?',
      text: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
      status: 'hidden',
      icon: '+'
    },
    {
      title: 'What can I watch on netflix?',
      text: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
      status: 'hidden',
      icon: '+'
    },
    {
      title: 'Is Netflix good for kids?',
      text: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN - protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
      status: 'hidden',
      icon: '+'
    },
    {
      title: 'Why am I seeing this language?',
      text: 'Your browser preferences determine the language shown here.',
      status: 'hidden',
      icon: '+'
    },
  ])
  function hiddenPress(title) {
      setData(data.map(item => title === item.title ? item.status === 'test' ? { ...item, status: 'hidden', icon: '+' } : { ...item, status: 'test', icon: 'x' } : { ...item, status: 'hidden', icon: '+' }));
  }
  //prev => prev.map(title === prev.title ? { ...prev, status: 'test' } : { ...prev, status: 'hidden' })
  return (
    <>
     <section className="sectionFour">
        <h2>Frequently Asked Questions</h2>
      {data.map((item, index) =>
        <div className='sectionFourBtnContainer' key={index} onClick={() => hiddenPress(item.title)}>
          <div className="titleContainer">
            <p>{item.title}</p>
            <p>{item.icon}</p>
          </div>
          <p className={item.status + ' text'} >{item.text}</p>
        </div>
      )}
      </section>
    </>
  )
}

//     return (
//         <section className="sectionFour">
//             <h2>Frequently Asked Questions</h2>
//             <div>
//                 <div className="sectionFourBtnContainer">
//                     <button>What is Netflix?</button>
//                     <div className="panel">
//                         <p>Lorem ipsum...</p>
//                     </div>
//                 </div>
//                 <div className="sectionFourBtnContainer">
//                     <button>How much does Netflix cost?</button>
//                      <div className="panel">
//                         <p>Lorem ipsum...</p>
//                     </div>
//                 </div>
//                 <div className="sectionFourBtnContainer">
//                     <button>Where can I watch?</button>
//                      <div className="panel">
//                         <p>Lorem ipsum...</p>
//                     </div>
//                 </div>
//                 <div className="sectionFourBtnContainer">
//                     <button>How do I cancel?</button>
//                      <div className="panel">
//                         <p>Lorem ipsum...</p>
//                     </div>
//                 </div>
//                 <div className="sectionFourBtnContainer">
//                     <button>What can I watch on Netflix?</button>
//                      <div className="panel">
//                         <p>Lorem ipsum...</p>
//                     </div>
//                 </div>
//                 <div className="sectionFourBtnContainer">
//                     <button>Is Netflix good for kids?</button>
//                      <div className="panel">
//                         <p>Lorem ipsum...</p>
//                     </div>
//                 </div>
//                 <div className="sectionFourBtnContainer">
//                     <button>Why am I seeing this language?</button>
//                      <div className="panel">
//                         <p>Lorem ipsum...</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }