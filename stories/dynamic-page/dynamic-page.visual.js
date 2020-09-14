import '../../dist/breadcrumb.css';
import '../../dist/bar.css';
import '../../dist/button.css';
import '../../dist/breadcrumb.css';
import '../../dist/tabs.css';
import '../../dist/toolbar.css';
import '../../dist/dynamic-page.css';

import * as stories from './dynamic-page.stories.js';

export default {
    title: 'Visual/DynamicPage'
};

export const DynamicPage = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
