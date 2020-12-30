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

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] | order(date desc) {
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    Projects
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    
                </h2>
                <section className="grid lg:grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                                <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">
                                        Date
                                    </strong>:{" "}
                                    {sanityDateToString(project.date)}
                                </span>
                                <span>
                                    <strong className="font-bold">
                                        Organization
                                    </strong>:{" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className="font-bold">
                                        Type
                                    </strong>:{" "}
                                    {project.projectType}
                                </span>
                                <div className="my-6 text-lg text-gray-700 leading-relaxed">
                                    <BlockContent
                                            blocks={project.description}
                                            projectId="5zei2dq1"
                                            dataset="production"/>
                                </div>
                                <a
                                    href={project.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="text-blue-500 text-xl font-bold hover:underline hover:text-blue-400">
                                        Click to view. 
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    );
}
