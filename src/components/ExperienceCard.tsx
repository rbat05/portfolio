import React from 'react';

type Experience = {
    id: string;
    company: string;
    role: string;
    location: string;
    period: string;
    status: 'Current' | 'Completed' | string;
    type: string;
    summary: string;
    highlights: string[];
    skills: string[];
};

type ExperienceCardProps = {
    experience: Experience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    const statusColor = experience.status === 'Current' ? 'text-yellow-400' : 'text-green-400';
    const statusIcon = experience.status === 'Current' ? '🟡' : '✅';

    return (
        <div className="border-2 border-black bg-white text-black transition-all duration-300 wireframe-card hover:bg-black hover:text-white group">
            <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-mono wireframe-text text-black group-hover:text-white">
                            {experience.role}
                        </h3>
                        <p className="font-mono text-sm text-black group-hover:text-white">
                            {experience.company}
                        </p>
                    </div>
                    <div className={`font-mono text-sm ${statusColor}`}>
                        {statusIcon} {experience.status}
                    </div>
                </div>

                <p className="text-sm mb-2 text-black group-hover:text-white">
                    📍 {experience.location}
                </p>
                <p className="text-sm mb-2 text-black group-hover:text-white">
                    📅 {experience.period}
                </p>
                <p className="text-sm mb-4 text-black group-hover:text-white">
                    💼 {experience.type}
                </p>

                <p className="text-sm mb-4 text-black group-hover:text-white">
                    {experience.summary}
                </p>

                <ul className="text-sm mb-4 space-y-1 list-disc pl-5 text-black group-hover:text-white">
                    {experience.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 border border-black text-black text-xs font-mono group-hover:border-white group-hover:text-white"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
