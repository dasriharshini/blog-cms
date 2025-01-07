import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  console.log('Sanity structure is being loaded...')
  return S.list()
    .title('Content')
    .items(S.documentTypeListItems())
}