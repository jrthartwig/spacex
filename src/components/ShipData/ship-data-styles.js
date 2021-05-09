import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "25px",
        paddingBottom: "25px",
        paddingLeft: "25px",
        flexDirection: "column"
    },
});

export default useStyles;