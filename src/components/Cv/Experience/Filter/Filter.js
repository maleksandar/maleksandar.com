import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Filter.module.scss';

const Filter = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: '16px'
    },
    media: {
      height: 0,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    }
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    document.querySelectorAll(`button[aria-label="show more"][aria-expanded="${expanded}"]`).forEach((b) => b.click());
  };
  return (
    <div className={styles['root']}
      onClick={handleExpandClick}
    >
      { expanded ? <i>collapse all</i> : <i>expand all</i> }
      <IconButton size='small'
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
      </IconButton>
    </div>
  );
};

export default Filter;