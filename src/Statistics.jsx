import React from 'react';

const Statistics = () => {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-md bg-white px-4 py-6 text-center shadow-lg lg:px-10 lg:text-left">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="border-custom-gray-500/30 border-b p-4 lg:border-r lg:border-b-0">
          <p className="font-700 mb-2 text-xl/6 tracking-tight lg:text-3xl/6">
            $89,914
          </p>
          <span className="font-500 text-custom-gray-500 text-sm/6">
            of $100,000 backed
          </span>
        </div>
        <div className="border-custom-gray-500/30 border-b px-10 py-4 lg:border-r lg:border-b-0">
          <p className="font-700 mb-2 text-xl/6 tracking-tight lg:text-3xl/6">
            5,007
          </p>
          <span className="font-500 text-custom-gray-500 text-sm/6">
            total backers
          </span>
        </div>
        <div className="px-10 py-4">
          <p className="font-700 mb-2 text-xl/6 tracking-tight lg:text-3xl/6">
            56
          </p>
          <span className="font-500 text-custom-gray-500 text-sm/6">
            days left
          </span>
        </div>
      </div>
      <div className="mt-10 flex h-2 w-full rounded-full bg-gray-200">
        <div className="bg-custom-green-400 basis-3/4 rounded-full"></div>
      </div>
    </div>
  );
}

export default Statistics;
