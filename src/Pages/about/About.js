import "./about.css";

const About = () => {
    const paragraphStyle = {
        textAlign: 'justify'
    }
  return (
    <section className="about">
      <h1>About Us</h1>
      <p>We are an online book store</p>
      <p style={paragraphStyle}>Welcome to our online book store, where literature comes to life and 
        stories find their way into the hearts of readers. At our book store,
         our passion for books drives our commitment to providing a diverse and captivating collection for every reader. 
         Founded with the belief that the written word has the power to inspire, educate, and entertain, 
         we curate a wide range of genres, ensuring there's something for everyone. 
         Whether you're a seasoned bookworm or a casual reader, our carefully selected titles promise to transport you to different worlds and ignite your imagination. We strive to create a seamless and enjoyable shopping experience, offering not just books, but a gateway to a world of literary exploration. Thank you for choosing our book store , 
        where the love for books is celebrated, and every page turns into a new adventure.
        <br />
        <strong>Version: 1.0.0</strong>
        
      </p>
      
    </section>
    
  );
};

export default About;