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
        createdAt
        description
        filename
        filetype
        id
        updatedAt
      }
    }
  }  
`;

