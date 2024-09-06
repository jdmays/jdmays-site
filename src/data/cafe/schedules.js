/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} month - month
 * @property {string} dom - date of the month
 * @property {string} suffix - the part that comes after the number
 * @property {string|undefined} dow - day of the week
 * @property {string|undefined} year - year
 * @property {string|undefined} location - location
 * @property {string|undefined} info - any additional information
 * @property {number} id - unique id
 */
const schedules = [
    {
        month: "September",
        dom: 6,
        suffix: "th",
        dow: "Friday",
        year: 2024,
        location: "River Valley Community Church",
        info: "",
        id: 1,
    },
    {
        month: "September",
        dom: 20,
        suffix: "th",
        dow: "Friday",
        year: 2024,
        location: "River Valley Community Church",
        info: "",
        id: 2,
    },
    {
        month: "October",
        dom: 4,
        suffix: "th",
        dow: "Friday",
        year: 2024,
        location: "River Valley Community Church",
        info: "",
        id: 3,
    },
    {
        month: "October",
        dom: 18,
        suffix: "th",
        dow: "Friday",
        year: 2024,
        location: "River Valley Community Church",
        info: "",
        id: 4,
    },
    {
        month: "November",
        dom: 1,
        suffix: "st",
        dow: "Friday",
        year: 2024,
        location: "First Covenant Church, 316 Wood Road",
        info: "",
        id: 5,
    },
    {
        month: "November",
        dom: 15,
        suffix: "th",
        dow: "Friday",
        year: 2024,
        location: "River Valley Community Church",
        info: "",
        id: 6,
    },
    {
        month: "December",
        dom: 6,
        suffix: "th",
        dow: "Friday",
        year: 2024,
        location: "River Valley Community Church",
        info: "",
        id: 7,
    },
];

export default schedules;