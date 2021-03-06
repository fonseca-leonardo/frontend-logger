interface ThemedElement {
    background?: string;
    boxShadow?: string;
    color?: string;
    borderColor?: string;
}

interface ThemedSideMenu {
    background?: string;
    boxShadow?: string;
    color?: string;
    selectedCell: ThemedElement;
    notSelectedCell: ThemedElement;
    cellIndicator: ThemedElement;
    iconGlow: string;
}

interface ThemeCard extends ThemedElement {
    solidBackground: any;
}

interface ITheme {
    name: 'dark' | 'light';
    gradient: string[];
    background: string;
    lightColor: string;
    darkColor: string;
    mutedColor: string;
    fontColor: string;
    boxShadow: string;
    spinnerColor: string;
    successColor: string;
    warningColor: string;
    infoColor: string;
    errorColor: string;
    thumbColor: string;
    optionColor: string;
    optionArrowColor: string;
    card: ThemeCard;
    input: ThemedElement;
    sideMenu: ThemedSideMenu;
    button: ThemedElement;
    ghostButton: ThemedElement;
}

export default ITheme;
