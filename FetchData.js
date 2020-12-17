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

export {getExListData, getExerciseTitles, getExerciseData, getMovementData, getDietListData, getDietData};