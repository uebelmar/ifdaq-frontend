import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'dashboard',
        title    : 'Dashboard',
        type     : 'item',
        icon     : 'email',
        url      : '/dashboard',
    },
    {
        id       : 'brands',
        title    : 'Brands',
        type     : 'item',
        icon     : 'brand',
        url      : '/brands',
    },
    {
        id       : 'models',
        title    : 'Models',
        type     : 'item',
        icon     : 'model',
        url      : '/models',
    },
    {
        id       : 'magazines',
        title    : 'Magazines',
        type     : 'item',
        icon     : 'magazine',
        url      : '/magazines',
    },
    {
        id       : 'agencies',
        title    : 'Agencies',
        type     : 'item',
        icon     : 'agency',
        url      : '/Agencies',
    },
    {
        id       : 'ifdaq',
        title    : 'Ifdaq',
        type     : 'group',
        children : [
            {
                id       : 'changelog',
                title    : 'Changelog',
                type     : 'item',
                url      : '/changelog'
            },
            {
                id       : 'ifdaq_explained',
                title    : 'Ifdaq explained',
                type     : 'item',
                url      : '/ifdaq_explained'
            },
            {
                id       : 'partner_sources',
                title    : 'Partner/Sources',
                type     : 'item',
                url      : '/partner_sources'
            },
            {
                id       : 'contact',
                title    : 'Contact',
                type     : 'item',
                url      : '/contact'
            },
            {
                id       : 'about',
                title    : 'About',
                type     : 'item',
                url      : '/about'
            },
        ]
    }
];
