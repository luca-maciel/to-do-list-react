import type React from "react";

type TitleProp = {
    size: number | string;
    text: string | React.JSX.Element;
    className?: string;
};

export default function Title({ size, text, className }: TitleProp) {
    const n = typeof size === "number" ? size : parseInt(String(size), 10);

    switch (n) {
        case 1:
            return <h1 className={className}>{text}</h1>;
        case 2:
            return <h2 className={className}>{text}</h2>;
        case 3:
            return <h3 className={className}>{text}</h3>;
        case 4:
            return <h4 className={className}>{text}</h4>;
        case 5:
            return <h5 className={className}>{text}</h5>;
        case 6:
            return <h6 className={className}>{text}</h6>;
        default:
            return <p>The title size must be specified</p>;
    }
}