import Cv from "./../UI/Cv";
import Card from "../UI/Card";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Card>
      <div class={classes["image-container"]}>
        <div class={classes.title}>Welcome to my portfolio page!</div>
      </div>

      <div>
        <h2>
          I have recently graduated with a B.Sc. degree in Software Engineering.{" "}
          <br />
          Throughout my studies, I maintained a GPA of 91, demonstrating my
          dedication and commitment to academic excellence. <br />
          Now that I have completed my degree, I am eager to apply my knowledge
          and skills in a challenging professional role. As an autodidact, I
          possess a strong passion for continuous learning and innovation.{" "}
          <br />
          I am proactive in acquiring new skills and staying up-to-date with the
          latest industry trends. <br />
          My ability to learn independently has been instrumental in my academic
          success, and I am confident that it will translate into professional
          success as well. I excel under pressure and have a proven track record
          of performing well in demanding situations.
          <br />
          Whether working as part of a team or independently, I am able to adapt
          and deliver results. <br />
          My loyalty and passion for my work drive me to go above and beyond in
          every task I undertake. If you have any specific requirements or if
          there is any additional information you would like to know, please let
          me know.
          <br />
          You can find my contact information on the contact page.
        </h2>
      </div>

      <Cv />
      <div className={classes.text}>
        Here you can find out about me, my experiance, my projects and the
        technologies I can work with...
      </div>
    </Card>
  );
};

export default Home;
