import { Close, Person } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Divider,
	Drawer,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import React, { type ReactElement } from "react";
import authStore from "stores/user";

export const drawerWidth = 77;
export const iconStyle = { fontSize: 24, color: "#353A40", mb: 0.5 };

type TMenuItem = {
	module?: string;
	title?: string;
	color?: string;
	onClick?: () => void;
	icon?: ReactElement;
};

type TSidebarProps = {
	onClose: () => void;
	open?: boolean;
	logoImage?: ReactElement;
	menuItems: Array<TMenuItem>;
	LogoutModal?: ReactElement;
	xsSidebarContent: ReactElement;
	lgSidebarContent: ReactElement;
};

export function Sidebar(props: TSidebarProps) {
	const { open, onClose } = props;

	const user = authStore((e) => e.user);

	return (
		<>
			<Drawer
				sx={{ display: { lg: "flex", xs: "none" } }}
				anchor="left"
				open
				PaperProps={{
					sx: {
						backgroundColor: "secondary.900",
						color: "#FFFFFF",
						width: drawerWidth,
						zIndex: 900,
					},
				}}
				variant="permanent"
			>
				{props?.lgSidebarContent}
			</Drawer>
			<Drawer
				anchor="bottom"
				open={open}
				onClose={onClose}
				sx={{ display: { lg: "none", xs: "flex" } }}
			>
				<Box
					mx={1}
					role="presentation"
					height={1000}
					mt={4}
					sx={{ px: { xs: 2, md: 0 } }}
				>
					<Grid container justifyContent="space-between">
						<Grid item>{props?.logoImage}</Grid>
						<Grid item>
							<IconButton onClick={onClose}>
								<Close />
							</IconButton>
						</Grid>
					</Grid>
					<Grid container alignItems="center" mt={3}>
						<Avatar
							sx={{
								height: 40,
								width: 40,
								textTransform: "uppercase",
							}}
						>
							{user?.email?.[0] ?? user?.first_name?.[0] ?? (
								<Person fontSize="small" />
							)}
						</Avatar>
						<Typography
							ml={1}
							textOverflow="ellipsis"
							overflow="hidden"
							width={200}
						>
							{user?.first_name} {user?.last_name}
						</Typography>
					</Grid>
					<Box flexGrow={1} sx={{ ml: 1, mt: 1 }}>
						<Typography fontWeight={600} fontSize={24} mt={2}>
							เมนู
						</Typography>
						<Grid container mt={2}>
							{props?.menuItems.map((e) => (
								<div key={e.title}>{props?.xsSidebarContent}</div>
							))}
						</Grid>
					</Box>
				</Box>
			</Drawer>
		</>
	);
}
