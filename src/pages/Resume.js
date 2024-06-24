import ResumeAddress from '../Resume/ResumeAddress';
import ResumeExperience from '../Resume/ResumeExperience';
import ResumeDegrees from "../Resume/ResumeDegrees";
import ResumeSkillsList from "../Resume/ResumeSkillsList";

const Resume = () => {
  return (
    <div className="bg-purple-100 text-gray-800">
      <div className="container mx-auto py-10 px-5">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">James D. Mays</h2>
                <p className="text-sm text-gray-600">
                  Software Developer
                </p>
              </div>
              <div>
                <ResumeAddress/>
              </div>
            </div>
            <hr className="my-4"/>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <ResumeExperience/>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <ResumeSkillsList/>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <ResumeDegrees/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
