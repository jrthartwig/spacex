import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    nav: {
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "25px",
        backgroundColor: "#003B73",
        paddingBottom: "25px"
    },
    link: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontFamily: "Helvetica",
        fontSize: "20px"
    }
});

export default useStyles;