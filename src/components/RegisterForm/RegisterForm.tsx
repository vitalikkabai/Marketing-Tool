import React, {useState} from "react";
import {Button, Grid, Link, Typography, Box, FormControl, MenuItem} from "@material-ui/core";
import classes from "./RegisterForm.module.scss";
import {useHistory} from "react-router";
import {FormContainerType} from './RegisterFormContainer';
import CustomInput from "../common/Input/CustomInput";
import CustomSelect from "../common/Select/CustomSelect";
import GoBackButton from "../common/Button/GoBackButton";
import plusIcon from "../../assets/images/formPlus.svg"
import UxAssistant from "./UxAssistant";


const RegisterForm: React.FunctionComponent<FormContainerType> = (props) => {
    const history = useHistory();
    const [hasExperienceSelling, setHasExperienceSelling] = useState(props.haveExperienceSelling);
    const [sellingURLs, setSellingURLs] = useState<string[]>(props.storeURLs);

    const [hasWebsite, setHasWebsite] = useState(props.haveWebsite);
    const [websiteURLs, setWebsiteURLs] = useState<string[]>(props.websiteURLs);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setStepOne({
            haveExperienceSelling: hasExperienceSelling,
            storeURLs: sellingURLs,
            haveWebsite: hasWebsite,
            websiteURLs
        });
        history.push("register/2")
    }

    return (
        <Grid container justify="center" alignItems={"center"}>
            <Grid container direction="column" justify="center" className={classes.registerForm}>
                <Box className={classes.registrationSheet}>
                    <GoBackButton onClick={() => {
                        history.push("login")
                    }}/>
                    <UxAssistant assistantText={"Hey there, I’m Vika:)\nLet’s get started"} stepNumber={1}/>
                    <Grid item container alignItems={"center"} justify={"center"} className={classes.formContainer}>
                        <Grid container item xs={10} direction={"column"} className={classes.formText}>
                            <form onSubmit={handleSubmit}>
                                <Grid item xs={12}>
                                    <Typography variant={"h6"}>Do you already have a website?</Typography>
                                    <Box className={classes.inputBox}>
                                        <Box>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <CustomSelect
                                                    value={hasWebsite ? 1 : 0}
                                                    onChange={(e: any) => setHasWebsite(!!e.target.value)}
                                                    items={[<MenuItem key={'menu_1_1'} value={0}>No</MenuItem>,
                                                        <MenuItem key={'menu_1_2'} value={1}>Yes</MenuItem>]}
                                                />
                                            </FormControl>
                                        </Box>

                                        {
                                            hasWebsite ?
                                                sellingURLs.map((URL, index) => (
                                                    <CustomInput
                                                        type="text"
                                                        key={index}
                                                        fullWidth={true}
                                                        name="Website URL address"
                                                        placeholder="Website URL address"
                                                        label="Website URL address"
                                                        value={URL}
                                                        onChange={(event: any) =>
                                                            setSellingURLs((prevURLs) => {
                                                                const newURLs = [...prevURLs];
                                                                newURLs[index] = event.target.value;
                                                                return newURLs;
                                                            })
                                                        }
                                                        required
                                                        autoFocus
                                                    />
                                                ))
                                                :
                                                <Typography variant={"h6"}>We will get you there in 3 steps</Typography>
                                        }
                                        {
                                            hasWebsite ?
                                                <img className={classes.plusIcon} src={plusIcon} alt={"plus"}/> : null
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
                                        {
                                            hasExperienceSelling ?
                                                websiteURLs.map((URL, index) => (
                                                    <CustomInput
                                                        type="text"
                                                        key={index}
                                                        name="Website URL address"
                                                        value={URL}
                                                        placeholder="Store URL address"
                                                        label="Store URL address"
                                                        fullWidth={true}
                                                        onChange={(event: any) =>
                                                            setWebsiteURLs((prevURLs) => {
                                                                const newURLs = [...prevURLs];
                                                                newURLs[index] = event.target.value;
                                                                return newURLs;
                                                            })
                                                        }
                                                        required
                                                        autoFocus
                                                    />
                                                ))
                                                : <Typography variant={"h6"}>Don’t worry, you will be there in no
                                                    time:)</Typography>
                                        }
                                        {
                                            hasExperienceSelling ?
                                                <img className={classes.plusIcon} src={plusIcon} alt={"plus"}/> : null
                                        }
                                    </Box>
                                </Grid>
                                <Grid item className={classes.nextContainer}>
                                    <Button variant="contained" color="primary"
                                            type="submit" className={classes.buttonBlock}>
                                        NEXT
                                    </Button>
                                    <Typography variant={"subtitle1"}>Have an account already?&nbsp;
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

export default RegisterForm;