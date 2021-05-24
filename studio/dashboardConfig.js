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
                  buildHookId: '60ab561b07b42bb6e29dbf73',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1ugpnfod',
                  apiId: 'e6cd4417-d139-42ed-be12-609986753cfa'
                },
                {
                  buildHookId: '60ab561cbc4286f2a0bd15dd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iiojgjsn',
                  apiId: 'd1f2a17c-411c-4006-a937-1389e70e297f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trendtboe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iiojgjsn.netlify.app', category: 'apps'}
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
