import Head from 'next/head'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {flexbox} from '@material-ui/system'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link'



const images = [
    {
        url: 'images/img1.jpg',
        title: '1',
        width: '40%',
      },
      {
        url: 'images/img2.jpg',
        title: '2',
        width: '40%',
      },
      {
        url: 'images/img3.jpg',
        title: '3',
        width: '40%',
      },
];

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));
  
export default function Test(){
    const classes = useStyles();
    return(
        <div className="indexContainer">
            <div className="row ">
                <div className="col-4 welcomeIndex p-0 m-0 indexTag">
                    <Link href="/"><a><img src="/images/img1.jpg" style={{height:"100%"}} /></a></Link>
                </div>
                <div className="col-4 welcomeIndex p-0 m-0 indexTag">
                    <Link href="/"><a><img src="/images/img1.jpg" style={{height:"100%"}} /></a></Link>
                </div>
                <div className="col-4 welcomeIndex p-0 m-0 indexTag">
                    <Link href="/"><a><img src="/images/img1.jpg" style={{height:"100%"}} /></a></Link>
                </div>
            </div>
        </div>
        
        
    )
}