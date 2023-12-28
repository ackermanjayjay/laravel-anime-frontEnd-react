import Navigation from '@/Components/Navbar'
import { Head} from '@inertiajs/react'
export default function DetailPages({ title, result_details }) {
    console.log("hasil =", result_details)
    return (
        <>
            <Head title={title} />
            <Navigation></Navigation>
            <h1 className='mx-5 container'>
                Detail Anime
            </h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 justify-start mx-5 mt-5">
                <div className="card">
                    <figure>
                        <img src={result_details.images.webp.large_image_url} alt="Movie"
                            width={300}
                            height={300}
                        />
                    </figure>
                    <div className="mx-5 mt-5 container ">
                        <span className='badge badge-accent font-bold'>
                            <p>
                                Score : {result_details.score}
                            </p>
                        </span>
                        <span className='badge font-bold'>
                            <p>
                                Year : {result_details.year ? result_details.year : null}
                            </p>
                        </span>
                        <span className='badge font-bold'>
                            <p>
                                Rating : {result_details.rating ? result_details.rating : null}
                            </p>
                        </span>
                    </div>
                </div>
                <div className="text-justify mx-5 justify-center">
                    <p>{result_details.synopsis}</p>
                </div>
            </div>
        </>
    )
}