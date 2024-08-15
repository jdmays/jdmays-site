/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - name(s) of team member(s)
 * @property {string|undefined} short_blurb - something brief for first paragraph
 * @property {string|undefined} bio - Some background info
 * @property {string|undefined} contact_info = Email, cellphone etc.
 * @property {string|undefined} quirky - Something quirky about the team member (optional)
 * @property {string|undefined} image - image of team member
 * @property {number} id - unique id
 */
const teams = [
    {
        name: "Marissa DeVlieger",
        short_blurb: "A short little thing here that is the first line or paragraph. Optional",
        bio: "Marissa grew up in the Rockford area and currently does some kind of job that Jim doesn't remember, but he's sure it's really important.",
        contact_info: "Email or cell or whatever you want to provide.  This is Optional",
        quirky: "Something clever to make you seem cool and memorable (Optional)",
        image: '',
        id: 1,
    },
    {
        name: "Lisa Downing",
        short_blurb: "",
        bio: "After winning the nobel prize for their ground breaking work on Quantum Physics... etc.  ",
        contact_info: "Email or cell or whatever you want to provide.  Optional",
        quirky: "Something clever to make you seem cool and memorable",
        image: '',
        id: 2,
    },
    {
        name: "Bruce and Susie Kramer",
        short_blurb: "a short blurb here",
        bio: "After winning the nobel prize for their ground breaking work on Quantum Physics... etc.  ",
        contact_info: "Email or cell or whatever you want to provide.  Optional",
        quirky: "Something clever to make you seem cool and memorable",
        image: '',
        id: 3,
    },

    {
        name: "Mike and Cathy Larson",
        short_blurb: "a short blurb here",
        bio: "After winning the nobel prize for their ground breaking work on Quantum Physics... etc.  ",
        contact_info: "Email or cell or whatever you want to provide.  Optional",
        quirky: "Something clever to make you seem cool and memorable",
        image: '',
        id: 4,
    },
    {
        name: "Jim and Melanie Mays",
        short_blurb: "Don't ask them about their dogs.",
        bio: "Jim and Melanie are from the Rockford area.  Melanie is a retired teacher and Jim is a computer programmer.  " +
            "They have two adult children; one who lives in Wisconsin and another who lives in Rockford.  They stay active " +
            "kayaking, hiking, and doing projects around the house. They have two German Shepherd Dogs that keep them busy. " +
            "They’ve traveled a little internationally and do so whenever they get the opportunity.  Melanie likes to create " +
            "art and feed their chickens when she is not training their dogs. " +
            "Jim is interested in history and knows more about random subjects than most normal people. He likes to take on Impossible Missions in his spare time.",
        contact_info: "Jim: jdmays@gmail.com, +1 (815) 222-9152 Melanie: melaniemays@gmail.com +1 (815) 990-9230",
        quirky: "",
        image: "",
        id: 5,
    },
    {
        name: "John and Bev Menken",
        short_blurb: "a short blurb here",
        bio: "After winning the nobel prize for their ground breaking work on Quantum Physics... etc.  ",
        contact_info: "Email or cell or whatever you want to provide.  Optional",
        quirky: "Something clever to make you seem cool and memorable",
        image: '',
        id: 6,
    },
    {
        name: "Steve and Rosie Patterson",
        short_blurb: "a short blurb here",
        bio: "After winning the nobel prize for their ground breaking work on Quantum Physics... etc.  ",
        contact_info: "Email or cell or whatever you want to provide.  Optional",
        quirky: "Something clever to make you seem cool and memorable",
        image: '',
        id: 7,
    },

];

export default teams;