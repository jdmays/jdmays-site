/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} start - Start Month and Year of the position
 * @property {string|undefined} end - End Month and Year of the position
 * @property {string|undefined} summary - summary of position
 * @property {string[]} highlights - highlights
 */
const questions = [
    {
        query: 'Is this connected to Rockford University?',
        answer: 'No. However, the hosts are volunteers who also volunteer with the Community Friends Program at Rockford University. We maintain regular contact with RU and usually someone from the RU Office of Global Affairs attends. ',
        version: '1.0.0',
        author: 'JD Mays',
        number: 1,
    },
    {
        query: 'Do the people that are part of Rockford International Cafe (RIC) get paid in any way?',
        answer: 'No. We are all volunteers.  Originally, we were (and still are) community friends but we thought that having a regular event would make it easier for both us and the students to make connections.',
        version: '1.0.0',
        author: 'JD Mays',
        number: 2,
    },
    {
        query: 'What is the purpose of RIC (Rockford International Cafe)?',
        short_answer: "The Cafe provides a low stress way of meeting and interacting with Americans outside of school. ",
        answer: "Imagine coming to the United States for the first time. Maybe you don't speak English " +
            "that well and then some strange person invites you to their house for dinner.  What to expect?  Should I bring something?  " +
            "How should I dress? Will we be eating something weird? Awkward, right? Now imagine from the hosts point of view... Are they going to think I'm boring?  " +
            " What will they expect?  What if my husband says something stupid? These are " +
            " all questions that arise.  It is much easier to meet in a group and have a chance to get to know people without going to their house.",
        version: '1.0.0',
        author: 'JD Mays',
        number: 3,
    },
    {
        query: 'I see that RIC is held at a church.  Is this a church service or religious event?',
        short_answer: "No, it is not a church service.  The church allows us to use their building and it is close to the RU Campus.",
        answer: "Whatever your religion or even if you have no religion, it does not matter. " +
            "We do say a short prayer before we eat but all that is required " +
            "is a moment of silence.",
        version: '1.0.0',
        author: 'JD Mays',
        number: 4,
    },
    {
        query: "I've noticed that many of the volunteers are Christians.  Is this some sneaky way for them to get us to become Christians?",
        short_answer: "No, we aren't being sneaky. We would love it if everyone believed as we do, but that is between you and God. ",
        answer: "Our first priority is to develop a relationship with you and enjoy learning about your country.  We love that.  At the same time, we are " +
            "very transparent about who we are and what we believe.  " +
            "You came to America to meet real live Americans, right?  You can't do that if we hide behind a facade that " +
            "doesn't represent who we really are.",
        version: '1.0.0',
        author: 'JD Mays',
        number: 5,
    },
    {
        query: "You said we meet at a church, but the building looks nothing like a church. Why?",
        short_answer: "Americans are weird about religion. Many of our churches look like shopping malls.",
        answer: "Many of us have visited grand cathedrals in Europe.  They are awesome but it doesn't seem like much is happening there. " +
        " Very many people, attending church is just a part of their lives, like going to the shopping mall.",
        version: '1.0.0',
        author: 'JD Mays',
        number: 6,
    },
    {
        query: "I've been asked about providing an email and/or phone number.  Am I going to get pestered constantly as a result?",
        short_answer: "",
        answer: "We hate when we get nuisance calls and emails.  We don't do that.  We provide a weekly reminder and a notice if our usual location changes. That's pretty much it.",
        version: '1.0.0',
        author: 'JD Mays',
        number: 7,
    },
    {
        query: "If I don't have a car, how do I get there?",
        short_answer: "We provide transportation. If you know someone with a car, you can always ride with them. We don't recommend walking.",
        answer: "Our usual location is across East State Street and East about a mile.  It's a little difficult to find and there is no sidewalk on East State Street." +
            "(We are a car culture and we drive everywhere, even when we should walk.)",
        version: '1.0.0',
        author: 'JD Mays',
        number: 8,
    },
    {
        query: "Where do I go to get a ride?",
        short_answer: "",
        answer: "During our regular nights, we will pick you up at Burpee at 5:45 pm. Please be on time.",
        version: '1.0.0',
        author: 'JD Mays',
        number: 9,
    },
    {
        query: "When is it?",
        short_answer: "Usually, every other week throughout the academic year.",
        answer: "We will post a schedule and also send out a reminder.  Please give us your email and/or phone number so we can send it to you.",
        version: '1.0.0',
        author: 'JD Mays',
        number: 10,
    },
    {
        query: "Who can I contact with other questions?",
        short_answer: "Jim Mays via email at jdmays@gmail.com or by phone at +1 (815) 222-9152",
        answer: "Julie Griffith at Rockford University Office of Global Affairs may also be able to answer your questions or get you in touch with one of us. " +
            " Julie represents Rockford University not RIC, but we stay in close contact with her. Her email is: JGriffith@forckford.edu or phone: +1 (815) 394-5118",
        version: '1.0.0',
        author: 'JD Mays',
        number: 10,
    },
];

export default questions;