import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg/1280px-Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg",
    adress: "Marco 0",
    description: "This is our first meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg/1280px-Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg",
    adress: "Marco 1",
    description: "This is our first meetup!",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg/1280px-Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg",
    adress: "Marco 2",
    description: "This is our first meetup!",
  },
];

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUP
        }
    };
}

export default HomePage;
