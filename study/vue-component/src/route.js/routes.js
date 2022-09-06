export default [
    {
        path: '/communication',
        component: () => import('../components/Communication/Communication'),
        children: [
            {
                path: 'event',
                component: () => import('../components/Communication/EventTest/EventTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'model',
                component: () => import('../components/Communication/ModelTest/ModelTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'sync',
                component: () => import('../components/Communication/SyncTest/SyncTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'attrs-listeners',
                component: () => import('../components/Communication/AttrsListenersTest/AttrsListenersTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'children-parent',
                component: () => import('../components/Communication/ChildrenParentTest/ChildrenParentTest'),
                meta: {
                    show: false
                },
            },
            {
                path: 'scope-slot',
                component: () => import('../components/Communication/ScopeSlotTest/ScopeSlotTest'),
                meta: {
                    show: false
                },
            }
        ],
    },
]