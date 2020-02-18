module.exports = {
    title: 'Dev Atlas',
    description: 'Description',
    base: '/devatlas/',
    themeConfig: {
        sidebar: [
            {
                title: 'Cloud',
                path: '/cloud/',
                collapsable: false,
                children: [
                    {
                        title: 'AWS',
                        path: '/cloud/aws/',
                        collapsable: false,
                        children: [
                            '/cloud/aws/dynamodb',
                            '/cloud/aws/certification'
                        ]
                    },
                    {
                        title: 'Google Cloud',
                        path: '/cloud/gcloud/',
                        collapsable: false,
                        children: []
                    },
                    {
                        title: 'Azure',
                        path: '/cloud/azure/',
                        collapsable: false,
                        children: []
                    }
                ]
            },
            {
                title: 'Serverless',
                path: '/serverless/',
                collapsable: false,
                children: [
                    '/serverless/languages'
                ]
            }
        ]
    }
}