<template>
	<div class="container">
		<div class="row">
				<div class="col-md-3">
					<div class="panel panel-danger" id="backlogCol">
						<div class="panel-heading">Backlog</div>
						<div class="panel-body">

							<div class="panel panel-default kanban-item" v-for="(task, index) in backlogTasks" :key="index">
								<div class="panel-heading">
									 <a role="button" data-toggle="collapse" data-parent="#backlogCol" :href="`#backlog-${index}`" :title="task.title">{{ task.title }}</a>
									 <a href="#" class="btn-delete" @click.prevent="deleteTask(index)">&#128473;</a>
								</div>
								<!-- /.panel-heading -->
								<div :id="`backlog-${index}`" class="panel-body panel-collapse collapse">
									<label>Description:</label>
									<p>{{ task.description }}</p>
									<p><label>Point:</label> {{ task.point }}</p>
									<p><label>Assigned to:</label> {{ task.assignedTo }}</p>
									<p><label>Status:</label> {{ task.status }}</p>

									<button class="btn btn-warning u-full-width" @click="updateTaskStatus(index, 'todo')">Todo</button>
								</div>
								<!-- /.panel-body -->
							</div>
							<!-- /.panel panel-default kanban-item -->

						</div>
					</div>
				</div>
				<!-- /.col-md-3 -->

				<div class="col-md-3">
					<div class="panel panel-warning" id="todoCol">
						<div class="panel-heading">To Do</div>
						<div class="panel-body">

							<div class="panel panel-default kanban-item" v-for="(task, index) in todoTasks" :key="index" :id="index">
								<div class="panel-heading">
									<a role="button" data-toggle="collapse" data-parent="#todoCol"  :href="`#todo-${index}`" :title="task.title">{{ task.title }}</a>

									<a href="#" class="btn-delete" @click.prevent="deleteTask(index)">&#128473;</a>
								</div>
								<!-- /.panel-heading -->
								<div :id="`todo-${index}`" class="panel-body panel-collapse collapse">
									<label>Description:</label>
									<p>{{ task.description }}</p>
									<p><label>Point:</label> {{ task.point }}</p>
									<p><label>Assigned to:</label> {{ task.assignedTo }}</p>
									<p><label>Status:</label> {{ task.status }}</p>

									<button class="btn btn-danger u-full-width" @click="updateTaskStatus(index, 'backlog')">Backlog</button>
									<button class="btn btn-info u-full-width" @click="updateTaskStatus(index, 'doing')">Doing</button>
								</div>
								<!-- /.panel-body -->
							</div>
							<!-- /.panel panel-default kanban-item -->
						</div>
					</div>
				</div>
				<!-- /.col-md-3 -->

				<div class="col-md-3">
					<div class="panel panel-info" id="doingCol">
						<div class="panel-heading">Doing</div>
						<div class="panel-body">

							<div class="panel panel-default kanban-item" v-for="(task, index) in doingTasks" :key="index" :id="index">
								<div class="panel-heading">
									<a role="button" data-toggle="collapse" data-parent="#doingCol"  :href="`#doing-${index}`" :title="task.title">{{ task.title }}</a>

									<a href="#" class="btn-delete" @click.prevent="deleteTask(index)">&#128473;</a>
								</div>
								<!-- /.panel-heading -->
								<div :id="`doing-${index}`" class="panel-body panel-collapse collapse">
									<label>Description:</label>
									<p>{{ task.description }}</p>
									<p><label>Point:</label> {{ task.point }}</p>
									<p><label>Assigned to:</label> {{ task.assignedTo }}</p>
									<p><label>Status:</label> {{ task.status }}</p>

									<button class="btn btn-warning u-full-width" @click="updateTaskStatus(index, 'todo')">Todo</button>
									<button class="btn btn-success u-full-width" @click="updateTaskStatus(index, 'done')">Done</button>
								</div>
								<!-- /.panel-body -->
							</div>
							<!-- /.panel panel-default kanban-item -->
						</div>
					</div>
				</div>
				<!-- /.col-md-3 -->

				<div class="col-md-3">
					<div class="panel panel-success" id="doneCol">
						<div class="panel-heading">Done</div>
						<div class="panel-body">
							<div class="panel panel-default kanban-item" v-for="(task, index) in doneTasks" :key="index" :id="index">
								<div class="panel-heading">
									<a role="button" data-toggle="collapse" data-parent="#doneCol"  :href="`#done-${index}`" :title="task.title">{{ task.title }}</a>

									<a href="#" class="btn-delete" @click.prevent="deleteTask(index)">&#128473;</a>
								</div>

								<!-- /.panel-heading -->
								<div :id="`done-${index}`" class="panel-body panel-collapse collapse">
									<label>Description:</label>
									<p>{{ task.description }}</p>
									<p><label>Point:</label> {{ task.point }}</p>
									<p><label>Assigned to:</label> {{ task.assignedTo }}</p>
									<p><label>Status:</label> {{ task.status }}</p>

									<button class="btn btn-info u-full-width" @click="updateTaskStatus(index, 'doing')">Doing</button>
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
				'getDoneTasks',
				'removeTask',
				'editTaskStatus'
			]),

			...mapMutations([
				 'setTasks'
			]),

			deleteTask(index) {
				this.removeTask(index);
			},

			updateTaskStatus(index, status) {
				this.editTaskStatus({
					index: index,
					status: status
				})
			}
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
	.kanban-item .panel-heading {
		position: relative;
		padding-right: 2rem;
	}

	.panel-heading  .btn-delete {
		position: absolute;
		right: 5px;
		top: 50%;
		color: crimson;
		transform: translateY(-50%);
	}

	.panel-heading .btn-delete:hover {
		text-decoration: none;
		color: salmon;
	}
</style>