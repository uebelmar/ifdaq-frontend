import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'dashboard',
        title    : 'Dashboard',
        type     : 'item',
        icon     : 'dashboard',
        url      : '/dashboard',
    },
    {
        id       : 'brands',
        title    : 'Brands',
        type     : 'item',
        icon     : 'extension',
        url      : '/brands',
    },
    {
        id       : 'models',
        title    : 'Models',
        type     : 'item',
        icon     : 'face',
        url      : '/models',
    },
    {
        id       : 'magazines',
        title    : 'Magazines',
        type     : 'item',
        icon     : 'import_contacts',
        url      : '/magazines',
    },
    {
        id       : 'agencies',
        title    : 'Agencies',
        type     : 'item',
        icon     : 'business',
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
                icon: 'update',
                url      : '/changelog'
            },
            {
                id       : 'ifdaq_explained',
                title    : 'Ifdaq explained',
                type     : 'item',
                icon: 'import_contacts',
                url      : '/ifdaq_explained'
            },
            {
                id       : 'partner_sources',
                title    : 'Partner/Sources',
                type     : 'item',
                icon     : 'people',
                url      : '/partner_sources'
            },
            {
                id       : 'contact',
                title    : 'Contact',
                type     : 'item',
                icon     : 'phone',
                url      : '/contact'
            },
            {
                id       : 'about',
                title    : 'About',
                type     : 'item',
                icon     : 'info',
                url      : '/about'
            },
        ]
    }
];
