import { useState } from "react";

export default function ScalabilityPage({ closeScale, Done }) {
    const Nexthandler = () => {
        Done();
        closeScale();
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
                        onClick={closeScale}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Scalability & Performance in Backend Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Scalability & Performance</span> 
                        ensure your backend applications can handle **growing traffic, users, and data** 
                        without breaking or slowing down.  
                        This involves efficient coding, caching, database optimization, and infrastructure design.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Horizontal vs Vertical Scaling</li>
                            <li>Load Balancing techniques</li>
                            <li>Caching strategies (Redis, Memcached, CDN)</li>
                            <li>Database optimization (indexes, sharding, replication)</li>
                            <li>Asynchronous processing (message queues, workers)</li>
                            <li>API response optimization (pagination, compression, batching)</li>
                            <li>Monitoring performance (APM tools, logging)</li>
                            <li>Profiling & bottleneck detection</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Technologies:</p>
                        <ul className="list-disc list-inside">
                            <li>Redis, Memcached (in-memory caching)</li>
                            <li>NGINX, HAProxy (load balancing)</li>
                            <li>RabbitMQ, Kafka, BullMQ (queues & async jobs)</li>
                            <li>ElasticSearch (fast searching & indexing)</li>
                            <li>CDNs (Cloudflare, Akamai, AWS CloudFront)</li>
                            <li>New Relic, Datadog, Prometheus (monitoring)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn Scalability & Performance:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://redis.io/docs/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Redis Official Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://kafka.apache.org/documentation/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Apache Kafka Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/xpDnVSmNFX0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        System Design Basics – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/bUHFg8CZFws"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Scaling Web Apps – TechWorld with Nana
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeScale}
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