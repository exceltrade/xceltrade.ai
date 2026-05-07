import {StructureBuilder} from 'sanity/desk'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('home').title('Home Page'),
      S.documentTypeListItem('settings').title('Site Settings')
    ])
