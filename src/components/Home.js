import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import image from "../images/Home Background.PNG"

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default function Home() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"] {
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) {
        return (
            <main className="bg-blue-100 min-h-screen p-12">
                <div className="justify-center">
                    <h1 className="text-5xl text-center animate-pulse">
                        Loading...
                    </h1>
                </div>
            </main>
        )
    }

    return (
        <main className="relative">
            <img src={image} alt="Star background" className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
                    <div className="w-32 h-32 lg:w-64 lg:h-64 mr-8">
                        <img
                            src={urlFor(author.authorImage).url()}
                            className="bg-cover bg-center rounded"
                            alt={author.name}/>
                    </div>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-300 mb-4">
                            <span className="text-blue-100">
                                {author.name}
                            </span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent
                                blocks={author.bio}
                                projectId="5zei2dq1"
                                dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>

        /*
        <main>
            <img src={image} alt="Star Background" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Hi. I'm Min-Kyu.
                </h1>
            </section>
        </main>
        */
    )
}
