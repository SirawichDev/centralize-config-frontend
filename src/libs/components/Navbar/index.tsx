import { AccountCircle, Menu, Person } from "@mui/icons-material";
import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import React, { type ReactElement, useRef, useState } from "react";
import { AccountPopover } from "./account-popover";
import authStore from "stores/user";

type TDashboardNavbar = {
	backgroundColor?: string;
	onSidebarOpen: () => void;
	logoImage: ReactElement;
};

export const Navbar = (props: TDashboardNavbar) => {
	const { onSidebarOpen, ...other } = props;
	const settingsRef = useRef(null);

	const [openAccountPopover, setOpenAccountPopover] = useState(false);
	const { first_name = "", email = "" } = authStore((e) => e.user);

	return (
		<>
			<AppBar
				sx={{
					width: { lg: "calc(100%)" },
					zIndex: 1200,
					backgroundColor: (theme) =>
						props?.backgroundColor ?? theme.palette?.background?.paper,
					boxShadow: (theme) => theme?.shadows?.[3],
				}}
				{...other}
			>
				<Toolbar
					disableGutters
					sx={{
						minHeight: 64,
						left: 0,
						px: 2,
					}}
				>
					<Box ml={{ xs: 1, md: 4 }}>
						{props?.logoImage ?? <AccountCircle />}
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Avatar
						onClick={() => setOpenAccountPopover(true)}
						ref={settingsRef}
						sx={{
							cursor: "pointer",
							height: 40,
							width: 40,
							ml: 1,
							textTransform: "uppercase",
							display: {
								xs: "none",
								lg: "inline-flex",
							},
						}}
					>
						{email?.[0] ?? first_name?.[0] ?? <Person fontSize="small" />}
					</Avatar>
					<IconButton
						onClick={onSidebarOpen}
						sx={{
							display: {
								xs: "inline-flex",
								lg: "none",
							},
						}}
					>
						<Menu fontSize="small" />
					</IconButton>
				</Toolbar>
			</AppBar>
			<AccountPopover
				anchorEl={settingsRef.current}
				open={openAccountPopover}
				onClose={() => setOpenAccountPopover(false)}
				popoverComponent={<>custom component</>}
			/>
		</>
	);
};
