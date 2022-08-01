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
    }
    //searchIngredient

})
