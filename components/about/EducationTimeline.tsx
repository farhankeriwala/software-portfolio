import React from "react";
import SubHeading from "../Headings/SubHeading";
import {fetchEducation, formatSanityDate} from "@/lib/utils";
import {SanityDocument} from "next-sanity";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/imageUrl";

const EducationTimeline = async () => {
  const education: SanityDocument[] | undefined = await fetchEducation();
  return (
    <section>
        <SubHeading text={"Education"} />
      <ol className="items-center justify-evenly w-full sm:flex">
        {
          education ? education.map((education) => (
              <li key={education._id} className="w-full flex flex-col mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div
                      className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <Image src={urlFor(education.logo.asset).url()} alt={""} width={200}
                           height={200}/>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    <span>{education.degree}</span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {formatSanityDate(education.startDate)} - {education.endDate ? formatSanityDate(education.endDate) : "Present"}
                  </time>
                  <p className="text-sm">
                    Field{education.fieldsOfStudy.length > 1 ? 's' : ''} of Study: {education.fieldsOfStudy.join(", ")}
                  </p>

                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Grade: {education.grades}
                  </p>
                </div>
              </li>
          )) : (<div></div>)
        }
      </ol>
    </section>
  );
};

export default EducationTimeline;
