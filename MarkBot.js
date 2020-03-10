import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Background from "../images/header-bg.png";
import LogoMain from "../images/latestlogo.png";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import LogoGrid from "../Components/LogoGrid";
import ColorPicker from "material-ui-color-picker";
import { SliderPicker } from "react-color";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%"
  },
  back: {
    display: "flex",
    alignItems: "center"
  },
  sidepanel: {
    display: "flex",
    "& > *": {
      padding: theme.spacing(2),
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(20),
      marginLeft: theme.spacing(6),
      opacity: 0.9,
      borderRadius: 15,
      webkitBoxShadow: "3px 3px 3px #7b7b7b",
      mozBoxShadow: "3px 3px 3px #7b7b7b",
      boxShadow: "3px 3px 3px #7b7b7b"
    }
  },
  button: {
    marginTop: theme.spacing(5),
    background: "#fba808"
  },
  control: {
    marginTop: theme.spacing(5),

    padding: theme.spacing(2)
  },
  grid: {
    marginTop: theme.spacing(20)
  },
  businessType: {
    marginTop: theme.spacing(2)
  },
  amount: {
    marginTop: theme.spacing(2)
  },
  header: {
    position: "absolute",
    top: 0,
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4.5)
  }
}));

const categoryList = ["Food", "Travel"];
const alignment = ["Top", "Left"];


function MainForm() {
  const classes = useStyles();
  const [Amount, setAmount] = React.useState(2);
  const [arr, setArr] = React.useState([1, 2]);
  const [businessName, setBusinessName] = React.useState("Ginyaki");
  const [businessType, setBusinessType] = React.useState("Food");
  const [color, setColor] = React.useState("#EC0B0B");
  const [align, setAlign] = React.useState(alignment[1]) 
  React.useEffect(() => {
    if (businessType == "Food") {
      setColor("#EC0B0B");
    } else {
      setColor("#4640BF");
    }
  }, [businessType]);

  const handleAmount = event => {
    setAmount(Number(event.target.value));
    let arr = [];
    for (var i = 0; i < event.target.value; i++) {
      arr.push(i);
    }
    setArr(arr);
  };
  const handleType = event => {
    setBusinessType(event.target.value);
    if (event.target.value == "Food") {
      setColor("#EC0B0B");
    } else {
      setColor("#000000");
    }
  };
  const handleAlign = event => {
    setAlign(event.target.value);
   
  };
  return (
    <div className={classes.back}>
      <div className={classes.header}>
        <img src={LogoMain} width={350} height={100} />
      </div>
      <div className={classes.sidepanel}>
        <Paper variant="outlined">
          <h2>
            Your Business Details
          </h2>
          <Grid>
            <br></br>
            
            <Grid item xs={9}>
              <TextField
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                required
                id="businessname"
                name="businessname"
                label="Business Name"
                fullWidth
                autoComplete="fname"
              />
            </Grid>
            <Grid item xs={12} className={classes.amount}>
              <Grid container>
                <Grid item>
                  <FormLabel>Business Type</FormLabel>
                  <RadioGroup
                    name="Type"
                    aria-label="Type"
                    value={businessType}
                    onChange={handleType}
                    row
                  >
                    {categoryList.map(value => (
                      <FormControlLabel
                        key={value}
                        value={value}
                        control={<Radio />}
                        label={value}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.amount}>
              <Grid container>
                <Grid item>
                  <FormLabel>Icon Alignment</FormLabel>
                  <RadioGroup
                    name="Type"
                    aria-label="Type"
                    value={align}
                    onChange={handleAlign}
                    row
                  >
                    {alignment.map(value => (
                      <FormControlLabel
                        key={value}
                        value={value}
                        control={<Radio />}
                        label={value}
                      />
                    ))}
                  </RadioGroup>
                  <br></br>
                  <h3>Color Picker</h3>
                  <Typography>*AI suggested color is set by default.</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.businessType}>
              <ColorPicker
                label="Color Edit"
                name="color"
                value={color}
                onChange={color => setColor(color)}
              />
            </Grid>
            <Grid item xs={12} className={classes.businessType}>
              <div style={{ width: 200 }}>
                <SliderPicker color={color} onChange={(color) => setColor(color.hex)}/>
                <br></br>
              </div>
            </Grid>
          </Grid>

          <Grid item xs={9}>
            <Grid container>
              <Grid item>
                <FormLabel>Amount</FormLabel>
                <RadioGroup
                  name="Amount"
                  aria-label="Amount"
                  value={Amount.toString()}
                  onChange={handleAmount}
                  row
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <LogoGrid
        className={classes.grid}
        arr={arr}
        businessName={businessName}
        businessType={businessType}
        color={color}
        align={align}
      />
    </div>
  );
}

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <MainForm />
      {/* <h1>Target Audience:</h1> */}

    </div>
  );
}
