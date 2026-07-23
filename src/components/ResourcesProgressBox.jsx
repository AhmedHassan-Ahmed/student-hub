function ProgressBox({ total, completed, percentage, topicStats }) {
    return (
        <div className="bg-slate-900 shadow-md rounded-xl p-5 border space-y-5 mt-3">

            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-white">
                    Learning Progress
                </h3>
                <span className="text-sm text-gray-400">
                    {completed} / {total}
                </span>
            </div>

            <div>
                <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div
                        className="bg-green-500 h-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>

                <p className="text-right text-sm text-gray-400 pt-3">
                    {percentage}% completed
                </p>
            </div>

            <div className="border-t pt-3 space-y-3">
                {Object.keys(topicStats).map((topic) => {
                    const t = topicStats[topic];
                    const percent = Math.round((t.done / t.total) * 100);

                    return (
                        <div key={topic}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium text-white">
                                    {topic}
                                </span>
                                <span className="text-gray-400">
                                    {t.done} / {t.total}
                                </span>
                            </div>

                            <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div
                                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${percent}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProgressBox;