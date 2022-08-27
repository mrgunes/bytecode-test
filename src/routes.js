import React from 'react';
const AddressBook = React.lazy(() => import('./views/Address'))

const routes = [
    {
        path: '/',
        name: 'Address Book',
        element: AddressBook,
    }
];

export default routes