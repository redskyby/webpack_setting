declare module "*.module.scss" {
    interface IClassName {
        [className: string]: string;
    }
    const className: IClassName;
    export = className;
}
declare module "*.png" {
    const value: string;
    export = value;
}
declare module "*.jpg" {
    const value: string;
    export = value;
}
declare module "*.jpeg" {
    const value: string;
    export = value;
}
declare module "*.svg" {
    import React from "react";
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export = SVG;
}
