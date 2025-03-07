// Dimension Recomended: 780x680
import Funnelspro from '../images/project/funnelspro.jpg';
import Funnelspro1 from '../images/project/funnelspro-1.png';
import Funnelspro2 from '../images/project/funnelspro-2.png';
import Funnelspro3 from '../images/project/funnelspro-3.png';
import Funnelspro4 from '../images/project/funnelspro-4.png';

import MbkmCMS from '../images/project/mbkm-cms.png';
import MbkmCMS1 from '../images/project/mbkm-cms-1.png';
import MbkmCMS2 from '../images/project/mbkm-cms-2.png';
import MbkmCMS3 from '../images/project/mbkm-cms-3.png';
import MbkmCMS4 from '../images/project/mbkm-cms-4.png';

import UCCareerCenterApp from '../images/project/uc_careercenter.jpg';
import UCCareerCenterImage1 from '../images/project/uc_career-7.png';
import UCCareerCenterImage2 from '../images/project/uc_career-8.png';
import UCCareerCenterImage3 from '../images/project/uc_career-9.png';
import UCCareerCenterImage4 from '../images/project/uc_career-10.png';

import UCOCWApp from '../images/project/uc_ocw.png';
import UCOCWImage1 from '../images/project/uc_ocw-1.png';
import UCOCWImage2 from '../images/project/uc_ocw-2.png';
import UCOCWImage3 from '../images/project/uc_ocw-3.png';
import UCOCWImage4 from '../images/project/uc_ocw-4.png';
import UCOCWImage5 from '../images/project/uc_ocw-5.png';

import UCINCADApp from '../images/project/uc_incad.png';
import UCINCAD1 from '../images/project/uc_incad-1.png';
import UCINCAD2 from '../images/project/uc_incad-2.png';
import UCINCAD3 from '../images/project/uc_incad-3.png';
import UCINCAD4 from '../images/project/uc_incad-4.png';

// import PropanSalesForce from '../images/project/propan_sales_analyzer.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Funnelspro',
		category: 'Web Application',
		img: Funnelspro,
		ProjectHeader: {
			title: 'Funnelspro',
			tags: 'Full Stack / Web Application',
		},
		ProjectImages: [
			{
				id: 1,
				title: null,
				img: Funnelspro1,
			},
			{
				id: 2,
				title: null,
				img: Funnelspro2,
			},
			{
				id: 3,
				title: null,
				img: Funnelspro3,
			},
			{
				id: 4,
				title: null,
				img: Funnelspro4,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Funnelspro',
				},
				{
					id: 2,
					title: 'As',
					details: 'Full Stack Developer',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://tools.dropshipaja.com',
					link: 'https://tools.dropshipaja.com',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'FunnelsPro is a software for creating cool website pages. FunnelsPro is designed to help business owners like you, who are not programmers and cannot code, to develop their online businesses to the next level.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
						'MySQL',
						'Bootstrap',
						'GrapeJS',
						'CodeIgniter 3',
						'others.',
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details: `A landing page builder system that integrates with various advertising tools, such as Google Ads, Facebook Ads, TikTok Ads and others, allows users to create optimized landing pages and manage their ad campaigns seamlessly. The system can connect with external domains, enabling businesses to use their own domain names for these landing pages. For subscription payments, the system utilizes the Midtrans payment gateway, offering a secure and efficient way for users to subscribe to services directly through the platform.`
				},
			],
			SocialSharingHeading: '',
			SocialSharing: [
				
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
			],
		},
	},
	{
		id: 2,
		title: 'Career Center UC',
		category: 'Web Application',
		img: UCCareerCenterApp,
		ProjectHeader: {
			title: 'Career Center UC',
			publishDate: 'May 13, 2023',
			tags: 'Full Stack / Web Application',
		},
		ProjectImages: [
			{
				id: 1,
				title: null,
				img: UCCareerCenterImage1,
			},
			{
				id: 2,
				title: null,
				img: UCCareerCenterImage2,
			},
			{
				id: 3,
				title: null,
				img: UCCareerCenterImage3,
			},
			{
				id: 4,
				title: null,
				img: UCCareerCenterImage4,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Career Center UC',
				},
				{
					id: 2,
					title: 'As',
					details: 'Full Stack Developer',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://careercenter.uc.ac.id',
					link: 'https://careercenter.dkproject.my.id/'
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Designing and building a Career Center system equipped with a CMS module. This application is made specifically for Ciputra University student alumni.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
						'MySQL',
						'Bootstrap',
						'CodeIgniter 3',
						'others.',
					],
				},
			],
			ProjectDetailsHeading: 'Challenges',
			ProjectDetails: [
				{
					id: 1,
					details: `<ol style="list-style: decimal;margin-left:20px;font-size:14px;">
								<li style="font-weight:bold;">
								<b>
									Content Management System (CMS):
								</b>
								<ul style="list-style:disc;padding-inline-start:30px;font-weight:normal;">
									<li>
									<b>Requirement Analysis:</b> Identifying the core features for managing content effectively.
									</li>
									<li>
									<b>Design:</b> Structuring a user-friendly interface for easy content creation and management.
									</li>
									<li>
									<b>Development:</b> Implementing functionalities such as content creation, editing, and organization.
									</li>
									<li>
									<b>Testing:</b> Ensuring the system operates smoothly and verifying content integrity.
									</li>
									<li>
									<b>Deployment:</b> Launching the CMS for user access, ensuring it is fully functional and accessible.
									</li>
								</ul>
								</li>
								<li style="font-weight:bold;">
									<b>
										Career Matching Algorithms:
									</b>
									<ul style="list-style:disc;padding-inline-start:30px;font-weight:normal;">
										<li>
											<b>Requirement Analysis:</b> Understanding the data inputs for effective career matching.
										</li>
										<li>
											<b>Design:</b> Creating algorithms to align user skills with relevant career opportunities.
										</li>
										<li>
											<b>Development:</b> Coding and integrating the matching algorithms into the platform.
										</li>
										<li>
											<b>Testing:</b> Validating the accuracy and efficiency of career matches.
										</li>
										<li>
											<b>Deployment:</b> Integrating and launching the matching system for real-world use.
										</li>
									</ul>
								</li>
							</ol>`,
				}
			],
			SocialSharingHeading: '',
			SocialSharing: [
				
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 3,
					title: 'OpenCourseWare UC',
					img: UCOCWApp,
					link: '/projects/3',
				},
				{
					id: 4,
					title: 'INCAD UC',
					img: UCINCADApp,
					link: '/projects/4',
				},
			],
		},
	},
	{
		id: 3,
		title: 'OpenCourseWare UC',
		category: 'Web Application',
		img: UCOCWApp,
		ProjectHeader: {
			title: 'OpenCourseWare UC',
			publishDate: 'May 13, 2023',
			tags: 'Full Stack / Web Application',
		},
		ProjectImages: [
			{
				id: 1,
				title: null,
				img: UCOCWImage1,
			},
			{
				id: 2,
				title: null,
				img: UCOCWImage2,
			},
			{
				id: 3,
				title: null,
				img: UCOCWImage3,
			},
			{
				id: 4,
				title: null,
				img: UCOCWImage4,
			},
			{
				id: 5,
				title: null,
				img: UCOCWImage5,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'OpenCourseWare UC',
				},
				{
					id: 2,
					title: 'As',
					details: 'Full Stack Developer',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://repository.ciputra.ac.id',
					link: 'https://repository.ciputra.ac.id/home'
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Designing and building an Open Courseware (OCW) application used to provide free teaching materials for college and university levels.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
						'MySQL',
						'Bootstrap',
						'CodeIgniter 3',
						'others.',
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details: `Designing and building OCW application for Ciputra University. The application is used to provide free teaching materials for college and university levels. The application is designed to be user-friendly and easy to navigate, with a focus on providing high-quality educational content.`,
				}
			],
			SocialSharingHeading: '',
			SocialSharing: [
				
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 2,
					title: 'Career Center UC',
					img: UCCareerCenterApp,
					link: '/projects/2',
				},
				{
					id: 4,
					title: 'INCAD UC',
					img: UCINCADApp,
					link: '/projects/4',
				},
			],
		},
	},
	{
		id: 4,
		title: 'INCAD UC',
		category: 'Web Application',
		img: UCINCADApp,
		ProjectHeader: {
			title: 'INCAD (Indonesia Capacity Development) UC',
			publishDate: 'May 13, 2023',
			tags: 'Full Stack / Web Application',
		},
		ProjectImages: [
			{
				id: 1,
				title: null,
				img: UCINCAD1,
			},
			{
				id: 2,
				title: null,
				img: UCINCAD2,
			},
			{
				id: 3,
				title: null,
				img: UCINCAD3,
			},
			{
				id: 4,
				title: null,
				img: UCINCAD4,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'INCAD (Indonesia Capacity Development) UC',
				},
				{
					id: 2,
					title: 'As',
					details: 'Full Stack Developer',
				},
				{
					id: 3,
					title: 'Website',
					details: 'http://incad.ciputra.ac.id/',
					link: 'http://incad.ciputra.ac.id/'
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'Designing and building the INCAD (Indonesia Capacity Development) application which is used to provide a Repository and Information about workshops.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
						'MySQL',
						'Bootstrap',
						'CodeIgniter 3',
						'others.',
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details: `Designing and building the INCAD (Indonesia Capacity Development) application for Ciputra University. The application which is used to provide a Repository and Information about workshops. The application is designed to be user-friendly and easy to navigate, with a focus on providing high-quality workshop content.`,
				}
			],
			SocialSharingHeading: '',
			SocialSharing: [
				
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 2,
					title: 'Career Center UC',
					img: UCCareerCenterApp,
					link: '/projects/2',
				},
				{
					id: 3,
					title: 'OpenCourseWare UC',
					img: UCOCWApp,
					link: '/projects/3',
				},
			],
		},
	},
	{
		id: 5,
		title: 'MBKM CMS UPJ',
		category: 'Web Application',
		img: MbkmCMS,
		ProjectHeader: {
			title: 'MBKM CMS',
			publishDate: 'Jan 26, 2023',
			tags: 'Full Stack / Web Application',
		},
		ProjectImages: [
			{
				id: 1,
				title: null,
				img: MbkmCMS,
			},
			{
				id: 2,
				title: null,
				img: MbkmCMS1,
			},
			{
				id: 3,
				title: null,
				img: MbkmCMS2,
			},
			{
				id: 4,
				title: null,
				img: MbkmCMS3,
			},
			{
				id: 5,
				title: null,
				img: MbkmCMS4,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'MBKM CMS UPJ',
				},
				{
					id: 2,
					title: 'As',
					details: 'Full Stack Developer',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://mbkm.upj.ac.id',
					link: 'https://mbkm.upj.ac.id',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Designing and building MBKM CMS system at Universitas Pembangunan Jaya with a reliable content management system module and designing applications for students.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'PHP',
						'MySQL',
						'Bootstrap',
						'CodeIgniter 3',
						'others.',
					],
				},
			],
			ProjectDetailsHeading: 'Challenges',
			ProjectDetails: [
				{
					id: 4,
					details: `<ul style="list-style:disc;padding-inline-start:30px;font-weight:normal;">
								<li>
									<b>Requirement Analysis:</b> The first step in designing a CMS is to analyze the requirements of the system. This includes understanding the needs of the users, the features they require, and the goals of the system.
								</li>
								<li>
									<b>Design:</b> The design phase involves creating a blueprint of the system. This includes defining the structure of the system, the user interface, and the functionality of the system.
								</li>
								<li>
									<b>Development:</b> The development phase involves building the system. This includes writing the code, creating the database, and testing the system.
								</li>
								<li>
									<b>Testing:</b> The testing phase involves testing the system to ensure that it works as expected. This includes testing the functionality of the system, the user interface, and the performance of the system.
								</li>
								<li>
									<b>Deployment:</b> The deployment phase involves deploying the system to the production environment. This includes installing the system on the server, configuring it, and making it available to users.
								</li>
							</ul>`
				},
			],
			SocialSharingHeading: '',
			SocialSharing: [
				
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 6,
					title: 'MBKM UPJ',
					img: MbkmCMS,
					link: '/projects/6',
				}
			],
		},
	},
];

export default projectsData;