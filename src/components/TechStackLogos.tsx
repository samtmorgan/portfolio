import React from 'react';
import { Stack } from '@mui/material';
import Image from 'next/image';

export function TechStackLogos() {
	return (
		<Stack direction="row" spacing={2} sx={{ mt: '2rem' }}>
			{/* <Image
						src="/public/next.svg" // Route of the image file
						height={144} // Desired size with correct aspect ratio
						width={144} // Desired size with correct aspect ratio
						alt="Your Name"
                    /> */}
			{/* <Box sx={{ width: '100px', height: '100px' }}>
						<Image
							alt="next-js_icon"
							src="/next.svg"
							// layout="fill"
							// layout=''
							width={100}
							height={50}
                        /> 
					</Box>*/}
			{/* <SvgIcon>
						<NextLogo />
					</SvgIcon> */}
			<Image
				alt="react_logo"
				src="/logo512.png"
				// layout="fill"
				// layout=''
				width={70}
				height={70}
			/>
			<Image
				alt="next-js_icon"
				src="/next.svg"
				// layout="fill"
				// layout=''
				width={100}
				height={70}
			/>
			<Image
				alt="type-script_icon"
				src="/typescript.svg"
				// layout="fill"
				// layout=''
				width={100}
				height={70}
			/>
			<Image
				alt="type-script_icon"
				src="/materialui.svg"
				// layout="fill"
				// layout=''
				width={100}
				height={70}
			/>

			{/* <NextLogo /> */}
		</Stack>
	);
}
