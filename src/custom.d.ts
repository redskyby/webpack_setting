declare module "*.module.scss" {
    interface IClassName {
        [className : string] : string
    }
    const  className: IClassName;
    export = className
}
