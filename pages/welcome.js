import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import Link from 'next/link'


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
    <>
    <div className="indexContainer">
      <div className="row welcomeRow ">
      <Link href="/about">
        <a className="col-4 welcomeIndex p-0 m-0 card indexTag text-success ">
          <img  src="/images/img1.jpg" style={{height:"100%"}} className="card-img m-0 "/>
          <div className="card-img-overlay d-flex justify-content-center">
            <div className="align-self-center">About Me</div>
          </div>
        </a>
      </Link>
      <Link href="/projects" >
        <a className="col-4 welcomeIndex p-0 m-0 card indexTag text-warning">
          <img  src="/images/curlybraces.png" style={{height:"100%"}} className="card-img m-0 "/>
          <div className="card-img-overlay d-flex justify-content-center">
            <div className="align-self-center">Projects</div>
          </div>
        </a>
      </Link>
      <Link href="/blog">
        <a className="col-4 welcomeIndex p-0 m-0 card indexTag text-primary ">
          <img  src="/images/typewriter.jpg" style={{height:"100%"}} className="imgOpacity card-img m-0  "/>
          <div className="card-img-overlay d-flex justify-content-center">
            <div className="align-self-center">Blog</div>
          </div>
        </a>
      </Link>
      </div>
    </div>
    <div className="row footer justify-content-center">
      <div className="col-4  footerPartition">
        Social Media
      </div>
      <div className="col-4 footerPartition">
        Github
      </div>
      <div className="col-4 footerPartition">
        Email API
      </div>
    </div>
    </>
  );
}

