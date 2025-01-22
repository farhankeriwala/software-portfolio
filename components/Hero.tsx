import React from 'react';

const Hero = () => {
    return (
        <div className={"bg-neutral-800 rounded-lg"}>
            <div className={"text-center  text-neutral-50 p-16 "}>
                <h1 className={"font-lato  text-6xl"}>MSc Computer Science Student</h1>
                <h2 className={"mt-4 font-poppins text-2xl"}>Freelancer & Upcoming Software Engineer</h2>
            </div>
            <div className=" py-18 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 font-lato text-neutral-200">Projects deployed/developed</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl font-bricolageGrotesque">30+
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 font-lato text-neutral-200">Years of Experience</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl font-bricolageGrotesque">5+
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 font-lato text-neutral-200">Reliable Results</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl font-bricolageGrotesque">99%</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Hero;