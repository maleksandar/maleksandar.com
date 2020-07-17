import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

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
  },
  avatar: {
    backgroundColor: '#925fa7',
    fontSize: '11px'
  },
  cardActions: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  cardHeader: {
    padding: '8px'
  },
  cardContent: {
    padding: '8px'
  },
  chip: {
    marginBottom: '2px',
    marginRight: '2px'
  },
  projectTitle: {
    fontWeight: 500
  }
}));

const Project = ({ projectData }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
      <Card className={classes.root} raised={true}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar
            variant="square"
            aria-label="recipe"
            className={classes.avatar}
          >
            zühlke
          </Avatar>
        }

        title={<span className={classes.projectTitle}>[{projectData.timeSpan}] - {projectData.title}</span>}
       subheader={projectData.employer}
      />

      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textPrimary" component="p">
          {projectData.shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>

      {projectData.technologies.map((t) => <Chip key={t} size='small' className={classes.chip} label={t}/>)}
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ul> 
            <li> 1</li>
            <li> 2</li>
            <li> 3</li>

          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
};
// <div>
//     <p>
//        <b>{projectData.timeSpan}</b>, <i>{projectData.positionTitle}, {projectData.employer}</i>
//     </p>
//     <p>
//         {projectData.shortDescription}
//     </p>

//     <p>Responsibilities:</p>
//     <ul>
//         {projectData.responsibilities.map((r) => (<li key={r}>{r}</li>))}
//     </ul>

//     <p>Achievements:</p>
//     <ul>
//         {projectData.achievements.map((a) => (<li key={a}>{a}</li>))}
//     </ul>

//     <p>Technologies:</p>
//         {projectData.technologies.map((t) => (<span key={t}>{t}, </span>))}

// </div>

export default Project;
