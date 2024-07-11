import React from 'react';

function TabsMenu({ tabsName }) {
    return (
        <div className="text-primary font-medium text-sm flex items-center gap-2">
            Home <span>&gt; </span>
            <span className="text-amber-500">{tabsName}</span>
        </div>
    );
}

export default TabsMenu;
