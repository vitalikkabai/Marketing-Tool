import Box from '@material-ui/core/Box';
import React from 'react';
import Avatar from 'react-avatar-edit';
import CustomButton from '../../../components/common/Button/CustomButton';

interface PropTypes {
    saveImage: (imageBase64: string) => void;
}

const AvatarSelector: React.FunctionComponent<PropTypes> = (props) => {
    const [imageCropped, setImageCropped] = React.useState<string>();

    const onClose = () => {
        setImageCropped(undefined);
    };

    const onCrop = (preview: string) => {
        setImageCropped(preview);
    };

    const saveImage = () => {
        if (!imageCropped) return;
        props.saveImage(imageCropped);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
                width={390}
                height={295}
                onCrop={onCrop}
                onClose={onClose}
            />
            <Box width="100%" height="24px" />
            <CustomButton
                type="button"
                text="save"
                disabled={!imageCropped}
                onClick={saveImage}
            />
        </Box>
    );
};

export default AvatarSelector;
