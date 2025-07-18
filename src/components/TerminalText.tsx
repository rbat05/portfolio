import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
    text: string;
    className?: string;
    bulletList?: boolean;
}

const TerminalText: React.FC<TerminalTextProps> = ({ text, className, bulletList }) => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let index = 0;
        setDone(false); // Reset done when text changes
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
                setDone(true); // <-- Add this line
            }
        }, 5);
        return () => clearInterval(interval);
    }, [text]);

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