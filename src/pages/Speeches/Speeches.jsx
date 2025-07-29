import React from 'react'
import ComingSoon from '../../components/ComingSoon'

function Speeches() {
    return (
        <>
            <div className="w-full">
                <div className="m-auto w-full max-w-screen-2xl py-5 px-5">
                    <h1 className='text-center montserrat-bold p-5 border rounded-lg'>
                        Speeches
                    </h1>
                    <ComingSoon/>

                </div>
            </div>
        </>
    )
}

export default Speeches