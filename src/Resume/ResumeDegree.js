
/*
Note: If we were using a regular css stylesheet instead of Tailwind,
we would probably not have a whole batch of separate components for the
resume.  Yes we could define some custom classes in tailwind but by
the time you do that, you might as well just do the whole thing in css.
-JDM
 */

const Degree = ({ degree }) => {
    return (
        <div className="p-4 border-b">
            <h2 className="text-xl font-bold">{degree.school}</h2>
            <p className="text-md">{degree.degree}</p>
            <a href={degree.link} className="text-blue-500">{degree.link}</a>
            <p className="text-sm text-gray-500">{degree.year}</p>
        </div>
    );
}

export default Degree;
