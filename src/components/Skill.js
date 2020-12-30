import React, {useEffect, useState} from "react"
import sanityClient from "../client.js"
import BlockContent from "@sanity/block-content-to-react";

export default function Skill() {
    const [programmingLanguageData, setProgrammingLanguageData] = useState(null);
    const [languageData, setLanguageData] = useState(null);
    const [otherSkillData, setOtherSkillData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "programmingLanguage"] | order(name) {
            name,
            description
        }`)
        .then((data) => setProgrammingLanguageData(data))
        .catch(console.log);

        sanityClient.fetch(`*[_type == "language"] | order(name) |order(levelOfFluency desc) {
            name,
            levelOfFluency,
            description
        }`)
        .then((data) => setLanguageData(data))
        .catch(console.log);

        sanityClient.fetch(`*[_type == "otherSkill"] | order(name) {
            name,
            description
        }`)
        .then((data) => setOtherSkillData(data))
        .catch(console.log);
    }, []);

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <div className="divide-y-4 divide-black divide-opacity-25">
                    <div>
                        <h1 className="cursive text-5xl flex justify-center">
                            Skills
                        </h1>
                        <h2 className="cursive text-3xl text-gray-600 flex justify-center mb-12 pt-6">
                            Programming Languages
                        </h2>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {programmingLanguageData && programmingLanguageData.map((programmingLanguage, index) => (
                                <article className="relative rounded-lg shadow-xl bg-white p-16">
                                    <h3 className="text-gray-800 text-3xl font-bold mb-2">
                                        {programmingLanguage.name}
                                    </h3>
                                    <div className="text-gray-600 text-lg space-x-4">
                                        <div className="my-6 text-lg text-gray-800 leading-relaxed">
                                            <BlockContent
                                                blocks={programmingLanguage.description}
                                                projectId="5zei2dq1"
                                                dataset="production"/>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </section>
                    </div>
                    <div className="my-8">
                        <h2 className="cursive text-3xl text-gray-600 flex justify-center mb-12 pt-8">
                            Languages
                        </h2>
                        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {languageData && languageData.map((language, index) => (
                                <article className="relative rounded-lg shadow-xl bg-white p-16">
                                    <h3 className="text-gray-800 text-3xl font-bold mb-2">
                                        {language.name}
                                    </h3>
                                    <div className="text-gray-600 text-lg space-x-4">
                                        <span>
                                            <strong className="font-bold">
                                                Level of Fluency
                                            </strong>:{" "}
                                            {language.levelOfFluency}
                                        </span>
                                        <div className="my-6 text-lg text-gray-800 leading-relaxed">
                                            <BlockContent
                                                blocks={language.description}
                                                projectId="5zei2dq1"
                                                dataset="production"/>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </section>
                    </div>
                    <div className="my-8">
                        <h2 className="cursive text-3xl text-gray-600 flex justify-center mb-12 pt-8">
                            Other Skills
                        </h2>
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherSkillData && otherSkillData.map((otherSkill, index) => (
                                <article className="relative rounded-lg shadow-xl bg-white p-16">
                                    <h3 className="text-gray-800 text-3xl font-bold mb-2">
                                        {otherSkill.name}
                                    </h3>
                                    <div className="text-gray-600 text-lg space-x-4">
                                        <div className="my-6 text-lg text-gray-800 leading-relaxed">
                                            <BlockContent
                                                blocks={otherSkill.description}
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
