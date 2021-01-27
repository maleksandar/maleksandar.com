import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '16px',
    pageBreakInside: 'avoid'
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
  },
  avatar: {
    fontSize: '11px'
  },
  cardActions: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  cardHeader: {
    padding: '12px'
  },
  cardContent: {
    padding: '12px'
  },
  expandedCardContent: {
    li: {
      style: 'initial'
    }
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
      <Card className={classes.root} raised={false}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar
            variant="square"
            aria-label="recipe"
            className={classes.avatar}
            src={projectData.employer.avatar.imgSrc}
            style= {{ backgroundColor: projectData.employer.avatar.color }}
            color={projectData.employer.avatar.color}
          >
            {projectData.employer.avatar.text}
          </Avatar>
        }

       title={<span className={classes.projectTitle}>{projectData.timeSpan} | {projectData.title}</span>}
       subheader={projectData.employer.name}
      />

      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textPrimary" component="p">
          {projectData.shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>

        { projectData.technologies && projectData.technologies.length
          ? projectData.technologies.map((t) => <Chip key={t} variant='outlined' size='small' className={classes.chip} label={t}/>)
          : null
        }
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
        <CardContent className={classes.expandedCardContent}>
        <Typography variant="body2" color="textPrimary" component="div">
            <span> <i> Responsibilities: </i> </span>
            <ul>
              {projectData.responsibilities.map((r) => <li key={r}>{r}</li>)}
            </ul>
            {
              projectData.achievements && projectData.achievements.length
                ? (
                  <div>
                    <span> <i> Achievements: </i> </span>
                    <ul>
                      {projectData.achievements.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  </div>
                )
                : null
            }
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Project;
