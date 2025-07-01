import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">CONTACT</h2>
      <p className="contact-description">
        Are You Looking For Your Business Online Presence? I am here. 😊
      </p>

      <div className="contact-section-detail">
        <div className="contact-box">
          <img src='/user.png' className='contact-img' style={{filter: 'brightness(0) saturate(100%) invert(76%) sepia(21%) saturate(716%) hue-rotate(84deg) brightness(102%) contrast(89%)'}}/>
          <h3 className="contact-box-title">Waris Petrod</h3>
          <p className="contact-box-detail">Frontend Developer</p>
        </div>

        <div className="contact-box">
          <img src='/front-end-programming.png' className='contact-img' style={{filter: 'brightness(0) saturate(100%) invert(76%) sepia(21%) saturate(716%) hue-rotate(84deg) brightness(102%) contrast(89%)'}}/>
          <h3 className="contact-box-title">Job Title</h3>
          <p className="contact-box-detail">Frontend Developer</p>
        </div>

        <div className="contact-box">
          <img src='/email.png' className='contact-img' style={{filter: 'brightness(0) saturate(100%) invert(76%) sepia(21%) saturate(716%) hue-rotate(84deg) brightness(102%) contrast(89%)'}}/>
          <h3 className="contact-box-title">Email</h3>
          <p className="contact-box-detail">hamwaris.ptr@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact