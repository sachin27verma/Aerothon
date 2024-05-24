'use client'
import React from "react";
import { ResponsiveLine } from "@nivo/line"

export default function Herosection() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 text-white">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <img
            alt="Plane"
            className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="560"
            src="https://images.unsplash.com/photo-1583202075376-837d5ff1bf0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="600"
          />
          <div className="flex flex-col justify-center space-y-4">
            <blockquote className="space-y-2">
              <p className="text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl/none">
                "Effortless flight planning with our advanced navigation tools."
              </p>
              <cite className="text-lg pt-3 font-medium text-gray-500 dark:text-gray-400">- John Doe, Frequent Flyer</cite>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="   py-10 w-5/6 mx-auto bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-7  tracking-wider sm:text-4xl md:text-5xl">
                Route Planning
                </h2>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="space-y-4">
              <div className="space-y-2">
               
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  Our advanced route planning algorithm takes the hassle out of booking your next trip. Simply enter
                  your departure and destination, and we'll provide the optimal flight plan.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                  <PlaneIcon className="h-6 w-6 text-#00df9a" />
                  <div className=" flex items-center gap-3">
                    <label className="text-sm font-medium" htmlFor="departure">
                      Departure
                    </label>
                    <input
                      className="pl-2 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] bg-gray-800  h-12 text-white rounded-lg"
                      id="departure"
                      placeholder="Enter departure city"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                  <PlaneIcon className="h-6 w-6 text-#00df9a" />
                  <div className=" flex items-center gap-3">
                    <label className="text-sm font-medium" htmlFor="destination">
                      Destination
                    </label>
                    <input
                      className="pl-2 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] bg-gray-800  h-12 text-white rounded-lg"
                      id="destination"
                      placeholder="Enter destination city"
                    />
                  </div>
                </div>
                <button className="w-full bg-[#00df9a] font-bold text-medium p-3 rounded-md tracking-wide uppercase">
                  Find Flights
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="w-full bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex flex-row items-center justify-between pb-2">
                  <div className="text-sm font-medium">Flight Statistics</div>
                </div>
                <div className="w-full aspect-video">
                  <LineChart />
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our advanced algorithm analyzes thousands of flight options to provide the optimal route for your travel
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LineChart(props) {
    return (
      <div {...props}>
        <ResponsiveLine
          data={[
            {
              id: "Desktop",
              data: [
                { x: "Jan", y: 43 },
                { x: "Feb", y: 137 },
                { x: "Mar", y: 61 },
                { x: "Apr", y: 145 },
                { x: "May", y: 26 },
                { x: "Jun", y: 154 },
              ],
            },
            {
              id: "Mobile",
              data: [
                { x: "Jan", y: 60 },
                { x: "Feb", y: 48 },
                { x: "Mar", y: 177 },
                { x: "Apr", y: 78 },
                { x: "May", y: 96 },
                { x: "Jun", y: 204 },
              ],
            },
          ]}
          margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
          xScale={{
            type: "point",
          }}
          yScale={{
            type: "linear",
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 16,
          }}
          axisLeft={{
            tickSize: 0,
            tickValues: 5,
            tickPadding: 16,
          }}
          colors={["#2563eb", "#e11d48"]}
          pointSize={6}
          useMesh={true}
          gridYValues={6}
          theme={{
            tooltip: {
              chip: {
                borderRadius: "9999px",
              },
              container: {
                fontSize: "12px",
                textTransform: "capitalize",
                borderRadius: "6px",
              },
            },
            grid: {
              line: {
                stroke: "#f3f4f6",
              },
            },
          }}
          role="application"
        />
      </div>
    )
  }
  
  

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
