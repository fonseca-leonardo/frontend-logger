import ITheme from '../../interfaces/ITheme';

export default {
    background: '#ebebf5',

    fontColor: '#565656',

    gradient: ['#c2c8ee', '#98a3e9', '#7080e2'],

    boxShadow: '2px 2px 4px 0px #a0a0a073',

    lightColor: '#0000001a',

    darkColor: '#0000000d',

    mutedColor: '#acabad',

    spinnerColor: '#fff',

    thumbColor: '#7080e266',

    optionColor: '#ebebf5',

    optionArrowColor: 'black',

    successColor: '#43a047',

    warningColor: '#ff9800',

    errorColor: '#d32f2f',

    ghostButton: {
        background: '#b9b9b9',
    },

    button: {
        boxShadow: '2px 2px 4px 0px #a0a0a073',

        background: '#7080e2',
    },

    card: {
        boxShadow: '2px 2px 4px 0px #a0a0a073',

        background: '#ffffff40',

        solidBackground: '#f0f0f8',
    },

    input: {
        background: '#ffffff3b',

        color: 'black',

        boxShadow: '2px 2px 5px 0px #a0a0a073',

        borderColor: '#a0a0a073',
    },

    sideMenu: {
        boxShadow: '2px 2px 8px 0px #a0a0a073',

        background: '#ffffff40',

        color: 'black',

        iconGlow: '#e1e3f5',

        selectedCell: {
            color: '#7080e2',
        },

        notSelectedCell: {
            color: '#9faec7',
        },

        cellIndicator: {
            background: '#7080e2',

            boxShadow: '0 0 4px 2px #e1e3f5',
        },
    },
} as ITheme;
