"use client"

import { Skeleton } from "./skeleton"
import { useState, useEffect, useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
interface PlaylistData {
  id: string
  title: string
  embedUrl: string
}

interface SpotifyPlaylistItemProps {
  playlist: PlaylistData
  priority?: boolean
}

const PlaylistSkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="h-6 w-32" />
    <Skeleton className="h-[352px] w-full md:w-[450px] rounded-xl" />
  </div>
)

const SpotifyPlaylistItem = ({ playlist, priority = false }: SpotifyPlaylistItemProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Use intersection observer for lazy loading non-priority items
  const { isIntersecting } = useIntersectionObserver(containerRef, {
    threshold: 0.1,
    rootMargin: "100px",
  })

  useEffect(() => {
    if (priority || isIntersecting) {
      setShouldLoad(true)
    }
  }, [priority, isIntersecting])

  const handleIframeLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div ref={containerRef} className="flex justify-center py-10">
      <div className="flex-col space-y-3">
        <h2 className="text-2xl text-gray-800 dark:text-zinc-100 font-serif">{playlist.title}</h2>

        {!shouldLoad ? (
          <PlaylistSkeleton />
        ) : hasError ? (
          <div className="h-[352px] w-full md:w-[450px] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-2">Failed to load playlist</p>
              <button
                onClick={() => {
                  setHasError(false)
                  setIsLoading(true)
                  if (iframeRef.current) {
                    iframeRef.current.src = playlist.embedUrl
                  }
                }}
                className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
              >
                Try again
              </button>
            </div>
          </div>
        ) : (
          <>
            {isLoading && (
              <div className="absolute">
                <PlaylistSkeleton />
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={playlist.embedUrl}
              height="352"
              className={`rounded-xl shadow-md w-full md:w-[450px] transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading={priority ? "eager" : "lazy"}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title={`Spotify playlist: ${playlist.title}`}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default function SpotifyPlaylist() {
  const playlists: PlaylistData[] = [
    {
      id: "top-tracks",
      title: "Top Tracks",
      embedUrl: "https://open.spotify.com/embed/playlist/2RhfksYfbPQWhkcZDKpyiw?utm_source=generator&theme=0",
    },
    {
      id: "random",
      title: "Random",
      embedUrl: "https://open.spotify.com/embed/playlist/04Obfauef65RhUSPkr3FOt?utm_source=generator",
    },
  ]

  return (
    <section className="flex flex-col xl:items-start justify-center w-full max-w-2xl mx-auto mb-14 sm:mb-16 pt-32 px-5 font-serif">
      <header className="mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">Playlists</h1>
        <p className="w-full text-gray-600 dark:text-gray-200 leading-relaxed">
          I can&#39;t be productive without music, so this page is one of my favorites on my website. Below are some of my
          top-played songs on Spotify—tracks that keep me in the zone.
        </p>
      </header>

      <div className="w-full">
        {playlists.map((playlist, index) => (
          <SpotifyPlaylistItem
            key={playlist.id}
            playlist={playlist}
            priority={index === 0} // First playlist loads immediately
          />
        ))}
      </div>
    </section>
  )
}
