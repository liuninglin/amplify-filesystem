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

