//import { Fragment } from "react/cjs/react.production.min";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.meetup.image} alt={props.meetup.title} />
      <h1>{props.meetup.title}</h1>
      <address>{props.meetup.adress}</address>
      <p>{props.meetup.description}</p>
    </section>
  );
}

export default MeetupDetail;
