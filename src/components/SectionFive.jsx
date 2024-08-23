import "./SectionFive.css";

export const SectionFive = () => {

    return (
        <>
            <section className="sectionFive">
                <div className='sectionFiveContainer'>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='emailContainerFive'>
                        <input type="text" placeholder='Email adress' />
                        <button>Get Started › </button>
                    </div>
                </div>
            </section>
        </>
    );
};