import {
	Box,
	Divider,
	MenuItem,
	MenuList,
	Popover,
	Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import userStore from "libs/stores/user";
import React from "react";

export const AccountPopover = (props) => {
	const user = userStore((e) => e.user);

	return (
		<Popover
			anchorOrigin={{
				horizontal: "left",
				vertical: "bottom",
			}}
			slotProps={{
				paper: {
					sx: { width: "300px" },
				},
			}}
			{...props}
		>
			{props?.popoverComponent ? (
				props?.popoverComponent
			) : (
				<>
					<Box py={1.5} px={2}>
						<Typography variant="overline">Account</Typography>
						<Typography color="text.secondary" variant="body2">
							{`${user?.first_name} ${user?.last_name}`}
						</Typography>
					</Box>
					<Divider />
					<MenuList disablePadding>
						<MenuItem>Sign out</MenuItem>
					</MenuList>
				</>
			)}
		</Popover>
	);
};

AccountPopover.propTypes = {
	anchorEl: PropTypes.any,
	onClose: PropTypes.func,
	open: PropTypes.bool.isRequired,
	popoverComponent: PropTypes.element,
};
