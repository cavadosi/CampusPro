<template>
	<!-- container -->
	<div class="flex h-full rounded-md bg-primary/10 hover:bg-primary/15 overflow-clip p-2">
		<div class="flex flex-col items-center justify-center space-y-2 max-w-80 w-80 h-full rounded-md">
			<!-- title -->
			<div class="flex items-center justify-between w-full text-tbase">
				<div class="flex gap-x-2 pointer-events-none">
					<component :is="icon" :class="[color, 'w-5 h-auto']"></component>
					<h1>{{ columnType }}</h1>
				</div>
				<h1>...</h1>
			</div>
			<!-- task container -->
			<div class="flex-grow w-full overflow-y-auto scrollbar">
				<div class="flex-col mr-2">
					<draggable
						class="draggable-list"
						tag="ul"
						:component-data="{
							type: 'transition-group',
							name: !drag ? 'flip-list' : null,
							tag: 'ul'
						}"
						v-bind="dragOptions"
						@start="drag = true"
						@end="drag = false"
						:list="tasksRef"
						group="tasks"
						:key="columnType"
						itemKey="title"
					>
						<template #item="{ element, index }">
							<li :key="element.title">
								<TaskCard :title="element.title" :pills="element.pills" :columnType="columnType" />
							</li>
						</template>
					</draggable>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import circleIcon from '~icons/ic/outline-circle';
import draggable from 'vuedraggable';

const props = defineProps({
	columnType: {
		type: String,
		default: '' // Default value for columnType (if not provided)
	},
	tasks: {
		type: Object,
		default: {}
	},
	icon: {
		type: Object,
		default: circleIcon
	},
	color: {
		type: String,
		default: 'text-white'
	}
});

const { columnType, tasks, icon, color } = toRefs(props);
const tasksRef = ref(tasks.value);
const drag = ref(false);
</script>

<script>
export default {
	computed: {
		dragOptions() {
			return {
				animation: 200,
				group: 'description',
				disabled: false,
				ghostClass: 'ghost'
			};
		}
	}
};
</script>

<style scoped>
.flip-list-move {
	transition: transform 0.5s;
}

.no-move {
	transition: transform 0s;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
</style>
