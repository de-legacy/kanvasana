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

			<button class="btn btn-primary" @click="$modal.hide('new-task-modal')">Add New</button>
      <button class="btn btn-danger btn-close" @click="$modal.hide('new-task-modal')">Close</button>

    </div>
  </modal>
</template>

<script>
	export default {
		name: 'NewTaskModal',
		data () {
			return {

			}
		}
	}
</script>

<style scoped>
	.btn-close {
		margin-left: 2rem;
	}
</style>