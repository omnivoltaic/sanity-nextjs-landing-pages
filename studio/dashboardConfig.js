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
                  buildHookId: '61e1373c762e8be3423dd6a4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iurxvisv',
                  apiId: 'afc24e18-197a-4cbd-8348-bcc82ce2d731'
                },
                {
                  buildHookId: '61e1373c762e8bda573ddcc9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-h4asadkd',
                  apiId: 'a493005d-11f6-4d88-a8e2-52d2d0170cb6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/omnivoltaic/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-h4asadkd.netlify.app', category: 'apps'}
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
