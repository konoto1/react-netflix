import "./SectionTwo.css";

const list = [
    '../../public/movie1.png',
    '../../public/movie2.png',
    '../../public/movie3.png',
    '../../public/movie4.png',
    '../../public/movie5.png',
];

export const SectionTwo = () => {

    return (
        <>
            <section className="sectionTwo">
                <h2>Trending Now</h2>
                <div className="selectionContainer">
                    <p>Lithuania <span>▼</span></p>
                    <p>Movies <span>▼</span></p>
                </div>
                <div className="imgContainer">
                    {list.map((url, index) => 
                    <div className="singleImg" key={index}> 
                        <span>{index +1}</span><img src={url} alt="img" /> 
                    </div>)}
                </div>
            </section>
        </>
    );
};