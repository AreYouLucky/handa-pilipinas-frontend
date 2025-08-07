
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { FaBookOpen } from "react-icons/fa6";
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import Framer from '../../components/Framer';
function Technologies() {
    const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;
    return (
        <>
            <div className="w-full">
                <div className="m-auto w-full max-w-screen-2xl py-5 px-5">
                    <h1 className='text-center montserrat-bold p-5 border rounded-lg'>
                        FEATURED TECHNOLOGIES
                    </h1>
                    <Framer animation="fade-up">
                        <div className="m-auto w-full max-w-screen-2xl flex justify-between bg-gray-50 items-center rounded-lg mb-5 px-4">
                            <div className="hidden md:block">
                            </div>
                            <div className="flex justify-end gap-2 p-2  ">
                                <ZoomOutButton />
                                <ZoomInButton />
                            </div>
                        </div>
                        <a href="/pdf/HandaPilipinasFeaturedTechnologies.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="m-auto w-full max-w-screen-2xl max-h-[90vh] overflow-y-scroll  px-8 py-0 text-gray-800 md:px-2 mt-5 mb-10">
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                                    <Viewer fileUrl="/pdf/HandaPilipinasFeaturedTechnologies.pdf"
                                        plugins={[zoomPluginInstance]}
                                         />
                                </Worker>
                            </div>
                        </a>
                    </Framer>

                </div>
            </div></>
    )
}

export default Technologies