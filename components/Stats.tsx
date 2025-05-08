import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-44 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-neutral-600 font-poppins">Projects Developed</dt>
                            <dd className="order-first text-3xl font-semibold font-bricolageGrotesque tracking-tight text-neutral-900 sm:text-7xl">30+
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-neutral-600 font-poppins">Years of Experience</dt>
                            <dd className="order-first text-3xl font-semibold font-bricolageGrotesque tracking-tight text-neutral-900 sm:text-7xl">5+
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-neutral-600 font-poppins">Client Satisfaction</dt>
                            <dd className="order-first text-3xl font-semibold font-bricolageGrotesque tracking-tight text-neutral-900 sm:text-7xl">★★★★★</dd>
                        </div>
                    </dl>
                </div>
            </div>

        </div>
    );
};

export default Stats;