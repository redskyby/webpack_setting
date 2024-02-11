export interface BuildPaths {
    entry: string;
    html: string;
    icon: string;
    public: string;
    output: string;
    src: string;
}
export type BuildMode = "production" | "development";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    analyzer?: boolean;
    platform: BuildPlatform;
}
