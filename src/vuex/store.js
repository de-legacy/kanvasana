import Vue from 'vue'
import Vuex from 'vuex'
var VueFire = require('vuefire')
var firebase = require('firebase')

var config = {
	apiKey: "AIzaSyBHutUULzIgGVTU-tTBelUD1yVzjcX23IY",
	authDomain: "realtimedb-gw.firebaseapp.com",
	databaseURL: "https://realtimedb-gw.firebaseio.com",
	projectId: "realtimedb-gw",
	storageBucket: "realtimedb-gw.appspot.com",
	messagingSenderId: "339273254820"
};

var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database();

Vue.use(VueFire)
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: [],
		backlogTasks: [],
		todoTasks: [],
		doingTasks: [],
		doneTasks:[]
	},

	mutations: {
		setTasks(state, payload) {
			state.tasks = payload
		},

		setBacklogTask(state, payload) {
			state.backlogTasks = payload;
		},

		setTodoTask(state, payload) {
			state.todoTasks = payload;
		},

		setDoingTask(state, payload) {
			state.doingTasks = payload;
		},

		setDoneTask(state, payload) {
			state.doneTasks = payload;
		},
	},

	actions: {
		getTasks(context) {
			db.ref('/tasks').on('value', (snapshot) => {
				context.commit('setTasks', snapshot.val());
			})
		},

		getBacklogTasks(context) {
			db.ref('/tasks').orderByChild('status').equalTo('backlog').on('value', (snapshot) => {
				context.commit('setBacklogTask', snapshot.val());
			})
		},

		getTodoTasks(context) {
			db.ref('/tasks').orderByChild('status').equalTo('todo').on('value', (snapshot) => {
				context.commit('setTodoTask', snapshot.val());
			})
		},

		getDoingTasks(context) {
			db.ref('/tasks').orderByChild('status').equalTo('doing').on('value', (snapshot) => {
				context.commit('setDoingTask', snapshot.val());
			})
		},

		getDoneTasks(context) {
			db.ref('/tasks').orderByChild('status').equalTo('done').on('value', (snapshot) => {
				context.commit('setDoneTask', snapshot.val());
			})
		},

		createNewTask(context, payload) {
			db.ref('/tasks').push(payload).key
		},

		removeTask(context, payload) {
			db.ref('/tasks').child(payload).remove();
		},
	}
})