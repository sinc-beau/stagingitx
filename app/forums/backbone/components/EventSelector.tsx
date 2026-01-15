import React from 'react';

interface EventSelectorProps {
  selectedEvent: string;
  setSelectedEvent: (event: string) => void;
}

export default function EventSelector({ selectedEvent, setSelectedEvent }: EventSelectorProps) {
  const events = [
    { id: 'current', label: '2025 Current Program' },
    { id: 'archive', label: 'Archive Sessions' },
    { id: 'upcoming', label: 'Upcoming Events' }
  ];

  return (
    <section className="py-8 bg-gray-900/50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-xl font-bold text-white mr-6">Select Program:</h2>
          <div className="flex flex-wrap gap-3">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event.id)}
                className={`px-6 py-2 rounded font-medium transition-all duration-200 ${
                  selectedEvent === event.id
                    ? 'bg-[#4B0BE8] text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {event.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}