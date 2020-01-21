module.exports = {
    title: 'Dev Atlas',
    description: 'Description',
    themeConfig: {
        sidebar: [
            {
                title: 'Cloud',
                collapsable: false,
                children: [
                    {
                        title: 'AWS',
                        path: '/cloud/aws/',
                        collapsable: false,
                        children: [
                            '/cloud/aws/dynamodb'
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
            }
        ]
    }
}