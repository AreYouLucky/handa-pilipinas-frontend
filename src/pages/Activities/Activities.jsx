import React from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import ComingSoon from '../../components/ComingSoon'
function Activities() {
    return (
        <DashboardLayout>
            <div className="w-full">
                <div className="m-auto w-full max-w-screen-2xl py-5 px-5">
                    <h1 className='text-center montserrat-bold p-5 border rounded-lg'>
                        General Program of Activities
                    </h1>
                    <ComingSoon/>

                </div>
            </div></DashboardLayout>
    )
}

export default Activities