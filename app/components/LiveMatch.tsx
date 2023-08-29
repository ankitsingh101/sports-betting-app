import React from 'react';

import { useDispatch } from 'react-redux';
import { selectMatch } from '../store/selectedMatchSlice';

interface Match {
    id: string;
    title: string;
    description: string;
    currentBid: number;
}

interface LiveMatchProps {
    match: Match;
}


const LiveMatch: React.FC<LiveMatchProps> = ({ match }) => {
    const dispatch = useDispatch();
    const handleSelectMatch = (e: any) => {
        e.preventDefault();
        dispatch(selectMatch(match.id));

    };

    return (
        <div className="border p-4 flex justify-between">
            <h2>{match.title}</h2>
            <p>{match.description}</p>
            <p>Current Bid: {match.currentBid}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={(e) => handleSelectMatch(e)}
            >
                Select Match
            </button>
        </div>
    );
};

export default LiveMatch;
