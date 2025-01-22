import React from 'react';

const Badge = (text: string) => {
    return (
        <div>
            <span
                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10">{text}</span>

        </div>
    );
};

export default Badge;