import { useState } from "react";

export default function RealTimePage({ closeRealTime, Done }) {
    const Nexthandler = () => {
        Done();
        closeRealTime();
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
                        onClick={closeRealTime}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    Real-Time Communication in Backend Development
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">Real-Time Communication (RTC)</span> 
                        enables continuous data exchange between clients and servers without page reloads. 
                        This is essential for chat apps, live notifications, gaming, stock price updates, and IoT systems.
                    </p>

                    <p>
                        Understanding RTC helps you build fast, interactive, and scalable backend applications.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>WebSockets (full-duplex communication)</li>
                            <li>Socket.IO (rooms, namespaces, broadcasting)</li>
                            <li>Server-Sent Events (SSE)</li>
                            <li>Message Brokers (Redis, RabbitMQ, Kafka)</li>
                            <li>Real-time databases (Firebase, MongoDB Change Streams, Supabase)</li>
                            <li>GraphQL Subscriptions</li>
                            <li>gRPC streaming for microservices</li>
                            <li>Scaling with load balancers & Redis pub/sub</li>
                            <li>Security: JWT auth, rate limiting, DoS prevention</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Frameworks:</p>
                        <ul className="list-disc list-inside">
                            <li>WebSockets (native, ws library)</li>
                            <li>Socket.IO</li>
                            <li>Redis Pub/Sub</li>
                            <li>RabbitMQ, Kafka (event-driven systems)</li>
                            <li>Firebase Realtime DB / Firestore</li>
                            <li>Supabase Realtime</li>
                            <li>Apollo Server (GraphQL Subscriptions)</li>
                            <li>gRPC</li>
                        </ul>

                        <p className="font-bold">Resources to Learn RTC:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://socket.io/docs/v4/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Socket.IO Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        MDN – WebSockets API
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/1BfCnjr_Vjg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        WebSockets Crash Course – Fireship
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/ZKEqqIO7n-k"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Socket.IO Tutorial – Traversy Media
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeRealTime}
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