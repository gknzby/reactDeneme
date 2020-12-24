    function getExListData(exsID)
{
    let exsData = {
        exIDs : ['ex1', 'ex2', 'ex3', 'ex4'],
    }

    return exsData;
}

function getExerciseTitles(exID)
{
    let exData = {
        title: 'Exercise Title',
        area: 'Exercise Area',
    }

    return exData;
}

function getExerciseData(exID)
{
    let exData = {
        title: 'Exercise Title',
        area: 'Exercise Area',
        moveIDs: ['Mov1', 'Mov2', 'Mov3'],
    }

    return exData;
}

function getMovementData(moveID)
{
    let moveData = {
        title: 'Move Title',
        content: 'Move Content',
        set: 3,
        repeat: 15,
    }

    return moveData;
}

function getDietListData(dietsID)
{
    let dietsData = {
        dietIDs : ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    };

    return dietsData;
}

function getDietData(dietID)
{
    let dietData = {
        date : 'Date',
        day : 'Day',
        content : 'Content',
    }

    return dietData
}

//ILKAY
//stuID: Student ID
function getTemplateActivityList(stuID)
{
    let data = ['act1', 'act2', 'act3', 'act4']
    return data;
}
//actID: Activity ID
function getActivityData(actID)
{
    let data={
        title: "Activity Title",
        // Type: Saat dakika adım km vs
        date: "date",
        data: "DATA",

    }
    return data;
}

export {getExListData, getExerciseTitles, getExerciseData, getMovementData, getDietListData, getDietData, getTemplateActivityList,getActivityData};