import ITheme from '../../interfaces/ITheme';

export default {
    background: 'linear-gradient(37deg, #2d354a, #352e36)',
    fontColor: '#e2e2e2',
    gradient: ['#934bea', '#c147c1', '#f64294'],
    boxShadow: '0 0 40px 3px #00000073',
    lightColor: '#ffffff0d',
    darkColor: '#00000026',
    mutedColor: '#acabad',
    spinnerColor: '#fff',
    thumbColor: '#524d4d',
    optionColor: '#352e36',
    optionArrowColor: 'white',

    successColor: '#43a047',
    warningColor: '#ff9800',
    errorColor: '#d32f2f',
    infoColor: '#2f8fd3',

    ghostButton: {
        background: 'black',
    },
    button: {
        boxShadow: '0 0 40px 3px #00000073;',
        background: '#934bea',
    },
    card: {
        boxShadow: '2px 2px 4px 0px #00000073;',
        background: '#0000006b',
        solidBackground: '#1d1e25',
    },
    input: {
        color: '#dbdbdb',
        background: '#00000087',
        borderColor: '#a0a0a073',
    },
    sideMenu: {
        iconGlow: 'white',
        boxShadow: '0 0 40px 3px #00000073',
        background: '#00000066',
        color: 'white',
        selectedCell: {
            color: '#fafafa',
        },
        notSelectedCell: {
            color: '#79839c',
        },
        cellIndicator: {
            background: '#efefef',
            boxShadow: '0 0 4px 2px #3a3a3a',
        },
    },
} as ITheme;
