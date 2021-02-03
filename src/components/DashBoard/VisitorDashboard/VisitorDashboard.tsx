import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import classes from './VisitorDashboard.module.scss';
import team1 from "../../../assets/images/Teammate1.svg";
import team2 from "../../../assets/images/Teammate2.svg";
import team3 from "../../../assets/images/Teammate3.svg";
import team4 from "../../../assets/images/Teammate4.svg";
import teamPhoto from "../../../assets/images/teamPhoto.png";
import CustomButton from "../../common/Button/CustomButton";
import PlayVideoIcon from "../../../assets/images/playVideoIcon.svg";
import { ReactComponent as CheckMark } from "../../../assets/images/checkMark.svg";

const VisitorDashboard = () => {

	return (
		<Grid container className={classes.dashboard}>
			<Box className={classes.todoTitleBox}>
				<Grid className={classes.titleBox} container item xs={9} xl={9} >
					<Typography variant={"h2"}>Become a brand</Typography>
				</Grid>
				<Grid item xs={4} xl={3} className={classes.teamContainer}>
					<Box className={classes.teamAvatarBox}>
						<img src={team4} alt={"avatar"} />
						<img src={team2} alt={"avatar"} />
						<img src={team3} alt={"avatar"} />
						<img src={team1} alt={"avatar"} />
					</Box>
					<Typography color={"primary"}>View team</Typography>
				</Grid>
			</Box>
			<Box className={classes.contentContainer}>

				<Grid xs={6} xl={6} item className={classes.videoContentItem} >
					<Box className={classes.teamPhotoContainer}>
						<img src={teamPhoto} alt="teamPhoto" />
					</Box>

					<CustomButton width="316px" type="submit" text={"Watch video"} endIcon={<img src={PlayVideoIcon} alt={"Icon"} />} />

				</Grid>

				<Grid xs={6} xl={6} item className={classes.stepsContentItem}>
					<Box>
						<Grid item xs={12} className={classes.stepRow}>
							<Box className={classes.tableTitleBox}>
								<Box marginLeft="13px">
									<Typography color={"primary"} variant={"body2"}>Steps</Typography>
								</Box>
								<Box className={classes.checkJobBox}>
									<Typography color={"primary"} variant={"body2"}>Your job</Typography>
									<Typography color={"primary"} variant={"body2"}>Our job</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} className={classes.stepRow}>
							<Box className={classes.coloredBox} style={{ background: "#FFDC22" }}>
								<Typography variant={"body2"} className={classes.indexNum}>1</Typography>
								<Typography variant={"body2"} style={{ textTransform: "uppercase" }}>Add products</Typography>
								<Box className={classes.counterBox}>
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
									<Box className={classes.vl} />
									<Typography variant={"body2"} className={classes.taskValue}></Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} className={classes.stepRow}>

							<Box className={classes.coloredBox} style={{ background: "#FFAB08" }}>
								<Typography variant={"body2"} className={classes.indexNum}>2</Typography>
								<Typography variant={"body2"} style={{ textTransform: "uppercase" }}>Market research</Typography>
								<Box className={classes.counterBox}>
									<Typography variant={"body2"} className={classes.taskValue}></Typography>
									<Box className={classes.vl} />
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} className={classes.stepRow}>
							<Box className={classes.coloredBox} style={{ background: "#EE6B1D" }}>
								<Typography variant={"body2"} className={classes.indexNum}>3</Typography>
								<Typography variant={"body2"} style={{ textTransform: "uppercase" }}>Brand creation</Typography>
								<Box className={classes.counterBox}>
									<Typography variant={"body2"} className={classes.taskValue}></Typography>
									<Box className={classes.vl} />
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} className={classes.stepRow}>
							<Box className={classes.coloredBox} style={{ background: "#43A047" }}>
								<Typography variant={"body2"} className={classes.indexNum}>3+</Typography>
								<Typography variant={"body2"} style={{ textTransform: "uppercase" }}>Sales channels</Typography>
								<Box className={classes.counterBox}>
									<Typography variant={"body2"} className={classes.taskValue}></Typography>
									<Box className={classes.vl} />
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} className={classes.stepRow}>
							<Box className={classes.coloredBox} style={{ background: "#0097A6" }}>
								<Typography variant={"body2"} className={classes.indexNum}>5</Typography>
								<Typography variant={"body2"} style={{ textTransform: "uppercase" }}>Customer support</Typography>
								<Box className={classes.counterBox}>
									<Typography variant={"body2"} className={classes.taskValue}></Typography>
									<Box className={classes.vl} />
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} className={classes.stepRow}>
							<Box className={classes.coloredBox} style={{ background: "#7B1FA2" }}>
								<Typography variant={"body2"} className={classes.indexNum}>6</Typography>
								<Typography variant={"body2"} style={{ textTransform: "uppercase" }}>Brand awareness</Typography>
								<Box className={classes.counterBox}>
									<Typography variant={"body2"} className={classes.taskValue}></Typography>
									<Box className={classes.vl} />
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} className={classes.stepRow}>
							<Box className={classes.coloredBox} style={{ background: "#C2185B" }}>
								<Typography variant={"body2"} className={classes.indexNum}>7</Typography>
								<Typography variant={"body2"} style={{ textTransform: "uppercase" }}>Sales</Typography>
								<Box className={classes.counterBox}>
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
									<Box className={classes.vl} />
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} className={classes.stepRow}>
							<Box className={classes.coloredBox}
								style={{ background: "#EA4335", textTransform: "uppercase" }}>
								<Typography variant={"body2"} className={classes.indexNum}>8</Typography>
								<Typography variant={"body2"} style={{ textTransform: "uppercase" }}>Improvements</Typography>
								<Box className={classes.counterBox}>
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
									<Box className={classes.vl} />
									<Typography variant={"body2"} className={classes.taskValue}><CheckMark /></Typography>
								</Box>
							</Box>
						</Grid>
					</Box>
					<Box className={classes.sloganBox}>
						<Typography variant={"h2"} align="center">Taking you to the next level</Typography>
					</Box>
				</Grid>

			</Box>
		</Grid>
	)
};

export default VisitorDashboard;
