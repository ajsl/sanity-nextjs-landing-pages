export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6102e8786da6ae4d217f1ca8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2t3zghb1',
                  apiId: '7649cbb0-6cbe-4451-a3f1-698a7eb4edba'
                },
                {
                  buildHookId: '6102e8783969165fa8cd96f1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dcteo52e',
                  apiId: 'e18e29bd-4a48-4f1e-af19-ec129313d23c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajsl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dcteo52e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
