import React, { useState } from 'react';
import Terminal from '../components/Terminal';
import educationData from '../data/education.json';

const Education = () => {
  const [showEnrollments, setShowEnrollments] = useState(false);

  return (
    <div className="min-h-screen pt-20 bg-black text-green-400">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-mono font-bold mb-4 wireframe-heading text-green-400">
            EDUCATION_MODULE.EXE
          </h1>
          <div className="font-mono text-green-300">
            Academic achievements and learning journey
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Terminal title="UNIVERSITY_INFO.TXT">
              <div className="space-y-4">
                <div>
                  <span className="text-green-300">🎓 Institution:</span>
                  <br />
                  {educationData.university}
                </div>
                <div>
                  <span className="text-green-300">📜 Degree:</span>
                  <br />
                  {educationData.degree}
                </div>
                <div>
                  <span className="text-green-300">📊 Cumulative GPA:</span>
                  <br />
                  <span className="text-2xl font-bold text-green-400">{educationData.gpa}</span>
                </div>
              </div>
            </Terminal>

            <Terminal title="ACHIEVEMENTS.LOG">
              <div className="space-y-4">
                {educationData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <div className="font-bold text-green-400">{achievement.title}</div>
                      <div className="text-sm text-green-300">{achievement.description}</div>
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
                    <tr className="border-b border-green-400">
                      <th className="text-left py-2 text-green-300">Semester</th>
                      <th className="text-right py-2 text-green-300">GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {educationData.semesterGPA.map((semester, index) => (
                      <tr key={index} className="border-b border-green-400">
                        <td className="py-2">{semester.semester}</td>
                        <td className="text-right py-2 font-bold text-green-400">
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
                  className="w-full px-4 py-2 border-2 border-green-400 bg-black text-green-400 hover:bg-green-400 hover:text-black transition-all duration-200 font-mono"
                >
                  📘 {showEnrollments ? 'Hide' : 'Show'} Enrollments
                </button>

                {showEnrollments && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h3 className="text-green-300 font-bold mb-2">Current Courses:</h3>
                      <ul className="space-y-1">
                        {educationData.currentCourses.map((course, index) => (
                          <li key={index} className="text-sm">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-green-300 font-bold mb-2">Past Courses:</h3>
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