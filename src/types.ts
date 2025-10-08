export type Env = {
    [K in `BUCKET_${string}`]: R2Bucket;
};

export interface SiteConfig {
    name: string;
    bucket: R2Bucket;
    desp: {
        [path: string]: string;
    };
    decodeURI?: boolean;
    legalInfo?: string;
    showPoweredBy?: boolean;
    favicon?: string;
    dangerousOverwriteZeroByteObject?: boolean;
    /**
     * Optional redirect function. Called with the bucket and requested object key (the path without leading '/').
     * Return an object with a target key and a `force` boolean.
     * - key: the target key to which the request should be redirected
     * - force: when true, perform the redirect even if the original key exists as an object in the bucket
     * When not provided, no redirect is performed.
     */
    redirect?: (bucket: R2Bucket, key: string) => Promise<{ key: string; force: boolean }>;
}
