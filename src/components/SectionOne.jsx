import image from '../../public/logo.png';
import "./SectionOne.css";

export const SectionOne = () => {
    return (
        <>
            <section className="sectionOne">
                <header>
                    <img className='netflixLogo' src={image} alt="Netflix Logo" />
                    <div className='signInContainer'>
                        <span className='language'>૱ English ▼</span>
                        <button className='signIn'>Sign in</button>
                    </div>
                </header>
                <div className='mainInfoContainer'>
                    <h1>Unlimited movies, TV <br/> shows, and more</h1>
                    <p>Starts at EUR 7.99. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your <br/> membership.</p>
                    <div className='emailContainer'>
                        <input type="text" placeholder='Email adress' />
                        <button>Get Started › </button>
                    </div>
                </div>
            </section>
        </>
    )
}