let hydrations = {};
if (typeof window !== 'undefined') {
    for (const el of document.querySelectorAll('[hydratable]')) {
        hydrations[el.getAttribute('hydratable')] = el.innerHTML;
    }
}

const EMPTY_HTML = '';

export default function (id) {
    return {__html: hydrations[id] || EMPTY_HTML};
}