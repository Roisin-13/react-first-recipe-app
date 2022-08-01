import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    App : {
        textAlign: 'center', 
    },
    searchForm : {
        width: '25%',
        margin : {
            left: 'auto',
            right: 'auto',
        },
        display: 'flex',
        justifyContent: 'space-around',
    },
    searchButton : {
        padding: 5,
        margin: 5,
        boxSizing: 'border-box',
        backgroundColor: 'deeppink',
        borderRadius: 5,
        border: 'none',
        color: 'white',
        fontSize: 'medium',
        cursor: 'pointer',
    },
    recipeList : {
        //display: 'flex',
        //justifyContent: 'space-around',
        display: 'grid',
        //gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateAreas: `
          "1fr 1fr 1fr 1fr 1fr"
          "1fr 1fr 1fr 1fr 1fr"
          "1fr 1fr 1fr 1fr 1fr"
          "1fr 1fr 1fr 1fr 1fr"
        `,
        flexWrap: 'wrap',
        border: '1px solid blue',
    },
    recipeBox : {
        width: 150,
        border: '1px solid pink',
    },
    recipeImg : {
        width: 100,
        height: 100,
        objectFit: 'cover',
    },
    //searchIngredient

})
