<template>
	<div class="main-header">
		<div class="container">
			<div class="flex-row">
				<div class="col-8">
					<h1 class="site-title">
						<router-link :to="`/`">Kanvasana</router-link>
					</h1>
				</div>

				<div class="col-2">
					<a @click="doNewTask" href="#" class="btn btn-primary btn-new-task">
						New Task
					</a>
				</div>
			</div>
			<!-- /.row -->
		</div>
		<!-- /.container -->
		<new-task-modal></new-task-modal>
	</div><!-- /.main-header -->
</template>

<script>
	import NewTaskModal from '@/components/NewTaskModal';

	export default {
		name: 'MainHeader',
		data () {
			return {

			}
		},

		components: {
			NewTaskModal
		},

		methods: {
		  doNewTask() {
		  	this.$modal.show('new-task-modal');
		  }
		}
	}
</script>

<style scoped>

</style>