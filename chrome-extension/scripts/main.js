/*
Author: Krerkkiat Chusap
*/
var editorHost = 'https://krerkkiat.github.io/dekd/article-source-editor/';

// Function to perform dynamic script injection.
var checkState = function () {
    if(document.readyState === 'interactive') {
        setTimeout(function () {
            $.getScript(editorHost + 'article-source-editor.js');
        }, 500);
    } else if(document.readyState === 'complete') {
        $.getScript(editorHost + 'article-source-editor.js');
    } else {
        setTimeout(checkState, 500);
    }
}

setTimeout(checkState, 1000);