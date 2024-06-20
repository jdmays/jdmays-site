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
const work = [
    {
        name: 'Acme Dynamite',
        position: 'VP of Booms',
        start: 'June 2001',
        end: 'July 2014',
        summary: `Make big booms`,
        highlights: [
            'one thing',
            'another thing',
            'a third thing',
        ],
    },
    {
        name: 'Amalgamated Widgets',
        position: 'Director of Widgets',
        start: 'June 2001',
        end: 'July 2014',
        summary: `The Premier Widget maker`,
        highlights: [
            'blah',
            'more blah',
        ],
    },
    {
        name: 'Doe Enterprises',
        position: 'CTO',
        start: 'June 2001',
        end: 'July 2014',
        summary: `John Doe founded this company in his basement.`,
        highlights: [
            'yeah',
            'oh yeah',
        ],
    },
];

export default work;