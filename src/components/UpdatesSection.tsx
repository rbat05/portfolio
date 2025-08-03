import React, { useState } from 'react';
import TerminalText from './TerminalText';

interface UpdatesSectionProps {
    updates: string;
    lastUpdated: string;
}

const UpdatesSection: React.FC<UpdatesSectionProps> = ({ updates, lastUpdated }) => {
    const [showUpdates, setShowUpdates] = useState(false);

    // Split updates into sentences for bullet points
    const sentences = updates.split(/(?<=\.)\s+/);

    return (
        <div className="mb-8 text-center">
            <button
                onClick={() => setShowUpdates(!showUpdates)}
                className={`px-4 py-2 font-mono text-sm border-1 transition-all duration-200 wireframe-button flashing-hover ${showUpdates
                    ? 'bg-white text-black border-white'
                    : 'text-white border-white hover:bg-white hover:text-black'
                    }`}
            >
                {showUpdates ? 'Hide Updates ▲' : 'Show Updates ▼'}
            </button>
            {showUpdates && (
                <div className="mt-4 border-t border-white pt-4 text-left">
                    <h3 className="font-bold text-white mb-2 text-center">🔄 Updates: {lastUpdated}</h3>
                    <ul className="list-[circle] pl-6 space-y-2 text-sm text-white text-left">
                        {sentences.map((sentence, idx) => (
                            <li key={idx}>
                                <TerminalText
                                    text={sentence.trim()}
                                    className="text-sm text-white"
                                    bulletList={false}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UpdatesSection;