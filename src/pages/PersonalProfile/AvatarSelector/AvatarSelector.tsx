import Box from "@material-ui/core/Box"
import React from "react"
import Avatar from "react-avatar-edit";
import CustomButton from "../../../components/common/Button/CustomButton";


interface PropTypes {
    saveImage: (imageBase64: string) => void
}

const AvatarSelector: React.FunctionComponent<PropTypes> = (props) => {

    const [imageCropped, setImageCropped] = React.useState<string>();

    const onClose = () => {
        setImageCropped(undefined);
    }

    const onCrop = (preview: string) => {
        setImageCropped(preview);
    }

    const saveImage = () => {
        if (!imageCropped) return;
        props.saveImage(imageCropped)
    }

    return (
        <Box>
            <Avatar
                width={390}
                height={295}
                onCrop={onCrop}
                onClose={onClose}
            />
            <CustomButton type="button" text="save" disabled={!imageCropped} onClick={saveImage}/>
        </Box>
    )

}

export default AvatarSelector