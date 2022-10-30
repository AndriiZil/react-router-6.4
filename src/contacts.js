export function getContacts() {
  return new Promise((resolve => {
    return resolve([
      {
        id: 1,
        first: 'Example 1',
        last: 'Last 1',
        avatar: 'https://placekitten.com/g/100/100',
        twitter: 'your_handle',
        notes: 'Some notes',
        favorite: true,
      },
      {
        id: 2,
        first: 'Example 2',
        last: 'Last 2',
        avatar: 'https://placekitten.com/g/200/200',
        twitter: 'your_handle',
        notes: 'Some notes',
        favorite: true,
      },
      {
        id: 3,
        first: 'Example 3',
        last: 'Last 3',
        avatar: 'https://placekitten.com/g/300/300',
        twitter: 'your_handle',
        notes: 'Some notes',
        favorite: true,
      }
    ])
  }))
}
