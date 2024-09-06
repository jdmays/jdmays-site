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
        short_blurb: "Marissa is an Administrative Assistant at a wealth management company.",
        bio: "Marissa is an Administrative Assistant at a wealth management company.  She has an undergraduate and graduate degree in Speech Pathology. " +
            "She grew up in the Rockford area and is the second of four children. " +
            "She enjoys biking and spending time with her nieces and nephews. Her ethnicity is Swedish with a mix of other nationalities. (Like most Americans) " +
            "Her last vacation was spent at the family cabin in Northern Wisconsin.  (We refer to that area as, Up North)",
        contact_info: "",
        quirky: "She is left-handed and extremely funny, but you have to get to know her before you see it.",
        visited: "Canada, Ghana, and Brazil",
        image: '',
        id: 1,
    },
    {
        name: "Lisa Downing",
        short_blurb: "Lisa really loves getting to know international students.",
        bio: "Lisa is married to Mike Downing. She has at least one daughter, but we don't have her official bio so any further details will have to wait until then.  ",
        contact_info: "",
        quirky: "",
        visited: "",
        image: '',
        id: 2,
    },
    {
        name: "Bruce and Susie Kramer",
        short_blurb: "Bruce is a high school Engineering and Math teach at Rockford Lutheran High School. Susie is a homemaker.",
        bio: "Bruce has spent his entire life in Rockford. Susie is originally from Madison, Wisconsin. (about an hour north of here) " +
            "They have four children and five grandchildren. (All under the age of 4!)  Their two dogs are Scout and Indie. " +
            "Bruce enjoys board games as well as building and creating things. Susie enjoys gardening and traveling.",
        contact_info: "Email or cell or whatever you want to provide.  Optional",
        quirky: "Something clever to make you seem cool and memorable",
        visited: "France, Germany, Austria, Switzerland, China, Mexico, Canada, Romania, and Ireland",
        image: '',
        id: 3,
    },

    {
        name: "Mike and Cathy Larson",
        short_blurb: "Mike and Cathy met when they were 15 and 16 years old, started dating at the ages of 17 and 18, and got married at 20 and 21.",
        bio: "Mike is a Pattern Maker. (You'll need to have him explain to you what this is.) Cathy is a teacher and a homemaker. " +
            "Cathy home schooled all four of their children. They have four adult children and six grandchildren. They also have three cats; Dorcas, Reuben, and Magnum. " +
            "Mike is Swedish and Norwegian. Cathy is mostly Irish. They are both from the Rockford area. ",
        contact_info: "",
        quirky: "Mike and Cathy lived next door to Mike's parents for 30 years and now live next door to Mike's sister Melanie and her charming husband Jim.",
        visited: "Canada, Ethiopia, Puerto Rico, Jamaica, Other Caribbean Islands, Mexico, France, Switzerland, England, and Spain",
        image: '',
        id: 4,
    },
    {
        name: "Jim and Melanie Mays",
        short_blurb: "Jim and Melanie met in college when they were 18.",
        bio: "Jim and Melanie are from the Rockford area.  Melanie is a retired teacher and Jim is a computer programmer.  " +
            "They have two adult children; one who lives in Wisconsin and another who lives in Rockford.  They stay active " +
            "kayaking, hiking, and doing projects around the house. They have two German Shepherd Dogs that keep them busy. " +
            "They’ve traveled a little internationally and do so whenever they get the opportunity.  Melanie likes to create " +
            "art and feed their chickens when she is not training their dogs. " +
            "Jim is interested in history and knows more about random subjects than most normal people.",
        contact_info: "Jim: jdmays@gmail.com, +1 (815) 222-9152 Melanie: melaniemays@gmail.com +1 (815) 990-9230",
        quirky: "Jim is left-handed and most of his family members are also left-handed. Melanie is a great artist but she is very secretive about this so you should ask her to show you some of her work.",
        visited: "St. Martin, Grand Cayman, Canad, Scotland, Germany, The Netherlands, and Canada.",
        image: "",
        id: 5,
    },
    {
        name: "John and Bev Menken",
        short_blurb: "John and Bev are both teachers. They operate Rockford Tutors where they tutor students in various subjects.",
        bio: "John and Bev has three adult children and five grandchildren. Bev was originally from Richmond, Indiana and John was born in LaCrosse, Wisconsin.  ",
        contact_info: "Email or cell or whatever you want to provide.  Optional",
        quirky: "Their grand-dog pees whenever she sees them so they try to greet her outside.",
        image: '',
        id: 6,
    },
    {
        name: "Steve and Rosie Patterson",
        short_blurb: "Steve and Rosie share their backyard with golfers. (They live next to a golf course.)",
        bio: "Steve and Rosie are super nice and interesting to talk to, however, they remain a bit of an enigma since we don't have an " +
            "official bio from them.",
        contact_info: "",
        quirky: "If you need golf balls, I bet Steve could provide them.",
        image: '',
        id: 7,
    },

    {
        name: "Unknown Volunteer",
        short_blurb: "This space is reserved for anyone I may have forgotten. (Jim) ",
        bio: "If I forgot you it means that I probably have some real or imagined trauma from something you may or may not have done.  (You never know) " +
            "Or, most likely, I just forgot you.  Don't feel bad, I sometimes forget the names of family members and friends I've known for decades. ",
        contact_info: "",
        quirky: "",
        image: '',
        id: 8,
    },

];

export default teams;