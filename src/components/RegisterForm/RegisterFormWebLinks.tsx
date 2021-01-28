import React, {useState} from "react";
import {Grid, Link, Typography, Box, FormControl, MenuItem, Chip} from "@material-ui/core";
import classes from "./RegisterForm.module.scss";
import {useHistory} from "react-router";
import {FormContainerType} from './RegisterFormWebLinksContainer';
import CustomInput from "../common/Input/CustomInput";
import CustomSelect from "../common/Select/CustomSelect";
import GoBackButton from "../common/Button/GoBackButton";
import plusIcon from "../../assets/images/formPlus.svg"
import UxAssistant from "./UxAssistant";
import CustomButton from "../common/Button/CustomButton";
import {isValidUrl} from "../../utils/validators/validators";


const RegisterFormWebLinks: React.FunctionComponent<FormContainerType> = (props) => {
    const history = useHistory();
    const [hasExperienceSelling, setHasExperienceSelling] = useState(true);
    const [sellingURLs, setSellingURLs] = useState<string[]>(props.storeURLs);
    const [webInput, setWebInput] = useState("");
    const [sellingInput, setSellingInput] = useState("");
    const [hasWebsite, setHasWebsite] = useState(true);
    const [websiteURLs, setWebsiteURLs] = useState<string[]>(props.websiteURLs);
    const [webErrorText, setWebErrorText] = useState("");
    const [storeErrorText, setStoreErrorText] = useState("");


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setWebErrorText("");
        setStoreErrorText("")//hasWebsite && websiteURLs.length > 0
        if(hasWebsite && websiteURLs.length === 0) {
            setWebErrorText("Enter at least one URL")
            return;
        }
        if(hasExperienceSelling && sellingURLs.length === 0) {
            setStoreErrorText("Enter at least one URL")
            return;
        }
        else {
            props.setBusinessUrls(
                sellingURLs,
                websiteURLs
            );
            history.push("register/2")
        }
    }


    return (
        <Grid container justify="center" alignItems={"center"}>
            <Grid container direction="column" justify="center" className={classes.registerForm}>
                <Box className={classes.registrationSheet} >
                    <GoBackButton onClick={() => {
                        history.push("login")
                    }}/>
                    <UxAssistant assistantText={"Hey there, I’m Vika:)"} stepNumber={1}/>
                    <Grid item container alignItems={"center"} justify={"center"} className={classes.formContainer}>
                        <Grid container item direction={"column"} className={classes.formText}>
                            <form onSubmit={handleSubmit}>
                                <Grid item xs={12}>
                                    <Typography variant={"h6"}>Do you already have a website?</Typography>
                                    <Box className={classes.inputBox}>
                                        <Box>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <CustomSelect
                                                    value={hasWebsite ? 1 : 0}
                                                    onChange={(e: any) => {
                                                        setHasWebsite(!!e.target.value);
                                                        setWebErrorText("")
                                                    }}
                                                    items={[<MenuItem key={'menu_1_1'} value={0}>No</MenuItem>,
                                                        <MenuItem key={'menu_1_2'} value={1}>Yes</MenuItem>]}
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box className={classes.inputContainer}>
                                            {
                                                hasWebsite ?
                                                    <>
                                                        <CustomInput
                                                            type="text"
                                                            fullWidth={true}
                                                            name="Website URL address"
                                                            placeholder="Website URL address"
                                                            label="Website URL address"
                                                            value={webInput}
                                                            error={!!webErrorText}
                                                            onChange={(event: any) =>{
                                                                setWebErrorText("");
                                                                setWebInput(event.target.value);
                                                            }
                                                            }
                                                            paddingRight={35}
                                                            autoFocus={true}
                                                        />
                                                            {
                                                                websiteURLs.map((URL, index) => (
                                                                    <Chip key={index} className={classes.chip} label={URL} onDelete={()=>{
                                                                        setWebsiteURLs(websiteURLs.filter(((item, i) => i !== index)))
                                                                    }} color="primary" variant="outlined" />
                                                                ))
                                                            }
                                                    </>
                                                    :
                                                    <Box className={classes.selectTextBox}
                                                         style={{background: "#EE6B1D"}}>
                                                        <Typography variant={"h6"}>
                                                            We will get you there in 3 steps
                                                        </Typography>
                                                    </Box>
                                            }
                                        </Box>
                                        {
                                            hasWebsite ?
                                                <img className={classes.plusIcon} src={plusIcon} alt={"plus"}
                                                     onClick={() => {
                                                         if(isValidUrl(webInput)){
                                                             setWebsiteURLs(oldArray => [...oldArray, webInput]);
                                                             setWebInput("");
                                                         }
                                                         else {setWebErrorText("Please enter valid URL")}
                                                     }}/> : null
                                        }
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.formSecondTitle}>
                                    <Typography variant={"h6"}>Do you already have an experience selling
                                        online?</Typography>
                                    <Box className={classes.inputBox}>
                                        <Box>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <CustomSelect
                                                    value={hasExperienceSelling ? 1 : 0}
                                                    onChange={(e: any) => setHasExperienceSelling(!!e.target.value)}
                                                    items={[<MenuItem key={'menu_2_1'} value={0}>No</MenuItem>,
                                                        <MenuItem key={'menu_2_2'} value={1}>Yes</MenuItem>]}
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box className={classes.inputContainer}>
                                            {
                                                hasExperienceSelling ?
                                                    <>
                                                        <CustomInput
                                                            type="text"
                                                            fullWidth={true}
                                                            name="Website URL address"
                                                            placeholder="Store URL address"
                                                            label="Store URL address"
                                                            value={sellingInput}
                                                            error={!!storeErrorText}
                                                            onChange={(event: any) => {
                                                                setSellingInput(event.target.value)
                                                                setStoreErrorText("");
                                                            }
                                                            }
                                                            paddingRight={35}
                                                        />
                                                        {
                                                            sellingURLs.map((URL, index) => (
                                                                <Chip key={index} className={classes.chip} label={URL} onDelete={()=>{
                                                                    setSellingURLs(sellingURLs.filter(((item, i) => i !== index)))
                                                                }} color="primary" variant="outlined" />
                                                            ))
                                                        }
                                                    </>
                                                    :
                                                    <Box className={classes.selectTextBox}
                                                         style={{background: "#43A047"}}>
                                                        <Typography variant={"h6"}>
                                                            Don’t worry, you will be there in no time:)
                                                        </Typography>
                                                    </Box>

                                            }
                                        </Box>
                                        {
                                            hasExperienceSelling ?
                                                <img className={classes.plusIcon} src={plusIcon} alt={"plus"}
                                                     onClick={() => {
                                                         if(sellingInput.replace(/\s/g, '')){
                                                             setSellingURLs(oldArray => [...oldArray, sellingInput]);
                                                             setSellingInput("");
                                                         }
                                                     }}/> : null
                                        }
                                    </Box>
                                </Grid>
                                <Grid item className={classes.errorText}>
                                    <Typography variant={"subtitle1"}>
                                        {webErrorText?webErrorText:storeErrorText}
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.nextContainer + " " + classes.webLinks}>
                                    <CustomButton type={"submit"} className={classes.buttonBlock} text={"Next"}/>
                                    <Typography variant={"subtitle1"} >Have an account already?&nbsp;
                                        <Link className={classes.link} onClick={() => {
                                            history.push("login")
                                        }}>Log in</Link>
                                    </Typography>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default RegisterFormWebLinks;