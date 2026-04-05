import ExperienceCard from '../components/ExperienceCard.tsx';
import experienceData from '../data/experience.json';

const Experience = () => {
    return (
        <div className="min-h-screen pt-20 text-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-mono font-bold mb-4 text-black">
                        EXPERIENCE
                    </h1>
                    <div className="font-mono text-black">
                        Explore my work experience, responsibilities, and impact across roles.
                    </div>
                </div>

                <div className="mb-8">
                    <div className="inline-block border-2 border-black text-black px-4 py-2">
                        <span className="font-mono text-sm">
                            💼 Found {experienceData.experiences.length} roles |
                            {experienceData.experiences.filter((e) => e.status === 'Completed').length} completed |
                            {experienceData.experiences.filter((e) => e.status === 'Current').length} current
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experienceData.experiences.map((experience) => (
                        <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
