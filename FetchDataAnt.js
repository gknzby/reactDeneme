function getTemplateExList(antID)
{
    let data = ['ex1', 'ex2', 'ex3', 'ex4'];

    return data;
}
function getTemplateMovList(antID)
{
    let data = ['mov1', 'mov2', 'mov3', 'mov4', 'mov5', 'mov6']

    return data;
}

function getMoveData(moveID)
{
    let data = {
        title : "Move Title",
        area : "Move Area",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }

    return data;
}

function getTemplateAreaList(antID)
{
    let data = ['area1', 'area2', 'area3', 'area4', 'area5', 'area6']

    return data;
}

function getAreaData(areaID)
{
    let data = {
        title : "Area Title",
    }

    return data;
}

export {getTemplateExList, getTemplateMovList, getMoveData, getTemplateAreaList, getAreaData};