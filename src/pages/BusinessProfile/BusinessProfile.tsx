import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { FormEvent, useEffect, useState } from "react";
import classes from "./BusinessProfile.module.scss";
import { AppStateType } from "../../store/store";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { Business, Profile, RoleTags, S3Object } from "../../models";
import { saveProfileImage } from "../../store/Profile/ProfileActions";
import CustomInput from "../../components/common/Input/CustomInput";
import { changePassword, changePersonalInfo } from "../../store/Auth/AuthActions";
import RoleBoxes from "../../components/common/RoleBoxes/RoleBoxes";
import CustomButton from "../../components/common/Button/CustomButton";
import { updateBusinessInDB } from "../../store/Business/BusinessActions";
import { UpdateBusinessInput } from "../../API";

const PersonalProfile: React.FunctionComponent<PropsFromRedux> = (props) => {

    const roleTagsToSelectedRole = (roleTags: RoleTags|undefined):boolean[] => {
        return roleTags ? [
            roleTags.sales,
            roleTags.marketing,
            roleTags.logistics,
            roleTags.accounting,
            roleTags.production,
            roleTags.qualityControl
        ] : [false,false,false,false,false,false]
    }

    const [selectedRole, setSelectedRole] = useState(roleTagsToSelectedRole(props.profile.roleTags));
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.updateBusinessInDB({
            id: props.business.id as string,
            companyName,
            // roleTags: {
            //     Sales: selectedRole[0],
            //     Marketing: selectedRole[1],
            //     Logistics: selectedRole[2],
            //     Accounting: selectedRole[3],
            //     Production: selectedRole[4],
            //     QC: selectedRole[5],
            // }
        })
        // console.log(oldPassword, newPassword, retypePassword);
        // props.changePassword(oldPassword, newPassword, changePasswordSuccessCallback);
    }
    const [companyName, setCompanyName] = useState(props.business.companyName)
    // const [email, setEmail] = useState(props.profile.email)

    useEffect(() => {
        setCompanyName(props.business.companyName);
        setSelectedRole(roleTagsToSelectedRole(props.profile.roleTags));
    }, [props.business])

    // const handleInfoUpdate = (e: FormEvent) => {
    //     e.preventDefault();
    //     // props.changePersonalInfo(name, email);
    // }

    return (
        <Box className={classes.component}>
            <Typography variant={"h2"}>Business Profile</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container className={classes.contentContainer}>
                    <Grid item xs={6}>
                        <Box >

                            <CustomInput
                                label="Company Name"
                                variant="outlined"
                                placeholder={"Name"}
                                fullWidth={true}
                                value={companyName}
                                // error={inputValue.ownerName.error}
                                margin={"0 0 16px 0"}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setCompanyName(event.target.value)
                                }
                            />
                            
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <RoleBoxes selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
                    </Grid>
                    <Grid item xs={6}>
                        3
                    </Grid>
                    <Grid item xs={6}>
                        4
                    </Grid>
                    <Grid item xs={12}>
                            <CustomButton type='submit' text="Edit" />
                    </Grid>
                </Grid>
            </form>
        </Box >

    );
}
function mapStateToProps(state: AppStateType) {
    return {
        profile: state.ProfileReducer,
        business: state.BusinessReducer
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        updateBusinessInDB: (business:UpdateBusinessInput) => dispatch(updateBusinessInDB(business))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PersonalProfile);