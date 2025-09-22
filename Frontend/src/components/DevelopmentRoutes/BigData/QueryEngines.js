import { useState } from "react";

export default function QueryEnginesPage({ closeQueryEngines, Done }) {
  const Nexthandler = () => {
    Done();
    closeQueryEngines();
  };

  const [isFullScreen, setFullScreen] = useState("left-[60%]");
  const fullscrenHandler = () => {
    setFullScreen(isFullScreen === "left-[60%]" ? "left-[20%]" : "left-[60%]");
  };

  return (
    <section
      className={`transition-transform duration-300 ease-in-out fixed right-0 ${isFullScreen} top-0 bottom-0 overflow-y-scroll scrollbar scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack scrollbar-bg-scrollbarBg inset-0 bg-[#0e1542] flex justify-center items-center z-50 m-0 h-[100%] pt-6`}
      style={{ boxShadow: "0 0 10px 0px #000000" }}
    >
      <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
        {/* Header controls */}
        <div className="flex pb-4 justify-between items-center w-[100%]">
          {isFullScreen === "left-[60%]" ? (
            <span
              className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
              onClick={fullscrenHandler}
            >
              open_in_full
            </span>
          ) : (
            <span
              className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
              onClick={fullscrenHandler}
            >
              close_fullscreen
            </span>
          )}
          <span
            onClick={closeQueryEngines}
            className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
          >
            close
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
          Step 7: Query Engines & Warehouses 🔍
        </h2>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <p>
            Once you have data stored in a data lake, you need tools to query it efficiently for
            analytics. <span className="text-[#23daff] font-bold">Query engines</span> bridge the gap between
            raw data files and the familiar SQL language.
          </p>

          <div className="flex flex-col my-5 gap-4">
            <p className="font-bold text-lg text-[#28ffd4]">What to Learn:</p>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Apache Hive:</span> Learn how Hive allows you to query data
                in Hadoop using SQL-like syntax (HiveQL). It's a key part of the Hadoop ecosystem.
              </li>
              <li>
                <span className="font-bold">Presto/Trino:</span> Understand these modern, fast query engines that
                can run SQL queries across various data sources, including data lakes.
              </li>
              <li>
                <span className="font-bold">Cloud Data Warehouses:</span> Get familiar with cloud-native
                data warehouses like <span className="font-bold">Google BigQuery</span>, <span className="font-bold">Amazon Redshift</span>, and <span className="font-bold">Snowflake</span>,
                which are optimized for analytical workloads.
              </li>
              <li>
                <span className="font-bold">Schema Design:</span> Practice designing schemas for analytics and
                understand strategies like partitioning to optimize query performance.
              </li>
            </ul>

            <p className="font-bold text-lg text-[#28ffd4] mt-4">Free Resources:</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://data-flair.training/blogs/apache-hive-tutorial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Apache Hive Tutorial - DataFlair
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://trino.io/docs/current/quickstart.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Trino (PrestoSQL) Quickstart
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                <a
                  href="https://cloud.google.com/bigquery/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#28ffd4] underline">
                    Google BigQuery Documentation
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-auto py-4">
          <button
            onClick={closeQueryEngines}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Close
          </button>
          <button
            onClick={Nexthandler}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Done
          </button>
        </div>
      </div>
    </section>
  );
}