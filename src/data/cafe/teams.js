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
        short_blurb: "A short little thing here that is the first line or paragraph.",
        bio: "More of an extended thing about you. ",
        contact_info: "Email or cell or whatever you want to provide.  Optional",
        quirky: "Something clever to make you seem cool and memorable (Optional - Not everyone likes to be quirky)",
        image: '',
        id: 1,
    },
    {
        name: "Lisa Downing",
        short_blurb: "a short blurb here",
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
        bio: "I hate writing these bios as much as anyone.  ",
        contact_info: "",
        quirky: "Favorite Candy Bar: Reese's",
        image: 'JD Mays',
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