<template>
	 <modal name="new-task-modal" height="auto" :scrollable="true">
    <div class="modal-content">
      <h3 class="h4 modal-title">New Task</h3>
			<form action="#">
				<div class="input-group u-full-width">
					<label>Title</label>
					<input type="text" id="title" name="title" ref="title" class="form-control" />
				</div>

				<div class="input-group u-full-width">
					<label>Description</label>
					<textarea id="description" name="description" ref="description" class="form-control" rows="6"></textarea>
				</div>

				<div class="input-group u-full-width">
					<label>Point</label>
					<input type="number" id="point" name="point" ref="point" class="form-control" value="0" />
				</div>

				<div class="input-group u-full-width">
					<label>Asigned To</label>
					<input type="text" id="assignedTo" name="assignedTo" ref="assignedTo" class="form-control" />
				</div>

				<input type="hidden" id="status" name="status" ref="status" class="form-control" value="backlog"/>
			</form>

			<button class="btn btn-primary" @click="doNewTask">Add New</button>
      <button class="btn btn-danger btn-close" @click="$modal.hide('new-task-modal')">Close</button>

    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex'

	export default {
		name: 'NewTaskModal',
		data () {
			return {

			}
		},

		methods: {
			...mapActions([
				'setNewTask'
			]),

			doNewTask() {
				let task = {
					title : this.$refs.title.value,
					description : this.$refs.description.value,
					point : this.$refs.point.value,
					assignedTo : this.$refs.assignedTo.value,
					status : this.$refs.status.value,
				}

				this.createNewTask(task)
			}
		}
	}
</script>

<style scoped>
	.btn-close {
		margin-left: 2rem;
	}
</style>