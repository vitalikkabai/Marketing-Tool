import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, {FormEvent, useEffect, useState} from "react";
import classes from "./BusinessProfile.module.scss";
import CustomInput from "../../components/common/Input/CustomInput";
import CustomButton from "../../components/common/Button/CustomButton";
import RoleBoxes from "../../components/common/RoleBoxes/RoleBoxes";
import {PropsFromRedux} from "./BusinessProfileContainer";
import WebLink from "../../components/common/webLink/webLink";

const BusinessProfile: React.FunctionComponent<PropsFromRedux> = (props) => {

    const [selectedRole, setSelectedRole] = useState([
        {id: "sales_role", title: "Sales", selected: props.roleTags.sales},
        {id: "marketing_role", title: "Marketing", selected: props.roleTags.marketing},
        {id: "logistic_role", title: "Logistics", selected: props.roleTags.logistics},
        {id: "accounting_role", title: "Accounting", selected: props.roleTags.accounting},
        {id: "production_role", title: "Production", selected: props.roleTags.production},
        {id: "quality_role", title: "QC", selected: props.roleTags.qualityControl},
    ].sort((a, b) => (a.selected < b.selected) ? 1 : ((b.selected < a.selected) ? -1 : 0)));
    // Sorting by selected status

    const [companyName, setCompanyName] = useState(props.business.companyName);
    const [companyNameError, setCompanyNameError] = useState("");
    const [selectedRoleError, setSelectedRoleError] = useState("");
    const [sellingURLs, setSellingURLs] = useState<string[]>(props.business.storeURLs);
    const [webInput, setWebInput] = useState("");
    const [sellingInput, setSellingInput] = useState("");
    const [websiteURLs, setWebsiteURLs] = useState<string[]>(props.business.websiteURLs);
    const [webErrorText, setWebErrorText] = useState("");
    const [storeErrorText, setStoreErrorText] = useState("");
    const [edited, setEdited] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.updateBusinessInDB({
            id: props.business.id as string,
            companyName,
        })
    }

    useEffect(() => {
        setSelectedRoleError("");
    });

    useEffect(() => { // Check that any values do not differ from the analogues in the reducer
        if (companyName !== props.business.companyName ||
            sellingURLs !== props.business.storeURLs ||
            websiteURLs !== props.business.websiteURLs ||
            selectedRole.find(el => el.id === 'sales_role')?.selected !== props.roleTags.sales ||
            selectedRole.find(el => el.id === 'marketing_role')?.selected !== props.roleTags.marketing ||
            selectedRole.find(el => el.id === 'logistic_role')?.selected !== props.roleTags.logistics ||
            selectedRole.find(el => el.id === 'accounting_role')?.selected !== props.roleTags.accounting ||
            selectedRole.find(el => el.id === 'production_role')?.selected !== props.roleTags.production ||
            selectedRole.find(el => el.id === 'quality_role')?.selected !== props.roleTags.qualityControl
        ) {
            setEdited(true)
        } // Set edited mode
        else {
            setEdited(false)
        }
    }, [selectedRole, companyName, sellingURLs, websiteURLs]);

    return (
        <Box className={classes.component}>
            <Box className={classes.headTitle}>
                <Typography variant={"h2"}>Business Profile</Typography>
            </Box>
            <form onSubmit={handleSubmit} className={classes.formContainer}>
                <Grid container className={classes.formContentContainer}>
                    <Grid item container xs={12} className={classes.mainInputGridItem}>
                        <Grid item xs={3}>
                            <CustomInput
                                label="Company Name"
                                placeholder={"Company Name"}
                                fullWidth={true}
                                value={companyName}
                                error={!!companyNameError}
                                variant="outlined"
                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                    setCompanyName(event.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={9} className={classes.saveButton}>
                            <CustomButton type={"submit"} text={"Save"} disabled={!edited}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.roleBoxesGridItem}>
                        <Typography variant={"h6"} className={classes.roleBoxText}>You are in charge of:</Typography>
                        <RoleBoxes selectedRole={selectedRole} setSelectedRole={setSelectedRole} displayInRow/>
                    </Grid>
                    <Grid item container xs={12} justify={"space-between"} className={classes.linkGridItem}>
                        <Grid item xs={6} style={{paddingRight: "24px"}}>
                            <WebLink linkInput={webInput} linkURLs={websiteURLs}
                                     linkErrorText={webErrorText} setLinkInput={setWebInput}
                                     setLinkURLs={setWebsiteURLs}
                                     setLinkErrorText={setWebErrorText}
                                     label={"Website URL address"}
                            />
                        </Grid>
                        <Grid item xs={6} style={{paddingLeft: "24px"}}>
                            <WebLink linkInput={sellingInput} linkURLs={sellingURLs}
                                     linkErrorText={storeErrorText} setLinkInput={setSellingInput}
                                     setLinkURLs={setSellingURLs}
                                     setLinkErrorText={setStoreErrorText}
                                     label={"Store URL address"}/>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default BusinessProfile;