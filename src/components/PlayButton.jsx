import React from 'react'

function PlayButton() {
    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/70 hover:bg-white text-gray-800 mt-[-100px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                >
                    <path d="M8 5v14l11-7z" />
                </svg>
            </button>
        </div>
    )
}

export default PlayButton