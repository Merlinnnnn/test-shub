import { Clock, X } from "lucide-react";
import React, { useEffect } from "react";

interface Props {
    startTime: string;
    endTime: string;
    setStartTime: (val: string) => void;
    setEndTime: (val: string) => void;
    onCalculate: () => void;
    onDeleteFile: () => void;
}

export const TimeRangeSelector: React.FC<Props> = ({
    startTime,
    endTime,
    setStartTime,
    setEndTime,
    onCalculate,
    onDeleteFile,
}) => {
    useEffect
    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md relative">
            <button
                onClick={onDeleteFile}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-red-100"
            >
                <X className="w-5 h-5 text-red-600" />
            </button>
            <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Select time range</h3>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start time:
                    </label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="text-sm block font-medium text-gray-700 mb-2">Giờ kết thúc:</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <button
                onClick={onCalculate}
                //disabled={}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-blue-500 focus:ring-offset-2 transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Calculate Total
            </button>
        </div>
    );
};
