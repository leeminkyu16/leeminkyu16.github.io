import React, {useEffect, useState} from "react"
import sanityClient from "../client.js"
import BlockContent from "@sanity/block-content-to-react";

const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function sanityDateToString(sanityDate) {
    if (sanityDate == null) {
        return "N/A";
    }
    const dateVar = new Date(sanityDate);
    return (months[dateVar.getMonth()] + " " + dateVar.getFullYear());
}

export default function WorkExperience() {
    const [workExperienceData, setWorkExperienceData] = useState(null);
    const [volunteerExperienceData, setVolunteerExperienceData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "workExperience"] | order(endDate desc) {
            title,
            organization,
            startDate,
            endDate,
            description
        }`)
        .then((data) => setWorkExperienceData(data))
        .catch(console.log);

        sanityClient.fetch(`*[_type == "volunteerExperience"] | order(endDate desc) {
            title,
            organization,
            startDate,
            endDate,
            description
        }`)
        .then((data) => setVolunteerExperienceData(data))
        .catch(console.log);
    }, []);

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <div className="divide-y-4 divide-black divide-opacity-25">
                    <div>
                        <h1 className="cursive text-5xl flex justify-center">
                            Work Experience
                        </h1>
                        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    
                        </h2>
                        <section className="grid grid-cols-1 gap-8">
                            {workExperienceData && workExperienceData.map((workExperience, index) => (
                                <article className="relative rounded-lg shadow-xl bg-white p-16">
                                    <h3 className="text-gray-800 text-3xl font-bold mb-2">
                                        {workExperience.title}
                                    </h3>
                                    <h4 className="text-gray-700 text-2xl mb-2">
                                        {workExperience.organization}
                                    </h4>
                                    <div className="text-gray-600 text-lg space-x-4">
                                        <span>
                                            <strong className="font-bold">
                                                Start Date
                                            </strong>:{" "}
                                            {sanityDateToString(workExperience.startDate)}
                                        </span>
                                        <span>
                                            <strong className="font-bold">
                                                End Date
                                            </strong>:{" "}
                                            {sanityDateToString(workExperience.endDate)}
                                        </span>
                                        <div className="my-6 text-lg text-gray-800 leading-relaxed">
                                            <BlockContent
                                                blocks={workExperience.description}
                                                projectId="5zei2dq1"
                                                dataset="production"/>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </section>
                    </div>
                    <div className="my-8">
                        <h1 className="cursive text-5xl flex justify-center pt-8">
                            Volunteer Experience
                        </h1>
                        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    
                        </h2>
                        <section className="grid grid-cols-1 gap-8">
                            {volunteerExperienceData && volunteerExperienceData.map((volunteerExperience, index) => (
                                <article className="relative rounded-lg shadow-xl bg-white p-16">
                                    <h3 className="text-gray-800 text-3xl font-bold mb-2">
                                        {volunteerExperience.title}
                                    </h3>
                                    <h4 className="text-gray-700 text-2xl mb-2">
                                        {volunteerExperience.organization}
                                    </h4>
                                    <div className="text-gray-600 text-lg space-x-4">
                                        <span>
                                            <strong className="font-bold">
                                                Start Date
                                            </strong>:{" "}
                                            {sanityDateToString(volunteerExperience.startDate)}
                                        </span>
                                        <span>
                                            <strong className="font-bold">
                                                End Date
                                            </strong>:{" "}
                                            {sanityDateToString(volunteerExperience.endDate)}
                                        </span>
                                        <div className="my-6 text-lg text-gray-800 leading-relaxed">
                                            <BlockContent
                                                blocks={volunteerExperience.description}
                                                projectId="5zei2dq1"
                                                dataset="production"/>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </section>
                    </div>
                </div>
                
            </section>
        </main>
    );
}
