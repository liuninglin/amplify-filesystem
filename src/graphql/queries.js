export const listTags = /* GraphQL */ `
query ListTags {
    listTags {
        items {
          _deleted
          _lastChangedAt
          _version
          createdAt
          id
          name
          updatedAt
        }
    }
}
`;

export const listDocuments = `
query ListDocuments {
    listDocuments {
      items {
        _deleted
        _lastChangedAt
        _version
        categoryID
        createdAt
        name
        id
        filetype
        filename
        description
        updatedAt
        tags {
          items {
            _deleted
            id
            tag {
              name
              id
            }
          }
        }
      }
    }
  }  
`;

export const listCategories = `
query ListCategories {
  listCategories {
    items {
      _deleted
      _lastChangedAt
      _version
      createdAt
      id
      name
      updatedAt
    }
  }
}
`;

export const getDocument = `
query GetDocument($id: ID!) {
  getDocument(id: $id) {
    _deleted
    _lastChangedAt
    _version
    categoryID
    filename
    description
    createdAt
    filetype
    id
    name
    updatedAt
    tags {
      items {
        tag {
          _deleted
          _lastChangedAt
          _version
          createdAt
          id
          name
          updatedAt
        }
      }
    }
  }
}  
`
