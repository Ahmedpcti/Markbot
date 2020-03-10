import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GoogleFontLoader from "react-google-font-loader";
import Button from "@material-ui/core/Button";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import svgArr from "../svgs";
import svgArr1 from "../Travelsvgs";

const handwritingFonts = [
  "Permanent Marker",
  "Amatic SC",
  "Pacifico",
  "Dancing Script",
  "Sacramento",
  "Just Another Hand",
  "Berkshire Swash",
  "Niconne",
  "Yesteryear"
];
const serifFonts = [
  "Spartan",
  "Trade Winds",
  "Anton",
  "Niconne",
  "Fjalla One",
  "Fredoka One",
  "Luckiest Guy",
  "Sigmar One",
  "Satisfy"
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 200,
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
    webkitBoxShadow: "3px 3px 3px #7b7b7b",
    mozBoxShadow: "3px 3px 3px #7b7b7b",
    boxShadow: "3px 3px 3px #7b7b7b"
  },
  control: {
    padding: theme.spacing(2)
  },
  h2: {},
  button: {}
}));

export default function SpacingGrid(props) {
  const classes = useStyles();
  const download = React.useRef();

  return (
    <Grid container className={classes.root} spacing={2}>
      <GoogleFontLoader
        fonts={[
          {
            font: "Permanent Marker"
          },
          {
            font: "Amatic SC"
          },
          {
            font: "Pacifico"
          },
          {
            font: "Dancing Script"
          },
          {
            font: "Sacramento"
          },
          {
            font: "Just Another Hand"
          },
          {
            font: "Berkshire Swash"
          },
          {
            font: "Niconne"
          },
          {
            font: "Yesteryear"
          },
          {
            font: "Niconne"
          },
          
          {
            font: "Spartan"
          },
          {
            font: "Trade Winds"
          },
          {
            font: "Anton"
          },
          {
            font: "Niconne"
          },
          {
            font: "Fjalla One"
          },
          {
            font: "Fredoka One"
          },
          {
            font: "Luckiest Guy"
          },
          {
            font: "Sigmar One"
          },
          {
            font: "Satisfy"
          }
          

        ]}
      />
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {props.arr.map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div
                  ref={download}
                  style={props.align == "Left"? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  } : {}}
                >
                  <img style={{ width:"80px",height:"80px"}} src={
                    props.businessType == "Food"
                          ? svgArr[value]
                          : svgArr1[value]
                    } />

            

                  <h2 
                    className={classes.h2}
                    style={{
                      fontFamily:
                        props.businessType == "Food"
                          ? handwritingFonts[value]
                          : serifFonts[value],
                      color: props.color
                    }}
                  >
                    {props.businessName}
                  </h2>
                </div>
                <Button
                  onClick={event => {
                    let id = download.current;
                    console.log(id);
                    domtoimage
                      .toBlob(id)
                      .then(function(blob) {
                        saveAs(blob, "my-node.png");
                      })
                      .catch(function(error) {
                        console.error("oops, something went wrong!", error);
                      });
                  }}
                  className={classes.button}
                >
                  <SystemUpdateAltIcon />
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
