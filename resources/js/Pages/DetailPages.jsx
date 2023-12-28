import { Head, Link } from '@inertiajs/react'
export default function DetailPages({ title, result_details }) {
    return (
        <>
            <Head title={title} />
            <h1>Anime Ackerman</h1>
            <div className="flex md:flex-nowrap flex-wrap justify-start mx-5 mt-5">
                <div className="max-w-sm  items-center rounded-lg  md:max-w-xl  bg-base-100 shadow-xl">
                    <img src={result_details.images.webp.large_image_url} alt="Shoes"
                        className=" shadow  hover:scale-110 transition duration-500 cursor-pointer object-cover"
                    />
                    <span class="badge badge-accent mt-5 mx-3">
                        <p>Score: {result_details.score}</p>
                        </span>
                    <span class="badge badge-accent mt-5 mx-3">
                        <p>Score: {result_details.year}</p>
                        </span>
                    <span class="badge badge-accent mt-5 mx-3">
                        <p>Score: {result_details.rank}</p>
                        </span>
                </div>
            </div>
        </>
    )
}