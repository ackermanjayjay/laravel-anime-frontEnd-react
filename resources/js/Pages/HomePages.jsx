import Navigation from '@/Components/Navbar'
import { Head, Link } from '@inertiajs/react'
export default function HomePages({ title, result }) {
    console.log("hasil= ", result)
    return (
        <>
            <Head title={title} />
            <Navigation></Navigation>
            <h1 className='mx-5 container'>
                Popular Anime
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-5 mx-5">
                {result.map((item, i) => (
                    <div key={i}>
                        <Link className="hover:cursor-pointer" href={`/show/${item.mal_id}`}>
                            <div className="max-w-xl card  ">
                                <figure>
                                    <img src={item.images.webp.large_image_url} alt="Shoes"
                                        className="xl:w-96 h-96 md:w-70 h-70 w-30 h-30 rounded-t-lg object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}