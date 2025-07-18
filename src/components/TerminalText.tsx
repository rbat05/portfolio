import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
    text: string;
    className?: string;
    bulletList?: boolean;
    onDone?: () => void; // Callback when typing is done
}

const TerminalText: React.FC<TerminalTextProps> = ({ text, className, bulletList, onDone }) => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [done, setDone] = useState(false);

    useEffect(() => {
        setDone(false);
        const words = text.split(/(\s+)/); // Keep spaces as tokens
        let index = 0;
        let current = '';
        const interval = setInterval(() => {
            if (index < words.length) {
                current += words[index];
                setDisplayText(current);
                index++;
            } else {
                clearInterval(interval);
                setDone(true);
                if (onDone) onDone(); // Notify parent
            }
        }, 1); // Adjust speed as needed
        return () => clearInterval(interval);
    }, [text, onDone]);

    useEffect(() => {
        if (done) return; // Stop blinking when done
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, [done]);

    if (bulletList) {
        // Split sentences for bullet points
        const sentences = displayText.split(/(?<=\.)\s+/);
        return (
            <ul className={`list-[circle] pl-6 space-y-2 mb-6 ${className}`}>
                {sentences.map((sentence, idx) => (
                    <li key={idx}>
                        {sentence}
                        {idx === sentences.length - 1 && !done && (
                            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>█</span>
                        )}
                    </li>
                ))}
            </ul>
        );
    }

    // Default: line-by-line terminal effect
    return (
        <div className={className}>
            {(() => {
                const lines = displayText.split(/\n/g);
                return lines.map((line, idx) => (
                    <span key={idx}>
                        {line}
                        {idx === lines.length - 1 && !done && (
                            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>█</span>
                        )}
                        <br />
                    </span>
                ));
            })()}
        </div>
    );
};

export default TerminalText;