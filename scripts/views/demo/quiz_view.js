define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var Mockdata = require("scripts/data/mockdata");
	var QuizViewTemplate = require("text!scripts/templates/demo/template_quiz_view.hbs");
	var QuizModel = require("scripts/models/demo/model_quiz_view");
	var questions ='';
	var currentPosition = 0;
	var score =0;

	var QuizView = marionette.ItemView.extend({
		template: Handlebars.compile(QuizViewTemplate),
		initialize: function(){
			var quizModel = new QuizModel(Mockdata.quiz_model_data);
			this.model = quizModel;
		},
		ui: {
			'next' : '.btn-next',
			'start' : '.btn-start',
			'end' : '.btn-close'
		},
		events: {
			'click @ui.next': 'loadNextQuestion',
			'click @ui.start': 'startQuiz',
			'click @ui.end': 'endQuiz'
		},
		startQuiz: function(){
			this.model.set('currentPosition', 0);
			score = 0;
			currentPosition = this.model.get('currentPosition');
			questions = this.model.get('questions');
			this.model.set('currentQuestion', questions[this.model.get('currentPosition')]);
			this.model.set('questionNumber', currentPosition + 1);
			console.log('Current ques : ' + this.model.get('currentQuestion'));
			this.render();
		},
		loadNextQuestion: function(){
			currentPosition = this.model.get('currentPosition');
			var selectedOption = this.$("input[type='radio'][name='options']:checked");
			var answerSelected = selectedOption ? selectedOption.val() : null;
			if( answerSelected ) {
				if (answerSelected === questions[currentPosition].answer) {
					score++;
				}
			}
			currentPosition++;
			this.model.set('currentPosition', currentPosition);
			questions = this.model.get('questions');
			if( questions.length === currentPosition + 1){
				this.model.set('lastQuestion', true);
			}
			this.model.set('currentQuestion', questions[this.model.get('currentPosition')]);
			console.log(this.model.get('currentQuestion'));
			this.model.set('questionNumber', currentPosition + 1);
			this.render();
		},
		endQuiz: function(){
			currentPosition = this.model.get('currentPosition');
			var selectedOption = this.$("input[type='radio'][name='options']:checked");
			var answerSelected = selectedOption ? selectedOption.val() : null;
			if( answerSelected ) {
				if (answerSelected === questions[currentPosition].answer) {
					score++;
				}
			}
			this.model.set('score', score);
			this.model.unset('currentQuestion');
			this.model.unset('currentPosition');
			this.model.unset('questionNumber');
			this.model.unset('lastQuestion');
			console.log('end of quiz' + score);

			this.render();
		}
	});
	return QuizView;
});
