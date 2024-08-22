"use client";

import { useQuery } from "convex/react";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import ProfileCard from "@/components/ProfileCard";
import { api } from "@/convex/_generated/api";

const ProfilePage = ({
  params,
}: {
  params: {
    profileId: string;
  };
}) => {
  const user =
    /*useQuery(api.users.getUserById, {
    clerkId: params.profileId,
  });*/ "dog";
  const podcastsData: any = []; /*useQuery(api.podcasts.getPodcastByAuthorId, {
    authorId: params.profileId,
  });*/

  if (!user || !podcastsData) return <LoaderSpinner />;

  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-white-1 max-md:text-center">
        Podcaster Profile
      </h1>
      <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row">
        {/*
        <ProfileCard
          podcastData={podcastsData!}
          imageUrl={user?.imageUrl!}
          userFirstName={user?.name!}
        />
  */}
      </div>
      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">All Podcasts</h1>
        <div className="flex flex-row">
          <iframe
            src="https://podcasters.spotify.com/pod/show/joshthereactdev/embed/episodes/Attempt-at-upload-2-e2khlb2/a-abb60qc"
            height="102px"
            width="400px"
          ></iframe>
          <h1 className="text-slate-50">
            This is from podcasters.spotify.com.{" "}
          </h1>
        </div>
        <h1 className="text-center text-slate-50">
          Copywrited material gets taken down on both platfoms soon after
          posted, but on podcasters for spotify, the data is still in the
          database, but doesn't show in the episode dashboard. The fact that the
          above episode is playing is proof
        </h1>
        <div className="flex flex-row">
          <iframe
            src="https://open.spotify.com/embed/episode/6N5sYPwPgZ80s1vGT64W5z?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <h1 className="text-slate-50">This is from open.spotify.com</h1>
        </div>

        {/*podcastsData && podcastsData.podcasts.length > 0 ? (
          <div className="podcast_grid">
            {podcastsData?.podcasts
              ?.slice(0, 4)
              .map((podcast) => (
                <PodcastCard
                  key={podcast._id}
                  imgUrl={podcast.imageUrl!}
                  title={podcast.podcastTitle!}
                  description={podcast.podcastDescription}
                  podcastId={podcast._id}
                />
              ))}
          </div>
        ) : (
          <EmptyState
            title="You have not created any podcasts yet"
            buttonLink="/create-podcast"
            buttonText="Create Podcast"
          />
        )*/}
      </section>
    </section>
  );
};

export default ProfilePage;
