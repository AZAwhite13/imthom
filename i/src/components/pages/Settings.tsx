import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Sozlamalar</h2>
        <p className="text-gray-600">Tizim sozlamalari</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Umumiy sozlamalar</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Til</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2">
              <option>O'zbekcha</option>
              <option>English</option>
              <option>Русский</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Vaqt zonasi</label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Toshkent (UTC+5)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;