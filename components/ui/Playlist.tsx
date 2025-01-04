"use client";
import { Skeleton } from './skeleton';
import { useState, useEffect } from 'react';
export default function SpotifyPlaylist() {

    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching or initialization process
        setTimeout(() => {
          setIsLoading(false); // Set to false when content is ready
        }, 2000); // Adjust timing as needed
      }, []);
    

  return (
    <>
   
    <section className="flex flex-col xl:items-start justify-center w-full max-w-2xl mx-auto mb-14 sm:mb-16 pt-32 px-5  font-serif">
        <div className="">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">Playlists</h1>
            <p className="w-full mb-4 text-gray-600 dark:text-gray-200">
            {`I can't be productive without music, so this page is one of my favorites on my website. Below are some of my top-played songs on Spotify—tracks that keep me in the zone.`}
            </p>        
        </div>


        <div className="flex  justify-center py-10">
        <div className="flex-col">
            <h1 className="text-2xl text-gray-800 dark:text-zinc-100 font-serif py-1">Top Tracks</h1>
            {isLoading ? <Skeleton/> : 
            <iframe
              src="https://open.spotify.com/embed/playlist/2RhfksYfbPQWhkcZDKpyiw?utm_source=generator&theme=0"
              height="352"
              className="rounded-xl shadow-md md:w-[450px] "
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
        ></iframe>
            }
            
        </div>

        </div>

        <div className="flex justify-center py-10 ">
            <div className="flex-col">
                <h1 className="text-2xl text-gray-800 dark:text-zinc-100 font-serif py-1">Random</h1>
                {isLoading ? <Skeleton/> : 
                <iframe
                    src="https://open.spotify.com/embed/playlist/04Obfauef65RhUSPkr3FOt?utm_source=generator"
                    height="352"
                    className="rounded-xl shadow-md md:w-[450px]"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
                }

        </div>

    </div>
    </section>


    

    
    
    </>
  )
}