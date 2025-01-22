import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {client} from "@/lib/sanity/client";
import type {SanityDocument} from "next-sanity";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getProjects = async () => {
    const PROJECTS_QUERY = `*[
      _type == "project" && defined(slug.current)
    ]|order(publishedAt desc)[0...12]{
      _id,
      title,
      slug,
      description,
      images[]{_key, asset->{_id, url}},
      techStack,
      features,
      url,
      github,
      publishedAt
    }`;
    try{
        const options = {next: {revalidate: 30}};
        const response = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);
        if(response){
            return response;
        }
    }
    catch (error){
        console.error(error);
    }
}