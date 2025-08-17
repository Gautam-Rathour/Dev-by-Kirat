import { HiOutlineCalendar } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CenterSection() {
  const webinars = [
    { time: "11:30 AM", title: "UX Webinar", status: "Live", color: "red" },
    { time: "11:30 AM", title: "My first Webinar", status: "Upcoming", color: "blue" },
    { time: "11:30 AM", title: "Important Webinar", status: "Upcoming", color: "blue" },
    { time: "11:30 AM", title: "Webinar 1", status: "Upcoming", color: "blue" },
  ];

  return (
    <div className="  flex flex-col gap-6 px-4">
      <div>
        <p className="text-sm text-gray-500">Monday, 14 October</p>
        <h1 className="text-2xl font-bold text-[#172B4D]">
          Good morning, Prabhleen! <span className="text-yellow-500">👋</span>
        </h1>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-md">
        {/* Calendar Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <div className="flex items-center gap-2 text-sm text-[#172B4D] font-medium">
            <HiOutlineCalendar className="text-xl text-gray-600" />
            <span>Monday, 14 October 2024</span>
          </div>
          <div className="flex gap-3 text-gray-500">
            <FiChevronLeft />
            <FiChevronRight />
          </div>
        </div>

        {/* Webinar List */}
        <div className="space-y-3">
          {webinars.map((item, idx) => (
            <div key={idx} className="flex items-start justify-between text-sm border-b pb-3">
              {/* Time column */}
              <div className="text-[#172B4D] w-[80px]">
                <div className="font-medium">{item.time}</div>
                <div className="text-xs text-gray-400 mt-1">{item.time}</div>
              </div>

              {/* Vertical line */}
              <div className="border-l-2 border-[#00C7B7] h-full mx-3" />

              {/* Title & status */}
              <div className="flex flex-col gap-1">
                <span className="text-xs">
                  {item.status === "Live" ? (
                    <span className="text-red-500 font-medium">Live 🔴</span>
                  ) : (
                    <span className="text-blue-500 font-medium">Upcoming 🔸</span>
                  )}
                </span>
                <span className="font-medium text-[#172B4D]">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
