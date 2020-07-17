import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345
    marginBottom: '16px'
  },
  media: {
    height: 0,
    // paddingTop: '56.25%' // 16:9
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
const Filter = () => {
  const a = 1;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    document.querySelectorAll(`button[aria-label="show more"][aria-expanded="${expanded}"]`).forEach((b) => b.click())
  };
  return (
    <div>
      { expanded ? 'collapse' : 'expand' }
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