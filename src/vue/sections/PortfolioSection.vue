<template>
  <SectionTemplate :section-data="props.sectionData">
    <!-- Services Grid -->
    <div class="row text-center gy-4 gy-md-5">
      <div
        v-for="item in props.sectionData['items']"
        class="col-12 col-sm-6 col-lg-4"
      >
        <!-- Service Item -->
        <div class="todo-item mb-lg-4">
          <!-- Image -->
          <img :src="item['imageUrl']" alt="Todo Image" class="todo-image" />

          <!-- Content -->
          <div class="todo-content-wrapper">
            <h5>{{ item['title'] }}</h5>
            <p class="text-muted text-4 mb-0">{{ item['description'] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <button
        @click="$refs.modal.openModal"
        class="btn btn-primary custom-rounded"
      >
        <i class="fas fa-plus"></i> Add Task
      </button>
    </div>
  </SectionTemplate>
  <ProjectModal
    ref="modal"
    :modalData="props.sectionData.modal"
    @add-task="_onAddTask"
  />
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import SectionTemplate from './templates/SectionTemplate.vue';
import ProjectModal from './components/ProjectModal.vue';

// Define Props
const props = defineProps({
  sectionData: Object,
});

// Define References
const modal = ref(null);
const todoList = ref(props.sectionData.items);
const selectedCategoryId = ref('All');

// Filtered items based on category
const filteredItems = computed(() => {
  return todoList.value.filter((item) => {
    return (
      selectedCategoryId.value === 'All' ||
      item.category === selectedCategoryId.value
    );
  });
});

// Method to handle opening the modal
const openModal = () => {
  if (modal.value) {
    modal.value.openModal();
  }
};

// Method to handle adding a new task
const _onAddTask = (taskData) => {
  todoList.value.push(taskData);
};

// Method to set the selected category for filtering
const _onFilterTabSelected = (categoryId) => {
  selectedCategoryId.value = categoryId;
};
</script>

<style lang="scss" scoped>
@import '/src/scss/_theming.scss';

.todo-item {
  @include generate-dynamic-styles-with-hash(
    (
      xxxl: (
        flex-direction: column,
        padding: 0 1rem,
      ),
      lg: (
        flex-direction: row,
        text-align: left,
        padding: 0 0.5rem,
      ),
      sm: (
        padding: 0,
      ),
    )
  );

  display: flex;
}

.todo-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem; // Adjust as per your design
}

.todo-content-wrapper {
  @include generate-dynamic-styles-with-hash(
    (
      xxxl: (
        margin-top: 1rem,
      ),
      lg: (
        margin-top: 0,
        margin-left: 1rem,
      ),
      md: (
        margin-left: 0.75rem,
      ),
    )
  );
}
.custom-rounded {
  height: 70px;
  width: 200px;
  border-radius: 30px; /* Adjust the value as per your preference */
}
</style>
