import DashboardLayout from "../../layouts/DashboardLayout";
import Framer from "../../components/Framer";
function About() {
    return (
        <DashboardLayout>
            <div className="mx-auto max-w-screen-2xl py-4 text-justify text-gray-700 md:py-12 px-6 md:px-0">
                <Framer animation="zoom-in">
                    <div className="mx-auto max-w-screen-lg md:py-5 py-2">
                        <video width="100%" height="100%" controls autoPlay>
                            <source src="/videos/teaser.mp4" type="video/mp4" />
                        </video>
                    </div>
                </Framer>
                <Framer animation="fade-left">
                    <p className="montserrat-bold font-bold md:text-2xl text-2xl text-start my-4 ">Origin of Handa Pilipinas</p>
                    <p>
                        At the beginning of 2020, the Department of Science and Technology
                        (DOST) launched "20 in 2020," introducing 20 research and development
                        programs and initiatives that support the agency's thrust for the
                        year. Among them was "Handa Pilipinas," an advocacy program and
                        exposition showcasing various products, services, and studies
                        developed and supported by DOST agencies in Disaster Risk Reduction
                        and Management and Climate Change Adaptation.
                        <br /> <br />
                        The Handa Pilipinas Exposition was initially scheduled at the World
                        Trade Center in Pasay City from March 11-13, 2020. Unfortunately, due
                        to the spread of COVID-19 and the onset of restrictions in mobility,
                        including mass gatherings, it was postponed and eventually canceled.
                        <br /> <br />
                        After more than two years, with the easing up of health and safety
                        protocols, Handa Pilipinas was finally launched on November 09, 2022,
                        at the World Trade Center in Pasay City. Due to the pandemic, its
                        original scope was expanded, encompassing not only technologies
                        related to storms, earthquakes, and volcanic eruptions but also those
                        related to health and nutrition.
                        <br /> <br />
                        The overarching theme of Handa Pilipinas aimed to showcase the
                        significant contribution of various Science and Technology
                        interventions in the reduction, rehabilitation, and recovery aspects
                        of communities in the Philippines during natural disasters and health
                        emergencies. With the success of the initial event, it continued and
                        expanded to three locations across the country in 2023.
                        <br /> <br />
                        The Luzon leg took place at the World Trade Center in Pasay City from
                        July 27-29, 2023. In Mindanao leg, it was conducted in Cagayan de Oro
                        City from October 4-6, 2023. The Visayas leg happened in Tacloban City
                        from November 08-10, 2023, coinciding with the commemoration of
                        Typhoon Yolanda.
                        <br /> <br />
                        Each leg had its own theme and focus, showcasing technology exhibits,
                        forums, and seminars based on the natural hazards present in the area
                        and the calamity history of the respective region. This year saw
                        increased participation from local government units (LGUs) in
                        developing plans and policies that helped prepare communities for
                        impending natural disasters.
                        <br /> <br />
                        With the continued developmental initiatives of Handa Pilipinas, DOST
                        Secretary Renato U. Solidum Jr. consistently conveys the message that
                        the DOST, with its attached agencies and regional offices, is working
                        as One to fulfill the aspirations of every Filipino to become Victors
                        from Disasters rather than victims of calamities.
                    </p>
                </Framer>
            </div>
        </DashboardLayout>
    );
}

export default About;
