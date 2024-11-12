export default function Contact() {
    return (
        <div className="contact-form-container container">
            <form className="contact-form">
                <h2 className="form-title">Contact Me</h2>
                <input type="email" placeholder="Your Email" className="input-field" />
                <textarea placeholder="Your Message" className="input-field" rows="6"></textarea>
                <button className="submit-btn">Mail Me</button>
            </form>
        </div>
    );
}
