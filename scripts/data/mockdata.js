define([], function(){
	return {
		header_model_data : {
			link: 'My Page',
			link_url: 'https://www.amitupadhyay.in',
		},

		footer_model_data : {
			link: '© 2016 www.amitupadhyay.in',
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
					skillID:'skill-1',
					bgColor: 'bg-pink',
					skillName: 'Backbone', 
					skillImage: 'backbone.png',
					experience: '13',
					type: 'primary',
					projects: 'Ecommerce Web based portal - Used Backbone to develop the interface for the widgets which communicate with each other using backbone.radio channels.',
					subsets: [
						'views', 'models', 'router', 'channels'
					]
				},
				{
					skillID:'skill-2',
					bgColor: 'bg-light-blue',
					skillName: 'HTML5', 
					skillImage: 'html5.png',
					experience: '10',
					type: 'primary',
					projects: 'Used HTML5 to to contsruct semantic web pages. Implemented some of the popular features of HTML5 such as Video, Canvas, Localstorage etc.',
					subsets: [
						'semantic', 'video', 'canvas', 'geolocation', 'localstorage'
					]
				},
				{
					skillID:'skill-3',
					bgColor: 'bg-purple',
					skillName: 'Javascript', 
					skillImage: 'javascript.png',
					experience: '20',
					type: 'primary',
					projects: 'Have experience in Object Oriented Javascript. Core Javascript forms the base of frameworks like Backbone, Angular etc.',
					subsets: [
						'types', 'closures', 'objects', 'oops', 'function', 'hoisting'
					]
				},
				{
					skillID:'skill-4',
					bgColor: 'bg-red',
					skillName: 'Marionette', 
					skillImage: 'marionette.png',
					experience: '13',
					type: 'primary',
					projects: 'Have used Marionette extensively to build widgets on top of Liferay. Marionette provides a basic structure to the application which Backbone lacks.',
					subsets: [
						'itemView', 'compositeView', 'application', 'layout', 'regions'
					]
				},
				{
					skillID:'skill-5',
					bgColor: 'bg-teal',
					skillName: 'Core Java', 
					skillImage: 'java.png',
					experience: '24',
					type: 'secondary',
					projects: 'Have used Java to develop J2EE based application, Rest Services, Servlets and Struts based application. ',
					subsets: [
						'collections', 'servlets', 'polymorphism', 'inheritance', 'encapsulation', 'abstraction'
					]
				},
				{
					skillID:'skill-6',
					bgColor: 'bg-pink',
					skillName: 'IBM DB2', 
					skillImage: 'db2.png',
					experience: '24',
					type: 'secondary',
					projects: 'Have used DB2 to under the Banking Application project to store and retrive data for the end customer. Have implemented joins and complex queries to retrive useful data.',
					subsets: [
						'joins', 'sql', 'queries', 'views', 'access-priveleges', 'IBM DB2 Certified Associate'
					]
				},
				{
					skillID:'skill-7',
					bgColor: 'bg-purple',
					skillName: 'MongoDB', 
					skillImage: 'mongodb.png',
					experience: '1',
					type: 'secondary',
					projects: 'Have attended 5 Days training on MongoDB and completed the MongoDB University MJ101 course for Java developers. Have understanding of NoSQL features and its implementation in NoSQL databases such as MongoDB',
					subsets: [
						'NoSQL', 'find', 'insert', 'index', 'replication', 'Sharding'
					]
				},
				{
					skillID:'skill-8',
					bgColor: 'bg-red',
					skillName: 'Eclipse', 
					skillImage: 'eclipse.png',
					experience: '24',
					type: 'tool',
					projects: 'Have used Eclipse for Java based development. Familiar with most of the Debugging features of Eclipse. ',
					subsets: [
						'Debugging', 'Build', 'Dependencies', 'SVN-integration', 'IBM RAD'
					]
				},
				{
					skillID:'skill-9',
					bgColor: 'bg-teal',
					skillName: 'Git', 
					skillImage: 'git.png',
					experience: '12',
					type: 'tool',
					projects: 'Have used Git extensively to manage code.',
					subsets: [
						'repository', 'fetch', 'fork', 'merge', 'pull-request'
					]
				},
				{
					skillID:'skill-10',
					bgColor: 'bg-pink',
					skillName: 'Mainframes', 
					skillImage: 'mainframe.png',
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
			summaryPart1: 'Hi, I am a front-end Developer with more than 4 years of experience in Software Development. ',
			summaryPart2: 'I have experience in building responsive websites which work seamlessly on desktop and mobile devices. ',
			summaryPart3: 'I am a Computer Science graduate from RGPV University. Currently I am working with a Multi-National IT company as a Front-End Developer.',
			segment: [
				{
					segment:'segment1',
					text1: 'Who am I?', 
					text2: 'I am a UI Developer', 
					image:'./images/profileImage2.jpg',
					nextSegment:'segment2',
					bgColor: 'bg-pink',
				},
				{
					segment:'segment2',
					text1: 'What I Do?', 
					text2: 'I convert designs to reality', 
					image:'./images/profileImage2.jpg',
					nextSegment:'segment3',
					bgColor: 'bg-light-blue'},
				{
					segment:'segment3',
					text1: 'Wanna connect with me?',
					text2: '+91-9XXXXXXXX',  
					image:'./images/profileImage2.jpg',
					nextSegment:'',
					bgColor: 'bg-purple'}
			]
		},

		content_model_data : {
			skills: ['something','otherthing','elsething']
		},

		navigation_collection_data : [
			{link: 'home', name: 'Home'},
			{link: 'skills', name: 'My Technology Stack'},
			{link: 'demo', name: 'Some Illustraions'},
		],

		widgetlist_collection_data : [
			{
				widgetName: 'Quiz',
				description: 'A lightweight Quiz to show the rendering of same elements using different data from the model.'
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
					question: 'Who is Sonu Nigam?',
					options: {
						a:'Singer', 
						b: 'Writer',
						c: 'Director',
						d: 'Crickter'
					},
					answer: 'a'
				},
				{
					question: 'What is the symbol of Potassium?',
					options: {
						a:'Ab', 
						b: 'Po',
						c: 'K',
						d: 'Pt'
					},
					answer: 'c'
				},
				{
					question: 'When is Gandhi Jayanti celebrated?',
					options: {
						a:'2nd October', 
						b: '26th January',
						c: '1st December',
						d: '14th November'
					},
					answer: 'a'
				},
				{
					question: 'How many kilobytes are there is 1 Megabyte?',
					options: {
						a:'1024', 
						b: '1000',
						c: '.1024',
						d: '256'
					},
					answer: 'a'
				},
			]
		}
	};
});