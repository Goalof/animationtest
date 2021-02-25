import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Components.Animation animation="Slide In" trigger="Click" test={false}>
				<Image src="https://images.unsplash.com/photo-1611095564985-89765398121e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" width="100%" />
			</Components.Animation>
		</Section>
		<Components.Animation
			trigger="Onload"
			animation="Slide In"
			iteration="once"
			duration="2s"
			test={false}
		>
			<Section
				background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
				padding="64px 0"
				sm-padding="40px 0"
				color="--light"
				font="--base"
			>
				<Stack>
					<StackItem width="75%" lg-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
							Excellence in everything
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							Striving for perfection in everything we do. Unparalleled service for everyone.
						</Text>
					</StackItem>
				</Stack>
				<Box text-align="center" margin="96px 0 0 0">
					<Text margin="8px 0" text-transform="uppercase">
						Who we are
					</Text>
					<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
				</Box>
			</Section>
		</Components.Animation>
		<Components.Animation
			trigger="Onload"
			animation="Fly In"
			iteration="once"
			duration="2s"
			test
		>
			<Section
				background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
				padding="64px 0"
				sm-padding="40px 0"
				color="--light"
				font="--base"
			>
				<Stack>
					<StackItem width="75%" lg-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
							Excellence in everything
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							Striving for perfection in everything we do. Unparalleled service for everyone.
						</Text>
					</StackItem>
				</Stack>
				<Box text-align="center" margin="96px 0 0 0">
					<Text margin="8px 0" text-transform="uppercase">
						Who we are
					</Text>
					<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
				</Box>
			</Section>
		</Components.Animation>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});