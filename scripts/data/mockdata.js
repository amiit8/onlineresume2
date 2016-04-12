define([], function(){
	return {
		header_model_data : {
			link: 'My Page',
			link_url: 'https://www.amitupadhyay.in',
		},

		footer_model_data : {
			link: 'Copyright www.amitupadhyay.in',
			link_url: 'https://www.amitupadhyay.in',
		},

		resume_model_data: {
			name: 'Amit Upadhyay',
			designation: 'My skills and experience',
			profileImage: 'images/profileImage.jpg',
			profileImage2: 'images/profileImage2.jpg',
			summary: 'I have worked on both sides of the technology stack - front-end and back-end. Started with Java and now added script to it:-P. Below are some of the things that I am comfortable with and most probably will be productive with too.',
			skills: [
				{
					skillName: 'Backbone', 
					experience: '13',
					type: 'primary',
					projects: 'Ecommerce Web based portal - Used Backbone to develop the interface for the widgets which communicate with each other using backbone.radio channels.',
					subsets: [
						'views', 'models', 'router', 'channels'
					]
				},
				{
					skillName: 'HTML5', 
					experience: '10',
					type: 'primary',
					projects: 'Used HTML5 to to contsruct semantic web pages. Implemented some of the popular features of HTML5 such as Video, Canvas, Localstorage etc.',
					subsets: [
						'semantic', 'video', 'canvas', 'geolocation', 'localstorage'
					]
				},
				{
					skillName: 'Javascript', 
					experience: '20',
					type: 'primary',
					projects: 'Have experience in Object Oriented Javascript. Core Javascript forms the base of frameworks like Backbone, Angular etc.',
					subsets: [
						'types', 'closures', 'objects', 'oops', 'function', 'hoisting'
					]
				},
				{
					skillName: 'Marionette', 
					experience: '13',
					type: 'primary',
					projects: 'Have used Marionette extensively to build widgets on top of Liferay. Marionette provides a basic structure to the application which Backbone lacks.',
					subsets: [
						'itemView', 'compositeView', 'application', 'layout', 'regions'
					]
				},
				{
					skillName: 'Core Java', 
					experience: '24',
					type: 'secondary',
					projects: 'Have used Java to develop J2EE based application, Rest Services, Servlets and Struts based application. ',
					subsets: [
						'collections', 'servlets', 'polymorphism', 'inheritance', 'encapsulation', 'abstraction'
					]
				},
				{
					skillName: 'IBM DB2', 
					experience: '24',
					type: 'secondary',
					projects: 'Have used DB2 to under the Banking Application project to store and retrive data for the end customer. Have implemented joins and complex queries to retrive useful data.',
					subsets: [
						'joins', 'sql', 'queries', 'views', 'access-priveleges', 'IBM DB2 Certified Associate'
					]
				},
				{
					skillName: 'MongoDB', 
					experience: '1',
					type: 'secondary',
					projects: 'Have attended 5 Days training on MongoDB and completed the MongoDB University MJ101 course for Java developers. Have understanding of NoSQL features and its implementation in NoSQL databases such as MongoDB',
					subsets: [
						'NoSQL', 'find', 'insert', 'index', 'replication', 'Sharding'
					]
				},
				{
					skillName: 'Eclipse', 
					experience: '24',
					type: 'tool',
					projects: 'Have used Eclipse for Java based development. Familiar with most of the Debugging features of Eclipse. ',
					subsets: [
						'Debugging', 'Build', 'Dependencies', 'SVN-integration', 'IBM RAD'
					]
				},
				{
					skillName: 'Git', 
					experience: '12',
					type: 'tool',
					projects: 'Have used Git extensively to manage code.',
					subsets: [
						'repository', 'fetch', 'fork', 'merge', 'pull-request'
					]
				},
				{
					skillName: 'Mainframes', 
					experience: '3',
					type: 'tool',
					projects: 'Have been trained in Mainframes. Can operate on datasets and work through mainframe based application.',
					subsets: [
						'IBM Zos', 'Datasets-operation', 'DB2 Interface'
					]
				}
			]
		},
		navigation_model_data : {

		},

		home_model_data: {
			name: 'Amit Upadhyay',
			work: 'UI Deveoper',
			profileImage: 'images/profileImage.jpg',
			profileImage2: 'images/profileImage2.jpg',
			summary: 'Hi, I am a front-end Developer with more than 4 years of experience in Software Development. I have experience in building responsive websites which work seamlessly on desktop and mobile devices. I am a Computer Science graduate from RGPV University. Currently I am working with a Multi-National IT company as a Software Engineer Analyst.'
		},

		content_model_data : {
			skills: ['something','otherthing','elsething']
		},

		navigation_collection_data : [
			{link: 'home', name: 'Home'},
			{link: 'skills', name: 'Skills'},
			{link: 'demo', name: 'Demo'},
		],

		widgetlist_collection_data : [
			{
				widgetName: 'Quiz',
				description: 'A lightweight Quiz'
			},
			{
				widgetName: 'Gallery',
				description: 'A gallery for images'
			}
		],

		quiz_model_data : {
			totalquestions: 2,
			questions : [
				{
					question: 'Who is the prime minister of india?',
					options: {
							a:'Sachin', 
							b: 'Modi',
							c: 'Rahul',
							d: 'Kohli'
						},
					answer: 'b'
				},
				{
					question: 'Who is the president of india?',
					options: {
						a:'Sachin', 
						b: 'Mukherji',
						c: 'Rahul',
						d: 'Kohli'
					},
					answer: 'b'
				},
				{
					question: 'Who Sonu Nigam?',
					options: {
						a:'Singer', 
						b: 'Writer',
						c: 'Director',
						d: 'Crickter'
					},
					answer: 'a'
				},
					
			]
		}
	};
});