import React, { useState } from 'react';
import Terminal from '../components/Terminal';
import educationData from '../data/education.json';

const Education = () => {
  const [showEnrollments, setShowEnrollments] = useState(false);

  return (
    <div className="min-h-screen pt-20 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4 text-black">
            EDUCATION_MODULE.EXE
          </h1>
          <div className="font-mono text-black">
            Academic achievements and learning journey
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Terminal title="UNIVERSITY_INFO.TXT">
              <div className="space-y-4">
                <div>
                  <span className="text-white">🎓 Institution:</span>
                  <br />
                  {educationData.university}
                </div>
                <div>
                  <span className="text-white">📜 Degree:</span>
                  <br />
                  {educationData.degree}
                </div>
                <div>
                  <span className="text-white">📊 Cumulative GPA:</span>
                  <br />
                  <span className="text-2xl font-bold text-white">{educationData.gpa}</span>
                </div>
              </div>
            </Terminal>

            <Terminal title="ACHIEVEMENTS.LOG">
              <div className="space-y-4">
                {educationData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <div className="font-bold text-white">{achievement.title}</div>
                      <div className="text-sm text-white">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Terminal>
          </div>

          <div className="space-y-6">
            <Terminal title="SEMESTER_GPA.DAT">
              <div className="overflow-x-auto">
                <table className="w-full font-mono">
                  <thead>
                    <tr className="border-b border-white">
                      <th className="text-left py-2 text-white">Semester</th>
                      <th className="text-right py-2 text-white">GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {educationData.semesterGPA.map((semester, index) => (
                      <tr key={index} className="border-b border-white">
                        <td className="py-2">{semester.semester}</td>
                        <td className="text-right py-2 font-bold text-white">
                          {semester.gpa}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Terminal>

            <Terminal title="COURSE_MANAGER.EXE">
              <div className="space-y-4">
                <button
                  onClick={() => setShowEnrollments(!showEnrollments)}
                  className="w-full px-4 py-2 border-2 border-white bg-black text-white hover:bg-white hover:text-black transition-all duration-200 font-mono"
                >
                  📘 {showEnrollments ? 'Hide' : 'Show'} Enrollments
                </button>

                {showEnrollments && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h3 className="text-white font-bold mb-2">Current Courses:</h3>
                      <ul className="space-y-1">
                        {educationData.currentCourses.map((course, index) => (
                          <li key={index} className="text-sm">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-white font-bold mb-2">Past Courses:</h3>
                      <ul className="space-y-1">
                        {educationData.pastCourses.map((course, index) => (
                          <li key={index} className="text-sm">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </Terminal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;