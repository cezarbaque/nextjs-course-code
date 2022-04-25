import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  const DUMMY_DETAIL = { image : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg/1280px-Webysther_20190306143112_-_Catedral_Metropolitana_de_S%C3%A3o_Paulo.jpg",
    title : "A First Meetup",
    adress: "some street 5, some city",
    description: "The Meetup description"
      
  }
    return (<MeetupDetail meetup={DUMMY_DETAIL}/>);
}

export default MeetupDetails;
