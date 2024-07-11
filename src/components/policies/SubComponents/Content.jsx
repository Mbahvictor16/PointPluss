import React from 'react';
import SubContent from './SubContent';
import List from './List';

export default function Content({ heading, content, list, additionaltext }) {
    return (
        <div>
            {heading && (
                <h1 className="text-lg lg:text-xl font-medium lg:font-bold my-4">
                    {heading}
                </h1>
            )}
            {typeof content === 'string' ? (
                <div className="text-primary">{content}</div>
            ) : (
                content && (
                    <div>
                        {content.map((con, id) => (
                            <SubContent
                                key={id}
                                subheading={con.subheading}
                                subcontent={con.subcontent}
                                sublist={con.sublist}
                            />
                        ))}
                    </div>
                )
            )}
            {list && <List listItem={list} />}
            {additionaltext && <p>{additionaltext}</p>}
        </div>
    );
}
