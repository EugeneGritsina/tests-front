import React from 'react';

import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    loader: {
        position: "absolute",
        top: '50%',
        transform: 'translate(0, 50%)',
    },
});

function Loader() {
    const styles = useStyles();
    return (
        <CircularProgress
            className={styles.loader}
        />
    );
}

export default Loader;  