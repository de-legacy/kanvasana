<template>
	<div class="container">
		<div class="row">
				<div class="col-md-3">
					<div class="panel panel-danger">
						<div class="panel-heading">Backlog</div>
						<div class="panel-body">

							<div class="panel panel-default" v-for="(task, index) in backlogTasks" :key="index">
								<div class="panel-heading">{{ task.title }}</div>
								<!-- /.panel-heading -->
								<div class="panel-body">
									<p><label>Point:</label> {{ task.point }}</p>
									<p><label>Assigned to:</label> {{ task.assignedTo }}</p>

									<button class="btn btn-primary">Show Details</button>
								</div>
								<!-- /.panel-body -->
							</div>
							<!-- /.panel panel-default -->

						</div>
					</div>
				</div>
				<!-- /.col-md-3 -->

				<div class="col-md-3">
					<div class="panel panel-warning">
						<div class="panel-heading">To Do</div>
						<div class="panel-body">

							<div class="panel panel-default" v-for="(task, index) in todoTasks" :key="index">
								<div class="panel-heading">{{ task.title }}</div>
								<!-- /.panel-heading -->
								<div class="panel-body">
									<p><label>Point:</label> {{ task.point }}</p>
									<p><label>Assigned to:</label> {{ task.assignedTo }}</p>

									<button class="btn btn-primary">Show Details</button>
								</div>
								<!-- /.panel-body -->
							</div>
							<!-- /.panel panel-default -->
						</div>
					</div>
				</div>
				<!-- /.col-md-3 -->

				<div class="col-md-3">
					<div class="panel panel-info">
						<div class="panel-heading">Doing</div>
						<div class="panel-body">

							<div class="panel panel-default" v-for="(task, index) in doingTasks" :key="index">
								<div class="panel-heading">{{ task.title }}</div>
								<!-- /.panel-heading -->
								<div class="panel-body">
									<p><label>Point:</label> {{ task.point }}</p>
									<p><label>Assigned to:</label> {{ task.assignedTo }}</p>

									<button class="btn btn-primary">Show Details</button>
								</div>
								<!-- /.panel-body -->
							</div>
							<!-- /.panel panel-default -->
						</div>
					</div>
				</div>
				<!-- /.col-md-3 -->

				<div class="col-md-3">
					<div class="panel panel-success">
						<div class="panel-heading">Done</div>
						<div class="panel-body">

							<div class="panel panel-default" v-for="(task, index) in doneTasks" :key="index">
								<div class="panel-heading">{{ task.title }}</div>
								<!-- /.panel-heading -->
								<div class="panel-body">
									<p><label>Point:</label> {{ task.point }}</p>
									<p><label>Assigned to:</label> {{ task.assignedTo }}</p>

									<button class="btn btn-primary">Show Details</button>
								</div>
								<!-- /.panel-body -->
							</div>
						</div>
					</div>
				</div>
				<!-- /.col-md-3 -->
		</div>
		<!-- /.row -->
	</div>
	<!-- /.container -->
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

	export default {
		name: 'KanbanPage',
		data () {
			return {

			}
		},

		methods: {
			...mapActions([
				'getTasks',
				'getBacklogTasks',
				'getTodoTasks',
				'getDoingTasks',
				'getDoneTasks'
			]),

			...mapMutations([
				 'setTasks'
			]),

		},

		computed: {
			...mapState([
				'tasks',
				'backlogTasks',
				'todoTasks',
				'doingTasks',
				'doneTasks'
			])
		},

		created() {
			this.getTasks();
			this.getBacklogTasks();
			this.getTodoTasks();
			this.getDoingTasks();
			this.getDoneTasks();
		}
	}
</script>

<style scoped>

</style>