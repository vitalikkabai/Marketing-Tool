import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { API, graphqlOperation, Storage } from "aws-amplify";
import React from "react";
import { updateProfile } from "../../graphql/mutations";
import AvatarSelector from "./AvatarSelector/AvatarSelector";
import classes from "./PersonalProfile.module.scss";
import config from '../../aws-exports'
import { AppStateType } from "../../store/store";
import { connect } from "react-redux";
import { UserAttributes } from "../../store/Auth/AuthReducer";


const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config

interface PropType {
    userAttributes: UserAttributes
}

const PersonalProfile: React.FunctionComponent<PropType> = (props) => {

    const saveImage = async (imageBase64: string) => {
        console.log(props)

        const base64Data = new Buffer(imageBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        console.log(base64Data)
        const key = `images/${props.userAttributes.userID}_avatar.png`

        const fileForUpload = {
            bucket,
            key,
            region,
        }
        const inputData = { avatar: fileForUpload }
        try {
            await Storage.put(key, base64Data, {
                contentType: 'image/png',
                contentEncoding: 'base64'
            })
            await API.graphql(graphqlOperation(updateProfile, { input: inputData }))
            console.log('successfully stored user data!')
        } catch (err) {
            console.log('error: ', err)
        }

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
            userAttributes: state.AuthReducer.userAttributes
        }
    }

export default connect(mapStateToProps)(PersonalProfile);