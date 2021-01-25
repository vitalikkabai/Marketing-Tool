import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { API, graphqlOperation, Storage } from "aws-amplify";
import React, { useEffect } from "react";
import { updateProfile } from "../../graphql/mutations";
import AvatarSelector from "./AvatarSelector/AvatarSelector";
import classes from "./PersonalProfile.module.scss";
import config from '../../aws-exports'
import { AppStateType } from "../../store/store";
import { connect, ConnectedProps } from "react-redux";
import { UserAttributes } from "../../store/Auth/AuthReducer";
import { getProfile, listProfiles, profileByOwner } from "../../graphql/queries";
import { Dispatch } from "redux";
import { Profile, S3Object } from "../../models";
import { saveProfileImage } from "../../store/Profile/ProfileActions";


const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const PersonalProfile: React.FunctionComponent<PropsFromRedux> = (props) => {

    const saveImage = async (imageBase64: string) => {
        // console.log(props)

        const base64Data = new Buffer(imageBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        console.log(base64Data)
        const key = `images/${props.profile.owner}_avatar.png`

        const fileForUpload = {
            bucket,
            key,
            region,
        }
        // const inputData = { avatar: fileForUpload }
        props.saveProfileImage(fileForUpload, base64Data)
        // try {
        //     await 
        //     console.log('successfully stored user data!')
        // } catch (err) {
        //     console.log('error: ', err)
        // }

    }

    return (
        <Grid container className={classes.component}>
            <Grid xs={6}>
                <Typography variant="h2">Personal Profile</Typography>
                <Box className={classes.contentContainer}></Box>
            </Grid>
            <Grid xs={6}>
                <Typography variant="h2">Personal Profile</Typography>
                <Box className={classes.contentContainer}></Box>
            </Grid>
            <Grid xs={6}>
                <Typography variant="h2">Personal Profile</Typography>
                <Box className={classes.contentContainer}></Box>
            </Grid>
            <Grid xs={6}>
                <Typography variant="h2">Upload Photo</Typography>
                <Box className={classes.contentContainer}>
                    <AvatarSelector saveImage={saveImage} />
                </Box>
            </Grid>
        </Grid>
    );
}
function mapStateToProps(state: AppStateType) {
    return {
        profile: state.ProfileReducer.profile
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        saveProfileImage: (s3: S3Object, bufferImg: Buffer) => dispatch(saveProfileImage(s3,bufferImg))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PersonalProfile);