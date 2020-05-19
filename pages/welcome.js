import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import Link from 'next/link'
import {Card, Grid, Column, Row, Text} from 'react-ui'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  text:{
      fontSize:10,
  }
}));


export default function Welcome() {
  const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid rowGap={3}>
    <Row css={{height: "25vmax", backgroundColor: "#540071"}} className="indexTag" >
    <Column start={1} end={12} className="text-center align-self-center">
    <Link href="/about"  >
        <a  >
        <Text size={10}> About Me</Text>
        </a>
    </Link>
    </Column>
    </Row>
    <Row css={{height: "25vmax", backgroundColor: "#540071"}} className="indexTag" >
    <Column start={1} end={12} className="text-center align-self-center">
    <Link href="/projects"  >
        <a  >
         <Text size={10}> Projects Stats</Text>
        </a>
    </Link>
    </Column>
    </Row>
    <Row css={{height: "25vmax", backgroundColor: "#540071"}} className="indexTag" >
    <Column start={1} end={12} className="text-center align-self-center">
    <Link href="/blog"  >
        <a  >
        <Text size={10}> My Blog</Text>
        </a>
    </Link>
    </Column>
    </Row>
    <Row css={{height:"25vmax"}}>
      <Column start={1} end={4} className="text-center  align-self-center">
        <span className="fa fa-info-circle fa-4x iconColor" style={{color:"#F0F0F2"}}></span>
      </Column>
      <Column start={5} end={8} className="text-center align-self-center">
        <span className="fa fa-github fa-4x " style={{color:"#F0F0F2"}} ></span>
      </Column>
      <Column start={9} end={12} className="text-center align-self-center">
        <span className="fa fa-envelope fa-4x iconColor" style={{color:"#F0F0F2"}}></span>
      </Column>
    </Row>
    </Grid>
  );
}

