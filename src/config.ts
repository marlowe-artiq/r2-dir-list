import { Env, SiteConfig } from './types';

export function getSiteConfig(env: Env, domain: string): SiteConfig | undefined {
    const configs: {[domain: string]: SiteConfig} = {
        'images.artiqbi.org': {
            name: "Artiqbi Images",
            bucket: env.BUCKET_artiqimage,
            desp: {
                '/': "Artiqbi Image Assets",
                '/site_images': "Website Images Directory",
            },
            showPoweredBy: false, // Set to true if you want to show the original repo credit
            
            /// Decode URI when listing objects, useful when you have space or special characters in object key
            decodeURI: true, 
        },
    };
    return configs[domain];
}
