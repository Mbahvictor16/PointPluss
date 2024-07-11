import React from 'react'
import Display from './Display'
import { cookiePolicy } from './cookiePolicy'

function CookiePolicyComponent() {
    return (
        <Display tabsName='Cookie Policy' displayList={cookiePolicy} />
    )
}

export default CookiePolicyComponent