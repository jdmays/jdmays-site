/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} query - Question asked
 * @property {string} short_answer - Short answer - separate paragraph
 * @property {string} answer - Longer answer
 * @property {string|undefined} version - version
 * @property {string|undefined} author - author
 */
const questions = [
    {
        query: "Is Rockford International Café connected with Rockford University?",
        short_answer: "",
        answer: "No, but we are volunteers with the Community Friends Program at Rockford University. We maintain regular contact with RU and usually someone from the RU Office of Global Affairs attends. We started Rockford International Café (RIC) as a way to better meet students in the Community Friends Program.",
        version: '1.0',
        author: 'JD Mays',
        number: 1,
    },

    {
        query: "Do the people that are part of Rockford International Café (RIC) get paid in any way?",
        short_answer: "",
        answer: "No. We are all volunteers. Originally, we were (and still are) community friends but we thought that having a regular event would make it easier for both us and the students to make connections.",
        version: '1.0',
        author: 'JD Mays',
        number: 2,
    },

    {
        query: "What is the purpose of RIC (Rockford International Café)?",
        short_answer: "The Cafe provides a low stress way of meeting and interacting with Americans outside of school.",
        answer: "Imagine coming to the United States for the first time. Maybe you don't speak English that well and then some strange person invites you to their house for dinner.  \n" +
            "What to expect?  Should I bring something?  How should I dress?  Will we be eating something weird? Awkward, right? \n" +
            "Now imagine from the hosts point of view... Are they going to think I'm boring? What will they expect? What if my husband says something stupid? \n" +
            "These are all questions that arise. It is much easier to meet in a group and have a chance to get to know people before being put in a potentially awkward situation. \n",
        version: '1.0',
        author: 'JD Mays',
        number: 3,
    },

    {
        query: "I see that RIC is held at a church. Is this a church service or religious event?",
        short_answer: "No, it is not a church service. The church allows us to use their building and it is close to the RU Campus.",
        answer: "Whatever your religion or even if you have no religion, it does not matter. We do say a short prayer before we eat but all that is required is a moment of silence.",
        version: '1.0',
        author: 'JD Mays',
        number: 4,
    },



    {
        query: "I've noticed that many of the volunteers are Christians. Is this some sneaky way for them to get us to become Christians?",
        short_answer: "",
        answer: "No, we aren't being sneaky. We would love it if everyone believed as we do, but that is between you and God.\n" +
            "Our priority is to develop a relationship with you and enjoy learning about your country. We love doing that. At the same time, we are very transparent about who we are and what we believe. \n" +
            "You came to America to meet real live Americans, right? \n" +
            "You can't do that if we hide behind a facade that doesn't represent who we really are.\n",
        version: '1.0',
        author: 'JD Mays',
        number: 5,
    },

    {
        query: "You said we meet at a church, but the building looks nothing like a church. Why?",
        short_answer: "Religion has a unique place in American culture. Many of our churches look like shopping malls.",
        answer: "Many of us have visited grand cathedrals in Europe. They are awesome but it doesn't seem like much is happening there.  For many Americans, attending church is just a part of our lives, like going to the shopping mall, only better.",
        version: '1.0',
        author: 'JD Mays',
        number: 6,
    },

    {
        query: "I've been asked about providing an email and/or phone number. Am I going to get pestered constantly as a result?",
        short_answer: "",
        answer: "We hate when we get nuisance calls and emails. We don't do that. We provide a weekly reminder and a notice if our usual location changes. That's pretty much it.",
        version: '1.0',
        author: 'JD Mays',
        number: 7,
    },


    {
        query: "If I don't have a car, how do I get there?",
        short_answer: "We will pick you up at 5:45 pm at Burpee on Café nights. Please be on time. (Jim hates to eat late.)",
        answer: "Our usual location is across East State Street and then East about a mile. It's a little difficult to find and there is no sidewalk on East State Street. (We are a car culture and we drive everywhere, even when we should walk.)",
        version: '1.0',
        author: 'JD Mays',
        number: 8,
    },

    {
        query: "When is it?",
        short_answer: "Usually, every other Friday throughout the academic year.",
        answer: "We will post a schedule and also send out a reminder. Please give us your email and/or phone number so we can send it to you.",
        version: '1.0',
        author: 'JD Mays',
        number: 9,
    },

    {
        query: "Who can I contact with other questions?",
        short_answer: "Jim Mays via email at jdmays@gmail.com or by phone at +1 (815) 222-9152 (Or any of the other volunteers.)",
        answer: "Julie Griffith at Rockford University Office of Global Affairs may also be able to answer your questions or get you in touch with one of us.  Julie represents Rockford University not RIC, but we stay in close contact with her. Her email is: JGriffith@forckford.edu or phone: +1 (815) 394-5118",
        version: '1.0',
        author: 'JD Mays',
        number: 10,
    },
    {
        query: "Why is the website so bland?",
        short_answer: "",
        answer: "This is the website you get when a programmer does it.",
        version: '1.0',
        author: 'JD Mays',
        number: 11,
    },
    {
        query: "Other questions? Did we miss something?",
        short_answer: "Let us know and we'll add it.",
        answer: "",
        version: '1.0',
        author: 'JD Mays',
        number: 12,
    },

];

export default questions;