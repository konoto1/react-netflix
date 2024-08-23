import "./SectionThree.css";

const data =[
    {
      title:'Enjoy on your TV',
      text: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      img:'../../public/icon1.png'
    },
    {
      title: 'Download your shows to watch offline',
      text: 'Save your favorites easily and always have something to watch.',
      img: '../../public/icon2.png'
    },
    {
      title: 'Watch everywhere',
      text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      img: '../../public/icon3.png'
    },
    {
      title: 'Create profiles for kids',
      text: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.',
      img: '../../public/icon4.png'
    },
  ];

export const SectionThree = () => {

    return (
        <>
            <section className="sectionThree">
                <h2>More Reasons to Join</h2>
                <div className="cardContainer">
                    {data.map((item, index) =>
                         <div className='card' key={index}>
                           <h2>{item.title}</h2>
                           <p>{item.text}</p>
                           <img src={item.img} alt="image" />
                         </div>)}
                </div>
            </section>
        </>
    );
};