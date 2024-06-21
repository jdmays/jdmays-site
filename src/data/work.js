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
        company: 'Informulate, LLC',
        position: 'Senior Software Engineer ',
        start: 'October 2021',
        end: 'June 2024',
        startYear: '2021',
        endYear: '2024',
        summary: ``,
        highlights: [
            'Provide programming for web applications, employing a comprehensive range of technologies to meet customer needs.',
            'Collaborate with cross-functional teams to design, develop, and implement solutions that enhance user experience and drive business growth.',
            'Continuously innovate and improve existing systems based on market demand and emerging technologies.',
        ],
    },
    {
        company: 'Lightning Step Technologies',
        position: 'Vice President of Product Development',
        start: 'December 2015',
        end: 'November 2020',
        startYear: '2015',
        endYear: '2020',
        summary: ``,
        highlights: [
            'Co-founded the company and spearheaded the development of an Electronic Medical Record Application, the flagship product of the organization.',
            'Managed the entire Software as a Service (SaaS) lifecycle during the initial two years, ensuring seamless delivery and customer satisfaction.',
            'Led product enhancements based on market research and customer feedback, contributing to the company\'s growth and success.',
        ],
    },
    {
        company: 'Kiva Recovery Center ',
        position: 'Director of Information Technology',
        start: 'January 2013',
        end: 'December 2015',
        startYear: '2013',
        endYear: '2015',
        summary: ``,
        highlights: [
            'Established information technology infrastructure for company startup, including software development and network management.',
            'Developed software solutions for documentation of services provided, optimizing internal processes and improving data management.',
            'Provided training and ongoing support to users, ensuring smooth operation of IT systems.',
        ],
    },

    {
        company: 'Village of Stillman Valley',
        position: 'President/Mayor',
        start: 'March 2004',
        end: 'April 2013',
        startYear: '2004',
        endYear: '2013',
        summary: ``,
        highlights: [
            'Elected to two consecutive terms, serving as the Chief Executive for the Village of Stillman Valley, Illinois.',
            'Implemented strategic initiatives to promote community development and enhance quality of life for residents.',
            'Improved financial reporting and practiced fiscal responsibility to result in a financial surplus.',
            'Led effort to build a multi-million dollar wastewater treatment plant.',
        ],
    },


    {
        company: 'Netsmart Technologies',
        position: 'Senior Solution Architect',
        start: 'August 2005',
        end: 'August 2012',
        startYear: '2005',
        endYear: '2012',
        summary: ``,
        highlights: [
            'Managed projects for new customer implementations, overseeing technical design requirements and providing consultation on industry best practices.',
            'Led a team of project managers in the development and implementation process for new customer organizations, ensuring successful project delivery.',
        ],
    },

    {
        company: 'Rosecrance Health Network',
        position: 'Vice-President of Administrative Services',
        start: 'January 1998',
        end: 'August 2005',
        startYear: '1998',
        endYear: '2005',
        summary: ``,
        highlights: [
            'Provided leadership to HealthNet Employee Assistance Program and staff. Including clinical decision making and communication with customers.',
            'Managed partnerships with various healthcare entities to enhance operational efficiency and collaboration.',
            'Chief Privacy Officer implementing HIPAA policies across the entire organization.',
            'Oversaw Information Technology Department including evaluation and development of clinical information systems.',
        ],
    },

];

export default work;