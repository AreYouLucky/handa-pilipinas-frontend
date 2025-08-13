import { useState, useEffect } from 'react'
import { data } from '../../Data/data'
import ReadBooksBtn from '../../../components/ReadBooksBtn';

function LearningMaterials() {
    const [learningMaterials, setLearningMaterials] = useState([]);

    useEffect(() => {
        filterLM()
    }, [])

    const filterLM = () => {
        const filtered = data.filter(item => item.file_type === 3);
        setLearningMaterials(filtered);
    };
    return (
        <div className='flex justify-center bg-white'>
            <div className="grid-cols-1 grid w-full max-w-screen-2xl gap-x-8 px-6 pt-4 md:grid-cols-4 md:gap-x-8 md:px-0">
                {
                    learningMaterials.map((item, i) => (
                        <div className='cursor-pointer relative' key={i}>
                            <a href={`/pdf/${item.filename}`} target="_blank" rel="noopener noreferrer">
                                <div  className='overflow-hidden rounded-lg shadow-md border border-gray-300 p-3 relative'>
                                    <div className='w-full rounded-lg overflow-hidden relative'>
                                        <img src={`/images/thumbnails/${item.thumbnail}`} className='w-full  hover:scale-105 rounded-lg duration-300 h-full' />
                                        <div className='absolute w-full bg-gray-800/80 z-50 py-5 bottom-0 px-3'>
                                            <ReadBooksBtn />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sm mt-4 px-2 montserrat-bold my-4 text-gray-700 text-center  hover:scale-105 duration-300'>
                                    {item.title}
                                </div>
                            </a>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default LearningMaterials