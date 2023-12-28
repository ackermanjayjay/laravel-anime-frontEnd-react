import { Head, Link } from '@inertiajs/react'
export default function DetailPages({ title, result_details }) {
    return (
        <>
            <Head title={title} />
            <h1>Anime Ackerman</h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-5 mx-5">
                        <div className="max-w-xl card  bg-base-100 shadow-xl">
                            <figure>
                                <img src={result_details.images.webp.large_image_url} alt="Shoes"
                                    className="xl:w-96 h-96 md:w-70 h-70 w-30 h-30 rounded-t-lg object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {result_details.title}
                                </h2>
                                
                            </div>
                        </div>
            </div>
        </>
    )
}