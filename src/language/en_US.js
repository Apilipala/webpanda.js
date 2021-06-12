webpanda.language ({

    // compiler
    'compiler-0001' : 'The error command',
    'compiler-0002' : 'Content of the template',
    'compiler-0003' : 'The Warning command',
    'compiler-0004' : 'Content of the template',
    'compiler-0005' : 'Debug flag',
    
    // parse
    'parse-0001' : '"${1}" command cannot exist in the same tag or more than one!',
    'parse-0002' : '"${1}" command cannot have multiple entries in the same tag!',
    'parse-0003' : '"${1}" command cannot be empty!',
    'parse-0004' : '"${1}" Template syntax error!',
    'parse-0005' : '"${1}" command is not valid, missing attribute name!',
    'parse-0006' : '"${1}" command not valid, missing class name!',
    'parse-0007' : '"${1}" command is not valid. Missing style key name!',
    'parse-0008' : '"${1}" command missing event name!',
    'parse-0009' : '"${1}" command syntax errors, "elseif | else" command node must be present before the "if", "else" command node must exist before "elseif | if" command',

    // parse、render
    'render-0001' : 'Render error, "${1}" is a property of render data, cannot be defined as traversal unit key other name!',
    'render-0002' : 'Render error, "${1}" is an attribute of render data and cannot be defined as a different name of traversal cell value!',
    'render-0003' : 'Render error, "${1}" is an attribute of the render data and cannot be defined as a different name of the traversal unit index!',
    'render-0004' : 'Rendering error, "${1}" is not an object!',
    'render-0005' : 'Rendering error, "${1}" is not a string!',
    'render-0006' : 'Rendering error, selector is an abstract node tree, no renderable valid node found!',

    // ajax
    'ajax-0001' : 'Your browser does not support Ajax!',

    // page
    'page-0001' : '"${1}" page does not exist!',
    'page-0002' : 'Project name "${1}" page does not exist!',
    'page-0003' : 'Page loading aborted, "${1}" project creation imported resource invalid!',
    'page-0004' : '"${1}" project page, project file "${2}" failed to load!',
    'page-0005' : 'Prevent violence refresh, page guard start!.More technical support: ${1}',
    
    // project
    'project-0001' : '${1} "${2}" file import failed, frame includeSelector "${3}" configuration is not valid!',
    'project-0002' : '${1} "${2}" file import failed, frame includes methods includeMethod "${3}" configuration is not valid!Optional values: "prepend | append"',
    'project-0003' : '${1} "${2}" file introduces an exception!',
    'project-0004' : 'Project "${1}" has duplicate preparation. Check if there are multiple projects inheriting from each other in the project definition. To prevent infinite loop, the current progress has been terminated!',
    'project-0005' : '"${1}" project already exists, project duplication definition blocked!',
    'project-0006' : 'The filter for "${1}" project "${2}" is not configured properly. Failed to create render filter node!',
    'project-0007' : 'Project "${1}" failed to inherit from parent project "${2}", parent project does not exist!',
    'project-0008' : 'Name of the project: ${1} ',

});
