"use client";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";
import GsapTo from "@/components/Gsap/GsapTo";
import GsapFrom from "@/components/Gsap/GsapFrom";
import GsapFromTo from "@/components/Gsap/GsapFromTo";
import GsapTimeline from "@/components/Gsap/GsapTimeline";
import GsapStagger from "@/components/Gsap/GsapStagger";
import GsapScrollTrigger from "@/components/Gsap/GsapScrollTrigger";
import GsapText from "@/components/Gsap/GsapText";
import TestingConvexWithAuth from "@/components/TestingConvexWithAuth";
const Home = () => {
  //const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  const tasks = useQuery(api.tasks.get);

  //if(!trendingPodcasts) return <LoaderSpinner />

  return (
    //in order to show any podcasts, we must first create podcasts, so, we continue our code in the createpodcasts page
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white">Trending Podcasts</h1>
        <h1 className="text-slate-100">
          OpenAi API Key exposed, see why it is not being read into process.env,
          also lets animate some elements with gsap
        </h1>
        <GsapTo />
        <GsapFrom />
        <GsapFromTo />
        <GsapTimeline />
        <GsapStagger />
        <GsapScrollTrigger />
        <GsapText />
        <TestingConvexWithAuth />
        {tasks?.map(({ _id, text }) => (
          <div className="bg-black" key={_id}>
            <h2 className="text-slate-100">{text}</h2>
          </div>
        ))}
        {/*<div className="podcast_grid">
          {trendingPodcasts?.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
            <PodcastCard 
              key={_id}
              imgUrl={imageUrl as string}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default Home;
