import React, {useEffect, useState} from "react"
import sanityClient from "../client.js"
import BlockContent from "@sanity/block-content-to-react";
import Project from "./Project.js";

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

export default function Award() {
    const [awardData, setAwardData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "award"] | order(date desc){
            name,
            date,
            organization,
            description
        }`)
        .then((data) => setAwardData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    Awards
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    
                </h2>
                <section className="grid lg:grid-cols-2 gap-8">
                    {awardData && awardData.map((award, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                                {award.name}
                            </h3>
                            <div className="text-gray-500 text-s space-x-4">
                                <span>
                                    <strong className="font-bold">
                                        Received on
                                    </strong>:{" "}
                                    {sanityDateToString(award.date)}
                                </span>
                                <span>
                                    <strong className="font-bold">
                                        Organization
                                    </strong>:{" "}
                                    {award.organization}
                                </span>
                                <div className="my-6 text-lg text-gray-700 leading-relaxed">
                                    <BlockContent
                                            blocks={award.description}
                                            projectId="5zei2dq1"
                                            dataset="production"/>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    );
}
