<?php

namespace App\Http\Controllers;

use Http;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $response = Http::get("https://api.jikan.moe/v4/top/anime?limit=8")['data'];
        return Inertia::render("HomePages",[
        'title'=>"halaman home",
        'result'=>$response
        ]);
    }

    public function search (Request $request)
    {
        $response_search = Request('searchanime');
        $response = Http::get("https://api.jikan.moe/v4/anime?q=$response_search")['data'];
        return Inertia::render("HomePages",[
        'title'=>"halaman home",
        'result'=>$response
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $mal_id)
    {
        //
        $response = Http::get("https://api.jikan.moe/v4/anime/$mal_id/full");
        $result_detail=$response->json("data");
        return Inertia::render("DetailPages",[
            "result_details"=>$result_detail,
            "title"=>"Detail Anime"
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
