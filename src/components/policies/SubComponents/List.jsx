import React from 'react';

export default function List({ listItem }) {
    return (
        <ul className="list-disc">
            {listItem.map((list, id) => (
                <li key={id} className="m-4 text-primary">
                    {list}
                </li>
            ))}
        </ul>
    );
}
