import React from "react";
import { LayoutGrid } from "../components/ui/Layoutgrid";
import img1 from '../assets/GROWTH (1).png'
import img2 from '../assets/L (1).png'

export function LayoutGridDemo() {
    return (
        (<div className="h-[80vh] py-4 w-full">
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
                With Luyten's as your service, we drive innovation and enable sustainable development. A smooth growth overcrossing hardship and challanges with us as your team.
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
                By combining our hardwork with our smartwork, we accelerate growth and create impactful solutions for our partners.
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
                At Luyten's, we intoduce you with a diverse network of exceptional professionals, connecting your business with forte and innovation to grow in a competitive world
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
                Luyten's as your partner means building enduring relationship. A partner with reliablity and trust that drive mutual success and long-lasting growth.
            </p>
        </div>)
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail: img1,
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
        thumbnail: img2
    },
];
