import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "meetup1",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F485590079%2F28178835685%2F1%2Foriginal.20190321-142207?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=56%2C0%2C1086%2C543&s=fcf4047bf5c0b6b198b86215ba34d4c3",
    address: "vancouver",
    description: "JS meetup"
  }
];

const Home = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default Home;
