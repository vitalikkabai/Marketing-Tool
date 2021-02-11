import classes from './RoleBoxes.module.scss';
import { Grid } from '@material-ui/core';
import React from 'react';
import RoleBox from './RoleBox/RoleBox';

type PropsType = {
    selectedRole: { id: string; title: string; selected: boolean }[];
    setSelectedRole: React.Dispatch<
        React.SetStateAction<{ id: string; title: string; selected: boolean }[]>
    >;
    displayInRow?: boolean;
    setEdited?: React.Dispatch<React.SetStateAction<boolean>>;
};

const RoleBoxes: React.FC<PropsType> = ({
    selectedRole,
    setSelectedRole,
    displayInRow,
    setEdited,
}) => {
    return (
        <Grid container justify={displayInRow ? 'flex-start' : 'center'}>
            <Grid
                item
                className={classes.roleGridItem}
                xs={displayInRow ? false : 12}
                style={
                    displayInRow
                        ? { paddingBottom: '0' }
                        : { paddingBottom: '24px' }
                }
            >
                <RoleBox
                    roleItem={selectedRole[0]}
                    setSelectedRole={setSelectedRole}
                    setEdited={setEdited}
                />
                <RoleBox
                    roleItem={selectedRole[1]}
                    setSelectedRole={setSelectedRole}
                    setEdited={setEdited}
                />
                <RoleBox
                    roleItem={selectedRole[2]}
                    setSelectedRole={setSelectedRole}
                    setEdited={setEdited}
                />
            </Grid>
            <Grid
                item
                className={classes.roleGridItem}
                xs={displayInRow ? false : 12}
            >
                <RoleBox
                    roleItem={selectedRole[3]}
                    setSelectedRole={setSelectedRole}
                    setEdited={setEdited}
                />
                <RoleBox
                    roleItem={selectedRole[4]}
                    setSelectedRole={setSelectedRole}
                    setEdited={setEdited}
                />
                <RoleBox
                    roleItem={selectedRole[5]}
                    setSelectedRole={setSelectedRole}
                    setEdited={setEdited}
                />
            </Grid>
        </Grid>
    );
};

export default RoleBoxes;
