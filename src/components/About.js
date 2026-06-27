import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                Welcome to our restaurant review platform! We are passionate about helping food enthusiasts discover the best dining experiences in their area. Our mission is to provide honest and insightful reviews of restaurants, cafes, and eateries, so you can make informed decisions about where to dine.
            </p>
            <p>
                Our team of dedicated reviewers visits a wide range of establishments, from local favorites to hidden gems, and shares their experiences with you. We believe that great food brings people together, and we strive to create a community where food lovers can connect and share their culinary adventures.
            </p>
            <p>
                Thank you for visiting our platform, and we hope you enjoy exploring the diverse world of dining with us!
            </p>

            <User field= "Functional" name="Yash" location="Pune" contact="1234567890" />
            <UserClass field="First Class" name="Yash" location="Pune" contact="1234567890"/>
            <UserClass field="Second Class" name="Yash" location="Pune" contact="1234567890"/>
        </div>
    );
};

export default About;