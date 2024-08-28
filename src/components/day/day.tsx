import { useState } from "react";
import Heading from "../heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineData = {
  day1: [
    {
      date: "30/08/2024 (Friday)",
      time: "09:30 AM",
      title: "Project Expo Registration",
    },
    {
      date: "30/08/2024 (Friday)",
      time: "11:00 AM",
      title: "Project Expo Begins",
    },
    {
      date: "30/08/2024 (Friday)",
      time: "01:00 PM",
      title: "Project Expo Judgement",
    },
    {
      date: "30/08/2024 (Friday)",
      time: "02:00 PM",
      title: "Inaugural Ceremony",
    },
    { date: "30/08/2024 (Friday)", time: "04:00 PM", title: ".hack Begins" },
    { date: "30/08/2024 (Friday)", time: "05:00 PM", title: "Tea Break" },
    {
      date: "30/08/2024 (Friday)",
      time: "07:30 PM",
      title: "Talk: Startup and Entrepreneurship",
    },
    { date: "30/08/2024 (Friday)", time: "08:30 PM", title: "Dinner" },
    { date: "30/08/2024 (Friday)", time: "10:00 PM", title: "Status Check 1" },
  ],
  day2: [
    { date: "31/08/2024 (Saturday)", time: "08:00 AM", title: "Breakfast" },
    {
      date: "31/08/2024 (Saturday)",
      time: "10:00 AM",
      title: "Status Check 2",
    },
    { date: "31/08/2024 (Saturday)", time: "01:00 PM", title: "Lunch" },
    {
      date: "31/08/2024 (Saturday)",
      time: "04:30 PM",
      title: "Status Check 3",
    },
    { date: "31/08/2024 (Saturday)", time: "05:00 PM", title: "Tea/snacks" },
    {
      date: "31/08/2024 (Saturday)",
      time: "05:30 PM",
      title: "Smart Talks: Smart Grids & Digitalization in Energy Sector",
    },
    { date: "31/08/2024 (Saturday)", time: "08:30 PM", title: "Dinner" },
    {
      date: "31/08/2024 (Saturday)",
      time: "10:00 PM",
      title: "Status Check 4",
    },
  ],
  day3: [
    { date: "01/09/2024 (Sunday)", time: "06:00 AM", title: ".hack(); ends" },
    { date: "01/09/2024 (Sunday)", time: "08:00 AM", title: "Breakfast" },
    {
      date: "01/09/2024 (Sunday)",
      time: "08:30 AM",
      title: "Judgement begins",
    },
    { date: "01/09/2024 (Sunday)", time: "12:00 PM", title: "Lunch" },
    {
      date: "01/09/2024 (Sunday)",
      time: "03:00 PM",
      title: "Closing Ceremony and Prize Distribution",
    },
  ],
};

export default function Day() {
  const [activeTab, setActiveTab] = useState("day1");

  const renderTimeline = () => {
    return (
      <VerticalTimeline className="text-white text-base" lineColor="#F56E0F">
        {
          //@ts-ignore
          timelineData[activeTab].map((event, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--event"
              contentStyle={{
                background: "#f2f2f200",
                border: "2px solid white",
                borderRadius: "20px",
              }}
              contentArrowStyle={{ borderRight: "10px solid white" }}
              iconStyle={{ background: "#F56E0F" }}
              icon={
                <img
                  src="/images/Future.png"
                  alt="Icon"
                  style={{ width: "100%" }}
                />
              }
              date={`${event.time}`}
            >
              <h3 className="timeline-heading">{event.title}</h3>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    );
  };

  return (
    <div className="Timeline flex flex-col items-center">
      <Heading
        heading="Schedule"
        subheading="Take a peek at how the day goes"
      />
      <div className="tabs flex gap-4 my-8 text-white text-base font-bold border-b-4 border-[#F56E0F]">
        <button
          className={
            activeTab === "day1"
              ? "active-tab bg-[#F56E0F] rounded-t sm:p-4"
              : ""
          }
          onClick={() => setActiveTab("day1")}
        >
          Day 1 (30/08/2024)
        </button>
        <button
          className={
            activeTab === "day2"
              ? "active-tab bg-[#F56E0F] rounded-t sm:p-4"
              : ""
          }
          onClick={() => setActiveTab("day2")}
        >
          Day 2 (31/08/2024)
        </button>
        <button
          className={
            activeTab === "day3"
              ? "active-tab bg-[#F56E0F] rounded-t sm:p-4"
              : ""
          }
          onClick={() => setActiveTab("day3")}
        >
          Day 3 (01/09/2024)
        </button>
      </div>
      <div className="w-full">{renderTimeline()}</div>
    </div>
  );
}
