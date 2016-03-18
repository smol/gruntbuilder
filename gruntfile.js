module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		dirs : {
			modules : 'front/bower_components',
			src : 'front/src',
			build : 'build'
		},

		copy : {
			html : {
				expand : true,
				cwd : '<%= dirs.src %>',
				src : '**/*.html',
				dest : '<%= dirs.build %>',
				flatten : false
			},
			img : {
				expand : true,
				cwd : '<%= dirs.src %>/images/',
				src : '**/*',
				dest : '<%= dirs.build %>/images/',
				flatten : false
			},
			font : {
				expand : true,
				cwd : '<%= dirs.src %>/static/font/',
				src : '**/*',
				dest : '<%= dirs.build %>/static/font/',
				flatten : false
			}
			// main : {
			// 	expand : true,
			// 	cwd : '<%= dirs.src %>/static/javascripts/library/',
			// 	src : '*.js',
			// 	dest : 'public/build/library',
			// 	flatten : true
			// }
		},

		concat: {
			libs : {
				src : [
					'<%= dirs.modules %>/angular/angular.min.js',
					'<%= dirs.modules %>/angular-ui-router/release/angular-ui-router.min.js'
				],
				dest: '<%= dirs.build %>/lib.min.js',
			},
			dist: {
				src: ['<%= dirs.src %>/**/*.js'],
				dest: '<%= dirs.build %>/app.js',
			},
			css : {
				src : ['<%= dirs.src %>/**/*.scss'],
				dest : '<%= dirs.build %>/style.scss'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'<%= dirs.build %>/style.css': '<%= dirs.build %>/style.scss'
				}
			}
		},

		autoprefixer: {
			dist: {
				files: {
					'<%= dirs.build %>/style.css': '<%= dirs.build %>/style.css'
				}
			}
		},

		clean : {
			src : ['<%= dirs.build %>']
		},

		watch: {
			scripts: {
				files: ['<%= dirs.src %>/**/*.js'],
				tasks: ['concat:dist'],
				options: {
					spawn: false,
					livereload: true,
				},
			},

			html: {
				files: ['<%= dirs.src %>/**/*.html'],
				tasks: ['copy:html'],
				options: {
					spawn: false,
					livereload: true,
				}
			},

			css: {
				files: ['<%= dirs.src %>/**/*.scss'],
				tasks: ['concat:css', 'sass'],
				options: {
					spawn: false,
					livereload: true,
				}
			}
		},

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-autoprefixer');
	// grunt.loadNpmTasks('grunt-devtools');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['clean', 'concat:libs', 'concat:dist', 'concat:css', 'copy']);

	grunt.registerTask('dev', ['default', 'watch']);

};
