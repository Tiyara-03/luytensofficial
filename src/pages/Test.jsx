import React from "react";
import { LayoutGrid } from "../components/ui/Layoutgrid";

export function LayoutGridDemo() {
    return (
        (<div className="h-[80vh] py-4 w-full lg:w-[60%]">
            <LayoutGrid cards={cards} />
        </div>)
    );
}

const SkeletonOne = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Leading Growth
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">

                A Smooth and Steep Growth: At Luyten's, we drive innovation and foster sustainable development, creating lasting value while empowering individuals to thrive and grow
            </p>
        </div>)
    );
};

const SkeletonTwo = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Catalyzing Success:
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                By combining expertise with innovation, we accelerate growth and create impactful solutions for our partners.
            </p>
        </div>)
    );
};
const SkeletonThree = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Vast Talent Pool:
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                At Luyten's, we connect you with a diverse network of exceptional professionals, empowering your business with expertise and innovation to thrive in a competitive world
            </p>
        </div>)
    );
};
const SkeletonFour = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Lasting Partnership:
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                At Luyten's, we build enduring relationships by delivering reliable, innovative solutions that drive mutual success and long-term growth.
            </p>
        </div>)
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail:
            "https://cdn.dribbble.com/userupload/14784190/file/original-cd9fb446f070701407fbae77e512d4a6.png?resize=1200x900&vertical=center"
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://cdn.dribbble.com/userupload/17903309/file/original-16865ac5d5a01ef1b03f5ced8b30aacb.png?resize=1200x900&vertical=center"
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "https://images.unsplash.com/photo-1543953589-18ab987d605f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            "https://cdn.dribbble.com/userupload/11790687/file/original-520b1e199116855046e39f4ee3c99bcf.png?resize=1200x583&vertical=center"
    },
];
