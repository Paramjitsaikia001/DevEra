import { useState } from "react";

export default function ComputerVisionPage({ closeComputerVision, Done }) {
    const Nexthandler = () => {
        Done();
        closeComputerVision();
    };
    const [isFullScreen, setFullScreen] = useState("left-[60%]");
    const fullscrenHandler = () => {
        if (isFullScreen === "left-[60%]") {
            setFullScreen("left-[20%]");
        } else {
            setFullScreen("left-[60%]");
        }
    };

    return (
        <section
            className={`transition-transform duration-300 ease-in-out fixed right-0 ${isFullScreen} top-0 bottom-0 overflow-y-scroll scrollbar scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack scrollbar-bg-scrollbarBg inset-0 bg-[#0e1542] flex justify-center items-center z-50 m-0 h-[100%] pt-6`}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                <div className='flex pb-4 justify-between items-center w-[100%]'>
                    {isFullScreen === "left-[60%]" ? (
                        <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer" onClick={fullscrenHandler}>
                            open_in_full
                        </span>
                    ) : (
                        <span className="material-symbols-outlined text-[#8f8f8f] cursor-pointer" onClick={fullscrenHandler}>
                            close_fullscreen
                        </span>
                    )}
                    <span onClick={closeComputerVision} className="material-symbols-outlined text-[#8f8f8f] cursor-pointer">
                        close
                    </span>
                </div>

                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">Computer Vision</h2>

                <div className="flex flex-col gap-1">
                    <p><span className="text-[#23daff] font-bold">Computer Vision</span> is a field of AI that enables machines to interpret and make decisions based on visual data like images and videos.</p>

                    <p>It plays a crucial role in applications such as facial recognition, object detection, medical imaging, self-driving cars, and more.</p>

                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>Image Basics: Pixels, channels, histograms</li>
                            <li>Image Processing: Filters, edge detection, color space conversions</li>
                            <li>Deep Learning for CV: CNNs, ResNet, YOLO, SSD</li>
                            <li>Object Detection, Image Segmentation</li>
                        </ul>

                        <p className="font-bold">Tools:</p>
                        <ul className="list-disc list-inside">
                            <li>OpenCV, PIL, scikit-image</li>
                            <li>TensorFlow, PyTorch, Keras</li>
                            <li>LabelImg for annotation</li>
                        </ul>

                        <p className="font-bold">Resources to become an expert in Computer Vision:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://www.coursera.org/learn/computervision-basics" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Computer Vision Basics – Coursera</span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">OpenCV Official Documentation</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.youtube.com/watch?v=oXlwWbU8l2o" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">FreeCodeCamp Computer Vision Course</span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a href="https://www.udacity.com/course/introduction-to-computer-vision--ud810" target="_blank" rel="noopener noreferrer">
                                    <span className="text-[#28ffd4] underline">Intro to Computer Vision – Udacity</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button onClick={closeComputerVision} className="px-4 py-2 bg-blue-600 text-white rounded">Close</button>
                    <button onClick={Nexthandler} className="px-4 py-2 bg-blue-600 text-white rounded">Done</button>
                </div>
            </div>
        </section>
    );
}
