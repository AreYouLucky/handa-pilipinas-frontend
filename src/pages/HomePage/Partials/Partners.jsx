import { FaConnectdevelop } from "react-icons/fa";

function Partners() {
    const partners = [
        {
            title: 'Office of Civil Defense',
            description: 'The Office of Civil Defense is an organization within the Philippines Department of National Defense and serves as the implementing arm of the National Disaster Risk Reduction and Management Council.',
            img: '/images/logos/OCD.png',
            link: 'https://ocd.gov.ph/',
        },
        {
            title: 'Philippines Department of National Defense',
            description: 'The Department of National Defense is the executive department of the Philippine government responsible for guarding against external and internal threats to peace and security in the country.',
            img: '/images/logos/DND.png',
            link: 'https://www.dnd.gov.ph/',
        },
        {
            title: 'Department of the Interior and Local Government',
            description: 'The Department of the Interior and Local Government is the executive department of the Philippine government responsible for promoting peace and order, ensuring public safety and strengthening local government capability aimed towards the effective delivery of basic services to the citizenry.',
            img: '/images/logos/DILG.svg',
            link: 'https://www.dilg.gov.ph/',
        },
        {
            title: 'Philippine Institute of Volcanology and Seismology',
            description: 'The Philippine Institute of Volcanology and Seismology (PHIVOLCS) is a service institute of the Department of Science and Technology (DOST) that is principally mandated to mitigate disasters that may arise from volcanic eruptions, earthquakes, tsunami and other related geotectonic phenomena.',
            img: '/images/logos/PHIVOCS.png',
            link: 'https://www.phivolcs.dost.gov.ph/',
        },
        {
            title: 'Department of Social Welfare and Development',
            description: 'The Department of Social Welfare and Development is the executive department of the Philippine government responsible for the protection of the social welfare of rights of Filipinos and to promote social development.',
            img: '/images/logos/DSWD.png',
            link: 'https://www.dswd.gov.ph/',
        },
        {
            title: 'Department of Science and Technology',
            description: 'The Department of Science and Technology is the executive department of the Philippine government responsible for coordinating science and technology-related projects and for formulating policies and programs in these fields to support national development.',
            img: '/images/logos/DOST_lhg.png',
            link: 'https://www.dost.gov.ph/',
        },
        {
            title: 'Department of Environment and Natural Resources',
            description: "The Department of Environment and Natural Resources (DENR) is responsible for the conservation, management, and development of the country's environment and natural resources. It shall ensure the proper use of these resources and the protection of the environment within the framework of sustainable development.",
            img: '/images/logos/DENR.png',
            link: 'https://denr.gov.ph/',
        },
        {
            title: 'Office of the Vice President of the Philippines',
            description: 'The Office of the Vice President is an administrative, advisory, consultative government agency which aids the vice president of the Philippines in performing their duty as the second-highest executive official of the government of the Philippines.',
            img: '/images/logos/OVP.png',
            link: 'https://www.ovp.gov.ph/',
        },
        {
            title: 'Philippine Atmospheric, Geophysical and Astronomical Services Administration',
            description: 'PAGASA, the Philippine Atmospheric, Geophysical and Astronomical Services Administration, is responsible for providing weather forecasts, warnings, and other related information to protect life and property, and support economic development.',
            img: '/images/logos/PAGASA.png',
            link: 'https://www.pagasa.dost.gov.ph/',
        },

    ]
    return (
        <>
            <section className="space-y-1 px-8 md:py-4 py-0 text-gray-800 md:px-2 md:pb-5 flex justify-center">
                <div className=" w-full max-w-screen-2xl gap-x-8  py-4 md:px-0 md:py-10">
                    <h2 className="text-lg montserrat-bold mb-4 flex rounded-full py-1 font-bold text-gray-700 md:text-2xl justify-center">
                        <FaConnectdevelop className="text-2xl md:text-3xl mr-3" />
                        PARTNERS
                    </h2>
                    <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            partners.map((item, idx) => (
                                <li key={idx} className="w-full flex items-center rounded-lg border border-gray-200 p-5 hover:scale-105 shadow-md duration-200">
                                    <a href={item.link} target='_Blank'>
                                        <div className="flex gap-4 items-center flex-col">
                                            <div className="flex-none w-24 h-24">
                                                <img
                                                    src={item.img}
                                                    className="w-full h-full "
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-gray-700 font-semibold sm:text-lg text-center">{item.title}</h4>
                                                <p className="text-gray-500 text-justify">{item.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }

                    </ul>

                </div>
            </section>
        </>
    )
}

export default Partners